import React from 'react';

export default function DisplayImageAndText ({ imageSrc, title, description, altText, styleClassImage, styleClassContent }) {
    return (
        <div className={styleClassContent}>
            <img className={styleClassImage} src={imageSrc} alt={altText} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
