import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

const PostLists = () => {
    const posts = useSelector(selectAllPosts) // (state) => state.posts
    console.log(posts);

    const renderedPosts = posts.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostLists