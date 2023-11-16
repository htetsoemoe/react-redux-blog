import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postsSlice'
import PostsExcerpt from './PostsExcerpt'

const PostLists = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts) // (state) => state.posts
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>Error: {error}</p>
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostLists