import React from "react";
import Logo from "../assets/swiggy.svg";
import Arrow from "../assets/arrow.svg";
import Cart from "../assets/cart.png";
import Search from "../assets/search.svg";
import Discount from "../assets/discount.svg";
import Help from "../assets/help.svg";
import User from "../assets/user.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

    return (
        <>
            <nav className="navbar">
                <img src={Logo} alt="" className="logo" />
                <div className="div1_nav">
                    <p className="other">Other</p>
                    <div className="location">
                        Bengaluru&nbsp;
                        <img src={Arrow} alt="" className="arrow" />
                    </div>
                </div>
                <div className="div2_nav">
                    <p className="search">
                        <img src={Search} alt="" className="search_icon" />
                        Search{" "}
                    </p>
                </div>
                <div className="div3_nav">
                    <p className="offers">
                        <img src={Discount} alt="" className="discount_icon" />
                        Offers <span className="new">NEW</span>{" "}
                    </p>
                </div>
                <div className="div4_nav">
                    <p className="help">
                        <img src={Help} alt="" className="help_icon" />
                        Help
                    </p>
                </div>
                <div className="div5_nav">
                    <p
                        className="sign_in"
                    >
                        <img src={User} alt="" className="user_icon" />
                        Sign In
                    </p>
                </div>
                <div className="div6_nav">

                    <p className="cart">
                        <img src={Cart} alt="" className="cart_icon" />
                        Cart
                    </p>

                    {/* <span className="cart_num">{len}</span> */}
                </div>
            </nav>
        </>
    );
}

