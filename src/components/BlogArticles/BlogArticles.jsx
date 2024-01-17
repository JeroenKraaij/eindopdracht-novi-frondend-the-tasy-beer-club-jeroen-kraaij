import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../../constants/blogdata.json';
import styles from './BlogArticles.module.css';
import Image1 from '/public/images/image1.webp';

export default function BlogArticles() {
    return (
        <>
            {posts.map((post, index) => {
                const {
                    titleH1,
                    mainSubtitle,
                    author,
                    comments,
                    shares,
                    images,
                } = post;

                return (
                    <div key={index} className={styles['blog-post-card']}>
                        <div className={styles['blog-post-title']}>
                            <img src={images.url} alt={titleH1} />
                            <h3>
                                <Link to={`/artikelen/${post.id}`}>{titleH1}</Link>
                            </h3>
                            <p>{mainSubtitle}</p>
                            <p>({author})</p>
                        </div>
                        <div className={styles['blog-post-meta']}>
                            {comments} reactions - {shares} times shared
                        </div>
                    </div>
                );
            })}
        </>
    );
}