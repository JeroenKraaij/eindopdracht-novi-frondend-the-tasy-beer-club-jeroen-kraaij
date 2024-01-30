import './ProductArticle.css';
import { Link } from 'react-router-dom';

export default function ProductArticle ({ beer }) {
    if (!beer) {
        return <div>Loading...</div>;
    }

    return (
        <div className='product-card'>
            <h2>{beer.name}</h2>
            <img className='product-card-image' src={beer.image_url} alt={`Image of ${beer.name}`} />
            <div className='product-card-description'>{beer.description}</div>
            <Link to={`/product/${beer.id}`}>

                <button>Meer informatie</button>
            </Link>

        </div>
    );
};

