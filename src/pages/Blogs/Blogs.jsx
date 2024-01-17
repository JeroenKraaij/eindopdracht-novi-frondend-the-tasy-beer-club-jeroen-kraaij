import { Link, useParams } from 'react-router-dom';
import posts from '../../constants/blogdata.json';

export default function BlogPost() {
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
        <article >
            <div key={articlePost.id}>
                <img src={images.url} alt={titleH1}/>
                <h1>{titleH1}</h1>
                <h2>{mainSubtitle}</h2>
                <p>{mainArticle}</p>
                <h2>{titleH2}</h2>
                <p>{article02}</p>
                <h3>{titleH3}</h3>
                <p>{article03}</p>
                <h3>{titleH4}</h3>
                <p>{article04}</p>
                <h3>{titleH5}</h3>
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