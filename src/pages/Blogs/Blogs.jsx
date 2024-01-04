import './Blogs.css'
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import posts from '../../constants/blogdata.json';

const Blogs = () => {
    const { id } = useParams();
    const post = posts.find(post => {
        return post.id === parseInt(id, 10);
    });

    return (
        <>
            <article >
                <div >
                    <h1>{post.title}</h1>
                    <h2>{post.subtitle}</h2>
                    <p>Geschreven door {post.author} op </p>
                    <p>⏰ {post.readTime} minuten leestijd</p>
                    <p>{post.content}</p>
                    <p>{post.comments} reactions - {post.shares} times shared</p>

                </div>
                <Link to={`/blogs`}><button>Back to blogs</button></Link>
            </article>
        </>
    )
}

export default Blogs