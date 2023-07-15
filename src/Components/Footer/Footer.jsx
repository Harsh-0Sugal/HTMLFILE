import React from 'react';
import "./footer.css";

import { column1, column2, column3, column4 } from "../../cities-data";

function Footer() {
    return (
        <>
            <footer className="footer1">
                <div className="footer1__company">
                    <h3 className="footer1--heading">COMPANY</h3>
                    <div className=" footer--list">
                        <div className="footer--list-item">About Us</div>
                        <div className="footer--list-item">Team</div>
                        <div className="footer--list-item">Careers</div>
                        <div className="footer--list-item">Swiggy Blog</div>
                        <div className="footer--list-item">Bug Bounty</div>
                        <div className="footer--list-item">Swiggy One</div>
                        <div className="footer--list-item">Swiggy Corporate</div>
                        <div className="footer--list-item">Swiggy Instamart</div>
                    </div>
                </div>
                <div className="footer1__contact">
                    <h3 className="footer1--heading">CONTACT</h3>
                    <div className="footer--list">
                        <div className="footer--list-item">Help & Support</div>
                        <div className="footer--list-item">Partner with us</div>
                        <div className="footer--list-item">Ride with us</div>
                    </div>
                </div>
                <div className="footer1__legal">
                    <h3 className="footer1--heading">LEGAL</h3>
                    <div className="footer--list">
                        <div className="footer--list-item">Terms & Conditions</div>
                        <div className="footer--list-item">Refund & Cancellation</div>
                        <div className="footer--list-item">Privacy Policy</div>
                        <div className="footer--list-item">Cookie Policy</div>
                        <div className="footer--list-item">Offer Terms</div>
                        <div className="footer--list-item">Phishing & Fraud</div>
                    </div>
                </div>
                <div className="footer1__images">
                    <div className="footer__images-image1">
                        <img className="foot_icon" style={{ width: "200px", height: "65px" }} src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" />
                    </div>
                    <div className="footer1__images-image2">
                        <img className="foot_icon" style={{ width: "200px", height: "65px" }} src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" />

                    </div>
                </div>

            </footer>
            <footer className="footer2">
                <div>
                    <h3 className='footer2--heading'>WE DELIVER TO</h3>
                    <div className="footer--list">
                        {
                            column1.map((city, index) => (
                                <div className="footer--list-item" key={index}>{city}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="footer2--column">
                    {
                        column2.map((city, index) => (
                            <div className="footer--list-item" key={index}>{city}</div>
                        ))
                    }
                </div>
                <div className="footer2--column">
                    {
                        column3.map((src, index) => (
                            <div className="footer--list-item" key={index}>{src}</div>
                        ))
                    }
                </div>
                <div className="footer2--column">
                    {
                        column4.map((city, index) => (
                            <div className="footer--list-item" key={index}>{city}</div>
                        ))
                    }
                </div>
            </footer>
            <footer className="footer3">
                <img
                    className="footer3__logo footer_logo"
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
                    width="150px"
                    height="45px"
                />
                <p style={{ color: "white", fontSize: "21px" }}>&copy; 2022 Swiggy</p>
                <div
                    className="footer3__socmed"
                >
                    <img
                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
                        width="24"
                        height="24"
                        className="footer3__socmed-img"
                    />
                    <img
                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
                        width="24"
                        height="24"
                        className="footer3__socmed-img"
                    />
                    <img
                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
                        width="24"
                        height="24"
                        className="footer3__socmed-img"
                    />
                    <img
                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
                        width="24"
                        height="24"
                        className="footer3__socmed-img"
                    />
                </div>
            </footer>
        </>
    )
}

export default Footer