import React from 'react';


const RestaurantCard = ({ restaurant}) => {
    const { name, cuisines, avgRating ,cloudinaryImageId } = restaurant.info;
    const cloudinaryUrl ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId;
    return (
        <div className='card' key={restaurant.info.id}>
         <img src={cloudinaryUrl} alt={name} />
            <h2>{name}</h2>
            <h5>{cuisines.join(', ')}</h5>
            <h4>{avgRating}</h4>
        </div>
    );
};
export default RestaurantCard;