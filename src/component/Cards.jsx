import React from 'react';
import { useState, useEffect } from 'react';
import { restaurantList } from '../../mockData';

const Card = () => {

const [restaurant, setRestaurant] = useState(restaurantList);
const [searchItem, setSearchItem] = useState('');

// const fetcData = () => {
//     fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
//     .then(response => response.json())
//     .then(data =>  console.log(data))
//     .catch(error => console.error('Error:', error));
// }

// useEffect(() => {
//     fetcData();
// },[]);

  const handleSort = (e) => setSearchItem(e.target.value);
  const handleBtnClick = () => {
    const filteredRestaurant = restaurantList.filter(restaurant => restaurant.restaurantName.toLowerCase().includes(searchItem.toLowerCase()));
    setRestaurant(filteredRestaurant);
  };

  return (
    <>  
        <h2>Restaurants with online food delivery</h2>
        <input type="text" className='searchItem' placeholder='Search' onChange={handleSort} value={searchItem}/>
        <button className='searchItemBtn' onClick={() => handleBtnClick()}>Search</button>
        <div className="card">
        {
            restaurant.map(restaurant => {
                return (
                    <>
                    <div>
                        <a href='restaurant' className='test'>
                            <div key={restaurant.id} className="card-content">
                                <img
                                    src={restaurant.img}
                                    alt="Card Image"
                                    className="card-img" />
                                <h2 className="card-title">{restaurant.restaurantName}</h2>
                                <p className="card-text">{restaurant.cuisine}</p>
                            </div>
                        </a>
                    </div>
                    </>
            )}
        )
        }
    </div>
    </>
  );
};

export default Card;
