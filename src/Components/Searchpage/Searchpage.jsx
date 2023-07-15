import React, { useEffect, useState } from 'react'
import "./Searchpage.css";
import Footer from '../Footer/Footer';
import food from '../../restaurant';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import StarIcon from '@mui/icons-material/Star';

function Searchpage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Carousel />
      {/* <div className="carousel">
        <div className="carousel-first-image"><img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" className="_1gDnr" /></div>
        <div className="carousel-sec-image"><img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v" className="_1gDnr" /></div>
        <div className="carousel-third-image"><img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo" className="_1gDnr" /></div>
        <div className="carousel-third-image">    <img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3" className="_1gDnr" /></div>
      </div>  */}
      <div className='restaurant-nav'>
        <div className='restaurant-logo'>
          <span className="logo-navbar">77 restaurants</span>
          <ul className='nav-right-side'>
            <li>Relevance</li>
            <li>Delivery Time</li>
            <li>Rating</li>
            <li>Cost: Low To High</li>
            <li>Cost: High To Low</li>
            <li>Filters <div className="_3eFQ-"><span className="icon-filter _1PoQ7"></span></div></li>

          </ul>
        </div>

      </div>
      <hr className='control-line'></hr>
      <div className='product__rating'>
        {
          food.map((item, index) => {
            return (
              <div className="card" key={index} onClick={() => navigate({
                pathname: "/product-detail",
                search: `?productId=${item.id}`
              })} >
                <img className='card-img' src={item.src} />
                <span className='item-name'>{item.name}</span>
                <div className='item-desc'>{item.desc}</div>
                <div className='item-rating'>
                  <div className='rating'><StarIcon style={{ fontSize: "10px", marginRight: "2px" }} />{item.rating}</div>
                  <div className='item-time'>{item.time}</div>
                  <h5 className='item-price'>{item.price}</h5>
                </div>
              <div className="index">
                QUICK VIEW
                </div>
              </div>

            )
          })
        }

      </div>

      <Footer />

    </>

  )
}

export default Searchpage;