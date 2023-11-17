import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postsSlice'
import PostsExcerpt from './PostsExcerpt'

const PostLists = () => {

    const posts = useSelector(selectAllPosts) // (state) => state.posts
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

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
            {content}
        </section>
    )
}

export default PostLists
