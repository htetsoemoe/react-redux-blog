import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPostById, updatePost, deletePost } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditPostForm = () => {
    const dispatch = useDispatch()
    const { postId } = useParams()
    const navigate = useNavigate()

    const post = useSelector((state) => selectPostById(state, Number(postId)))
    const users = useSelector(selectAllUsers)

    const [title, setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.body)
    const [userId, setUserId] = useState(post?.userId)
    const [requestStatus, setRequestStatus] = useState('idle')

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onAuthorChanged = (e) => setUserId(e.target.value)

    const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle'

    const onUpdatePostClicked = () => {
        if (canSave) {
            try {
                setRequestStatus('pending')
                dispatch(updatePost({
                    id: post.id,
                    title,
                    body: content,
                    userId,
                    reactions: post.reactions
                })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate(`/post/${postId}`)
            } catch (error) {
                console.error('Failed to save the post.', error)
            } finally {
                setRequestStatus('idle')
            }
        }
    }

    // Generate user options
    const usersOption = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const onDeletePostClicked = () => {
        try {
            setRequestStatus('pending')
            dispatch(deletePost({id: post.id})).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        } catch (error) {
            console.error('Failed to delete the post', error)
        } finally {
            setRequestStatus('idle')
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postAuthor'>Author:</label>
                <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOption}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onUpdatePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
                <button
                    type="button"
                    onClick={onDeletePostClicked}
                    disabled={!canSave}
                >
                    Delete Post
                </button>
            </form>
        </section>
    )
}

export default EditPostForm