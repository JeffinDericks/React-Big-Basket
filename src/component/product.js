import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, update1 } from "./slice";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdOutlineSaveAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aos from "aos";
import "aos/dist/aos.css"


const Product = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    const [vegetables, setVegetables] = useState([])
    const [value, setValue] = useState(1)

    const select = useSelector((a) => {
        return a.key.keyjson.list
    })
    console.log(select);

    const dispatch = useDispatch()

    const handleadd = (a) => {
        dispatch(update(1))
        // setAdding(true)
        console.log(a.id);



        const bool = select.map((e) => {
            return e.id == a.id ? { ...e, boolean: true } : e
        })
        console.log(bool);
        dispatch(update1(bool))

        const updateveg = vegetables.map((event) => {
            return event.id == a.id ? { ...event, boolean: true } : event
        })
        setVegetables(updateveg)
    }


    const left = () => {
        if (value > 1)
            setValue(value - 1)
    }

    const right = () => {
        if (value < 6)
            setValue(value + 1)
    }

    useEffect(() => {
        const vegproduct = select.filter((a) => {
            return a.product == "vegetables"
        })
        setVegetables(vegproduct)
    }, [])

    const navi = useNavigate();
    const click = (a) => {
        navi(`/productdetails/?id=${a.id}`)
        // console.log(a)
    }

    const settings = {

        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="total" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
            <div className="container card-section">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 basket">
                        <h1>My Smart Basket</h1>
                    </div>
                    {/* <div className="col-lg-4 view-all">
                        <p>View all</p>
                        <div className="arrow-buttons">
                            <button><FaAngleLeft /></button>
                            <button><FaAngleRight /></button>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="container cards d-sm-none d-md-block d-lg-block">
                <div className="row">
                    {vegetables.map((a) => {
                        return (
                            <div className=" col-lg-3 col-md-6 col-sm-12">
                                <div className="mapped">
                                    <img src={a.img} onClick={() => click(a)} className="image-click" />
                                    <h6>FRESHO</h6>
                                    <p>{a.name}</p>
                                    <select>
                                        <option>1kg</option>
                                        <option>500g</option>
                                        <option>2kg</option>
                                        <option>3kg</option>
                                    </select>
                                    <p>₹ {a.price}</p>
                                    <div className="shopifyy">
                                        <p className="shopp"><FaShopify /></p>
                                        <p>Get it for ₹19!</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <button className="save"><MdOutlineSaveAlt /></button>
                                        {console.log(a.boolean)}
                                        {a.boolean ?
                                            <button className="add" onClick={() => handleadd(a)}>Added</button> :
                                            <button className="add" onClick={() => handleadd(a)}>Add</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container cards d-sm-block d-md-none d-lg-none">
                {/* <div className="row"> */}
                <Slider {...settings}>

                    {vegetables.map((a) => {
                        return (
                            // <div className=" col-lg-3 col-md-6 col-sm-12">
                            <div className="mapped">

                                {/* <div className="arrow-images"> */}
                                {/* <p className="leftarrow" onClick={left}><FaAngleLeft /></p> */}
                                <img src={a.img} onClick={() => click(a)} />
                                {/* <p className="rightarrow" onClick={right}><FaAngleRight /></p> */}
                                {/* </div> */}

                                <h6>FRESHO</h6>
                                <p>{a.name}</p>
                                <select>
                                    <option>1kg</option>
                                    <option>500g</option>
                                    <option>2kg</option>
                                    <option>3kg</option>
                                </select>
                                <p>$ {a.price}</p>
                                <div className="shopifyy">
                                    <p className="shopp"><FaShopify /></p>
                                    <p>Get it for ₹19!</p>
                                </div>
                                <div className="add-to-cart">
                                    <button className="save"><MdOutlineSaveAlt /></button>
                                    {a.boolean ?
                                        <button className="add" onClick={() => handleadd(a)}>added</button> :
                                        <button className="add" onClick={() => handleadd(a)}>add</button>
                                    }
                                </div>
                            </div>
                            // </div>
                        )
                    })}
                </Slider>

                {/* </div> */}
            </div>



        </div>
    )
}

export default Product