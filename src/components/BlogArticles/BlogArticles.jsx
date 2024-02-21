import styles from './BlogArticles.module.css';
import { Link } from 'react-router-dom';
import posts from '../../constants/blogData.json';

export default function BlogArticles() {
    return (
        <ul className={styles["blog-post-list"]}>
            {posts.map((post, index) => {
                const {id, titleH1, mainArticle,  author, comments, shares, images,
                } = post;

                return (
                    <li key={index} className={styles["blog-post-card"]}>
                        <figure>
                            <img className={styles["blog-post-img"]} src={images.url} alt={titleH1} />
                        </figure>
                        <div className={styles["blog-post-content"]}>
                            <h3>
                                <Link to={`/artikelen/${id}`}>{titleH1}</Link>
                            </h3>
                            <p>{mainArticle}</p>

                        </div>
                        <div className={styles['blog-post-meta']}>
                            {comments} reactions - {shares} times shared
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
