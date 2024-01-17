import styles from './ArticlePage.module.css';
import posts from '../../constants/blogdata.json';
import BlogArticles from "../../components/BlogArticles/BlogArticles.jsx";

export default function ArticlePage() {
    return (
        <article>
            <h1>Bekijk alle {posts.length} posts op het platform</h1>
            <div className={styles['articles-blog-post']}>

                {posts.map((post) => (
                    <BlogArticles key={post.id} post={post} />
                ))}
            </div>
        </article>
    );
}
