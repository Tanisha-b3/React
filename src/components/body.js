/*what is state 
  A hook is javascript function 
  A state we for declaring variables
  use state is hook variable
  */

import React, { useState } from 'react'
import RestaurantCard from './restaurantcard';
import { restaurant } from '../../const';

function filterData(searchText, restaurants) {
  const filter = restaurants.filter((restaurant) => restaurant.info.name.includes(searchText));
  return filter;
}


 
const Body = () => {
const [searchText,setSearchTexT] = useState("KFC");//to create state variables
// This returns array search Text is local variable
//return =[variable name,function to update variable]
const [restaurants ,setRestaurant ] =useState(restaurant);
return (
        <>
        <div className='search-container'>
          <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={searchText}
          onChange={(e)=> {
           setSearchTexT(e.target.value);
            }
          }
          />
          <button className='button-search'
          onClick={()=> {
            //need tofilter the data
            //
            const data=filterData(searchText,restaurants);
              setRestaurant(data);
          }}
          >Search</button>
        </div>
            <div className='restaurant-list'>
            {restaurants.map((restaurant) => (
                <RestaurantCard{...restaurant.info} key={restaurant.info.id} restaurant={restaurant} />
            ))}
        </div>
        </>
    );
};
export default Body;