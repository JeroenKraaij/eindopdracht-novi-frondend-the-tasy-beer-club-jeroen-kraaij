import React from "react";
import './ProductArticle.css';

function ProductArticle({beer}) {
    return (
        <>
            <div className='product-article'>
                <h2>{beer.name}</h2>
                <img className='product-image' src={beer.image_url} alt={beer.name}/>
                <text className='product-description'>{beer.description}</text>
                <button>Meer informatie</button>
            </div>
        </>
    );
}

export default ProductArticle;