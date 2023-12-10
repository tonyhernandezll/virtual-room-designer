import React from 'react';

const FurnitureItem = ({ name, image }) => {
    return (
        <div className="furniture-item">
            {/* Display furniture item (image, name, etc.) */}
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default FurnitureItem;
