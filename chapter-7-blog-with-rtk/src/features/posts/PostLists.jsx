import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostIds } from './postsSlice'
import PostsExcerpt from './PostsExcerpt'
import { useGetPostsQuery } from './postsSlice'

const PostLists = () => {

    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()

    // selectPostIds from postSlice
    const orderedPostIds = useSelector(selectPostIds) // (state) => state.posts

    let content
    if (isLoading) {
        content = <p>"Loading..."</p>
    } else if (isSuccess) {
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <p>Error: {error}</p>
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PostLists
