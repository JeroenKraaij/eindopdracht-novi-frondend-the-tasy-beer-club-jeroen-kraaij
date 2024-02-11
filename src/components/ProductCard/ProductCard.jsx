import './ProductCard.css';
import { Link } from 'react-router-dom';
import {maximizeWords} from "../../helpers/maximizeWords.js";

export default function ProductCard ({ beer }) {
    if (!beer) {
        return <div>Loading...</div>;
    }

    return (
        <div className='product-card'>
            <h2>{beer.name}</h2>
            <img className='product-card-image' src={beer.image_url} alt={`Image of ${beer.name}`} />
            <div className='product-card-description'>
                {maximizeWords(beer.description, 100)}</div>
            <Link to={`/product/${beer.id}`}>
                <button>Meer informatie</button>
            </Link>
        </div>
    );
}

