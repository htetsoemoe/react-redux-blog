import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostIds, getPostsStatus, getPostsError } from './postsSlice'
import PostsExcerpt from './PostsExcerpt'

const PostLists = () => {

    const orderedPostIds = useSelector(selectPostIds) // (state) => state.posts
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    let content
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postStatus === 'succeeded') {
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>Error: {error}</p>
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PostLists
