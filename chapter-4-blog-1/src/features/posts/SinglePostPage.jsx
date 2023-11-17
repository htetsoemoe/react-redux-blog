import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

import { useParams } from 'react-router-dom'

const SinglePostPage = () => {
    const { postId } = useParams()  // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.title}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo post={post} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default SinglePostPage
