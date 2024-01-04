import React from "react";
import './Articles.css';
import {Link} from 'react-router-dom';
import posts from '../../constants/blogdata.json';

const Articles = () => {
    console.log(posts)

    return (
        <>
            {posts.map((post, index) => (
                <div key={index} className='blog-post-card'>
                    <div className='blog-post-tittle'>
                        <h3>
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p>({post.author})</p>
                    </div>
                    <div className='blog-post-meta'>{post.comments} reactions - {post.shares} times shared</div>
                </div>

            ))}

        </>
    )
}

export default Articles