import React from 'react';
import food from "../../restaurant";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./ProductDetail.css";
import StarIcon from '@mui/icons-material/Star';

function ProductDetail() {
  const searchQuery = new URLSearchParams(window.location.search).get("productId");
  const productArray = food.filter((item) => {
    return item.id === parseInt(searchQuery);
  });
  const product = productArray[0];
  console.log(product);

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="product-detail">
          <div className="pathankot">
            <h4 className='home-heading'>Home&nbsp;/&nbsp;&nbsp;Pathankot&nbsp;/&nbsp;&nbsp;Khalsa Hindu Dhaba</h4>
            <img src="/static/media/search.9e46e056.svg" alt="" class="search_img"></img>
          </div>
          <div className='product-name-desc-address'>
            <div className='product-name'>
              {product.name}
            </div>
            <div className='product-desc'>{product.desc}</div>
            <div className='product-address'>{product.address}</div>
            <div className='full-rattings'>
              <div className="rattings">
                <StarIcon style={{ fontSize: "17px", marginRight: "2px", color: "#3d9b6d" }} />< span className="span">4.2</span>
                <div className="flex"> 500 + rattings</div>
              </div></div>

          </div>
          <hr />
          <div className='product-time-price'>
            <div className='product-time'>{product.time}</div>
            <div className='prouduct-price'>{product.price}</div></div>

          <div className="product-banner">
            <div className="discount">


              <div className='discount__first'>
                <div className="discount__first-top">
                  <img style={{maxHeight: "35 px"}} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart" className="RestaurantOffer_icon" alt="" />
                  <h3 className='upto'>20% OFF UPTO ₹120</h3>
                </div>

                <span className='discount__first-bottom'>USE FLAT125</span>
              </div>


              <div className='discount__second'>
                <div className="discount__second-top">
                  <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/4abdba6754dfedb04324150e316a4004" className="2nd_icon" alt="" />
                  <h3 className='UPTO-SEC'>25% OFF UPTO ₹110</h3>
                </div>
                <span className='discount__second-bottom'>USE KOTAK125 | ABOVE₹400</span>
              </div>


              <div className="discount__third">
                <div className="discount__third-top">
                  <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/1acdb97aadcb61b323307845bda86535" class="Rest_icon__2Ye7Z" alt="" />
                  <h3 className='above'>20% OFF UPTO ₹120</h3>
                </div>
                <span className="discount__third-bottom"> USE FEDERALCC | ABOVE₹400</span>
              </div>


            </div>

            <h3 className="Veg">VEG ONLY</h3>
            <div className='horizontal'><hr /></div>
            <div className="full-card">
              <div className='category'>{
                product.item[0].category
              }</div>

              {
                product.item.map((item, index) => {
                  return <div>
                    <div className="single-card">
                      <div className="name-price">
                        <div className="fssai-logo"><img className="veg-logo" src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/veg-300x259.jpg" />
                        </div>
                        <div className="name">
                          {item.name}
                        </div>
                        <div className="price-product">
                          {item.price}
                        </div></div>
                      <div className="dipped">
                        <div className="description">
                        </div>
                        <div className="img_url">
                          <img className="img_url-image" src={item.img_url} />
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                })
              }


              <div className="fssai-container">

                <div className="fssai-container__top">
                  <div>
                    <img id="fssai-container__top-image" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" class="RestaurantLicence_image__2-5G_" alt="FSSAI" />
                  </div>
                  <div className="fssai-container__top-license">License No. 12118641000010</div>
                </div>

                <hr />


                <div className="fssai-container__bottom">
                  <div className="fssai-contaianer__bottom-title">Himalaya Bakers</div>
                  <div className="fssai-container__bottom-desc">(Outlet:Pathankot) </div>
                  <div className="fssai-container__bottom-location"><LocationOnIcon style={{ fontSize: "13px" }} /><span className="fssai-container__bottom-location-text">sunder nagar dhangu road pathankot</span></div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div >

      <Footer />
    </>
  )
};

export default ProductDetail;