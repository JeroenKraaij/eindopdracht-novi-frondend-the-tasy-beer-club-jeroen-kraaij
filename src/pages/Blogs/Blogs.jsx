import styles from '../Blogs/Blogs.module.css';
import { Link, useParams } from 'react-router-dom';
import posts from '../../constants/blogData.json';


export default function Blogs () {
    const { id } = useParams();
    const articlePost = posts.find(post => post.id === parseInt(id, 10));

    if (!articlePost) {
        return <p>Post not found</p>;
    }

    const {
        titleH1, mainSubtitle, mainArticle, titleH2, article02, titleH3, article03, titleH4, article04, titleH5, article05,
        author, readTime, comments, shares, images
    } = articlePost;

    return (
        <article className={styles ['article-blog']} >
            <div key={articlePost.id}>
                <h1>{titleH1}</h1>
                <p>{mainSubtitle}</p>
                <img src={images.url} alt={titleH1}/>
                <p>{mainArticle}</p>
                <h3>{titleH2}</h3>
                <p>{article02}</p>
                <h3>{titleH3}</h3>
                <p>{article03}</p>
                <h4>{titleH4}</h4>
                <p>{article04}</p>
                <h5>{titleH5}</h5>
                <p>{article05}</p>
                <p>Geschreven door {author} op </p>
                <p>⏰ {readTime} minuten leestijd</p>
                <p>{comments} reacties - {shares} keer gedeeld</p>
            </div>
            <Link to="/artikelen">
                <button>Terug naar Blogs</button>
            </Link>
        </article>
    );
}