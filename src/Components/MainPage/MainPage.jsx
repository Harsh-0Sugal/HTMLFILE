import React, { useState } from "react";
import Animation from "./Animation/Animation";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import Footer from "../Footer/Footer";


function Card(props) {
  return (
    <div className="second__card">
      <div className="second__card-image">
        <img
          style={{ width: props.width, height: props.height }}
          src={props.imgsrc}

        />
      </div>
      <h3 className="second__card-heading"> {props.text} </h3>
      <p className="second__card-paragraph"> {props.para} </p>

    </div>
  )
}


function MainPage() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="first">
        <div className="first__left">
          <div className="first_left_navbar">
            <div>
              <img src="https://d1ye2ocuext585.cloudfront.net/images/s/Swiggy_Logo_9.png" />
            </div>
            <div className="first_leftnavbar_buttons">
              <div>
                <button
                  className="first_leftnavbar_buttons-login"
                >
                  Login
                </button>
              </div>
              <div>
                <button
                  className="first_leftnavbar_buttons-signup"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <Animation />

          <div className="first_left_form">
            <div className="first_leftform_input-cont">
              <input
                className="first_leftforminput-cont_input"
                type="text"
                placeholder="Enter your delivery location"
                autoFocus={true}
              />

              <button className="first_leftform_locateme">
                <MyLocationIcon style={{ fontSize: "15px" }} /> Locate Me
              </button>

              <button className="first_leftform_findfood"
                onClick={() => navigate("/search-page")}> Find Food</button>
            </div>
          </div>
          <div className="first_left_popular">
            <h3 className="first_left_popular-heading">
              POPULAR CITIES IN INDIA
            </h3>
            <div className="first_left_popular-names">
              <div className="first_left_popular-name">Ahmedabad</div>
              <div className="first_left_popular-name">Bangalore</div>
              <div className="first_left_popular-name">Chennai</div>
              <div className="first_left_popular-name">Delhi</div>
              <div className="first_left_popular-name">Gurgaon</div>
              <div className="first_left_popular-name">Hyderabad</div>
              <div className="first_left_popular-name">Kolkata</div>
              <div className="first_left_popular-name">Mumbai</div>
              <div className="first_left_popular-name">Pune &nbsp;&</div>
              <div className="first_left_popular-name">more.</div>
            </div>
          </div>
        </div>
        <div className="first__right">
          <img
            style={{
              width: "755px",
              height: "100%",
              objectFit: "cover",
              objectPosition: "-3px -27px",
            }}
            src="https://web.archive.org/web/20210903175246im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
          />
        </div>
      </section>
      <section className="second">
        <Card
          imgsrc="https://web.archive.org/web/20210903175337im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf  "
          width="105px"
          height="199px"
          text="No Minimun Order"
          para="Know where your order is at all times, from the restaurant to your doorstep"
        />
        <Card
          imgsrc="https://web.archive.org/web/20210903175339im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
          width="112px"
          height="206px"
          text="Live Order Tracking"
          para="Know where your order is at all times, from the restaurant to your doorstep"
        />
        <Card
          imgsrc="https://web.archive.org/web/20210903175339im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
          width="124px"
          height="188px"
          text="Lightning-Fast Delivery"
          para="Experience Swiggy's superfast delivery for food delivered fresh & on time
        "
        />

      </section>
      <section className="third">
        <div className="third__left">
          <h1 className="third__left-heading">
            Restaurants in
            <br /> your pocket
          </h1>
          <p className="third__left-paragraph">
            Order from your favorite restaurants & track on the go, with the
            all-new Swiggy app.
          </p>
          <div className="third__left-images">
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android">
              <img
                style={{ height: "54px" }}
                src="https://web.archive.org/web/20210903175340im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
              />
            </a>
            <a href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920">
              <img
                style={{ height: "54px" }}
                src="https://web.archive.org/web/20210903175341im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
              />
            </a>
          </div>
        </div>
        <div className="third__right">
          <div>
            <img
              className="third__right-firstimage"
              src="https://web.archive.org/web/20210903175342im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
              alt=""
            />
          </div>
          <div>
            <img
              className="third__right-secondimage"
              src="https://web.archive.org/web/20210903175343im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;