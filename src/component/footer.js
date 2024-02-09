import React, { useEffect } from "react";
import "./mystyle.scss"
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import image from "../images/play.png"
import image1 from "../images/bbblack.png"

import Aos from "aos";
import "aos/dist/aos.css"

const Footer = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="footer-section" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 footer-part-1">
                        <h3>bigbasket - online grocery store</h3><br />
                        <p>Did you ever imagine that the freshest of fruits and vegetables, top-quality pulses and food grains, dairy products, and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? In today's fast-paced world, bigbasket.com, India's pioneering online grocery store, continues to bring a staggering array of over 40,000 products from more than 1,000 brands to the doorsteps of over 10 million satisfied customers. From essential household cleaning products to the latest beauty and makeup trends, bigbasket remains your one-stop shop for daily needs.<br /><br />


                            In these times, we've eliminated the stress associated with shopping for daily essentials. You can now effortlessly order all your household products and groceries online. Plus, the added convenience of finding all your requirements at a single source, coupled with substantial savings, demonstrates that bigbasket, India's largest online supermarket, has transformed the way we shop for groceries. Online grocery shopping has become second nature. And when it comes to freshness, whether it's fruits and vegetables or dairy and meat, we've got you covered! Easily obtain fresh eggs, meat, fish, and more with just a few clicks.<br /><br />

                            We now serve 300+ cities and towns across India and ensure swift delivery times, guaranteeing that all your groceries, snacks and branded foods reach you on time.<br /><br />

                            Slotted Delivery: Choose the most convenient delivery slot to receive your groceries, ranging from early morning delivery for early birds to late-night delivery for those on the night shift. bigbasket caters to every schedule.

                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 all-about-contact">
                            <p>Bigbasket</p>
                            <ul>
                                <li>About Us</li>
                                <li>Become A bigbasket Rider</li>
                                <li>In News</li>
                                <li>Green bigbasket</li>
                                <li>Privacy Policy</li>
                                <li>Affiliate</li>
                                <li>Terms and Conditions</li>
                                <li>Careers At bigbasket</li>
                                <li>bb Instant</li>
                                <li>bb Daily</li>
                                <li>bb Blog</li>
                                <li>bbnow</li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-sm-12 all-about-contact">
                            <p>Help</p>
                            <ul>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                                <li>bb Wallet FAQs</li>
                                <li>bb Wallet T&Cs</li>
                                <li>Vendor Connect</li>
                            </ul>


                        </div>

                        <div className="col-lg-6 col-sm-12 bb-black">
                            <div className="bb-image">
                                <img src={image1} />
                            </div>
                            <div className="app-play">
                                <img src={image} />
                            </div>
                            <div className="logos">
                                <a href="#"><TiSocialFacebook /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaPinterestP /></a>

                            </div>
                            <div className="connect">
                                <p>Vendor Connect</p>
                            </div>
                            <div className="seller">
                                <button>Become a seller</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="last-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 copy-rights">
                            <p>Copyright © 2023-2025 Supermarket Grocery Supplies Pvt Ltd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer