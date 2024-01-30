import styles from './ArticlePage.module.css';
import posts from '../../constants/blogData.json';
import BlogArticles from "../../components/BlogArticles/BlogArticles.jsx";

export default function ArticlePage() {
    return (
        <article>
            <h1>Bekijk alle {posts.length} posts op het platform</h1>
            <div className={styles['articles-blog-post']}>
                <BlogArticles/>

            </div>
        </article>
    );
}
