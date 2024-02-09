import React, { useEffect, useState } from "react";
import { FaCompass } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import "./mystyle.scss"
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingTag } from "react-icons/ci";
import { BsBasket2Fill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineLogin } from "react-icons/ai";
import Cartproduct from "./cartproduct";
import { IoCloseSharp } from "react-icons/io5";

// import Aos from "aos";
// import "aos/dist/aos.css"


const Cartheader = () => {
    // useEffect(()=>{
    //     Aos.init()
    // })
    const [onhover, setOnhover] = useState(false)
    const [changebutton, setChangebutton] = useState(true)


    const changedbutton = () => {
        setChangebutton(true)
        setOnhover(false)
    }



    const hoveron = (e) => {
        // e.preventDefault();
        setOnhover(true)
        setChangebutton(false)
        console.log("jeffin")
    }

    const hoveroff = () => {
        setTimeout(() => {
            setOnhover(false)
        }, 20000)
        console.log("jefoff");
    }

    // const overon=()=>{
    //     setHoverdiv(false)
    //     console.log("dericks")
    // }
    const navi= useNavigate()

    const navigatetohome=()=>{
        navi("/")
    }




    const select = useSelector((a) => {
        return a.key.keyjson.count
    })
    return (
        <div className="cart-header" >

            <div className="container d-lg-block d-sm-none">
                <div className="row">
                    {/* <div className="col-lg-2">
                        <p style={{fontSize:"15px",marginTop:"10px"}}>Be a member in our </p>
                    </div>
                    <div className="col-lg-6"></div>
                    <div className="col-lg-4">
                        <div className="phone-location">
                            <p><CiPhone /> 1860 123 1000</p>
                            <p><CiLocationOn /> Bangalore</p>
                            <p><AiOutlineLogin /> Login/Sign up</p>
                        </div>
                    </div> */}
                    <div className="col-lg-2 cart-header-img">
                        <img src="https://gumlet-images.assettype.com/afaqs%2F2021-11%2Fc57035f1-ad95-4b5c-881e-086506b1f6db%2Fbb_TATA_Double_line_logo.jpg?format=webp&w=480&dpr=2.6" onClick={navigatetohome}/>
                    </div>
                    <div className="col-lg-6 header-input cart-input">
                        <input type="search" placeholder="search for products" />
                    </div>

                    <div className="col-lg-4 header-cart">
                        {/* <ul> */}
                        {/* <li><button><FaCompass /> Select Location</button></li>
                            <li><button className="login">Login/out</button></li> */}


                        <div className="phone-location">
                            <p><CiPhone /> 1860 123 1000</p>
                            <p><CiLocationOn /> Bangalore</p>
                            <p><AiOutlineLogin /> Login/Sign up</p>
                        </div>
                        <div className="cart-basket" onMouseOver={hoveron} onMouseLeave={hoveroff}>
                            <h1 ><BsBasket2Fill style={{ color: "red" }} /></h1>
                            <p>My Basket <br />{select > 0 ? select : ""} Item</p>
                        </div>


                        {/* </ul> */}
                    </div>
                    <div className="col-lg-3 header2">
                        <nav>
                            <button style={{ fontSize: "18px" }}>Shop by category</button>
                            {/* <a href="#">Fruits</a>
                            <a href="#">
                                <Link to="/tea">
                                    Tea
                                </Link>
                            </a>
                            <a href="#">Ghee</a>
                            <a href="#">Rice</a> */}
                            <a href="#" style={{ fontSize: "18px" }}><CiShoppingTag style={{ color: "red" }} /> Offers</a>

                        </nav>
                    </div>
                    <div className="col-lg-9"></div>

                </div>
            </div>

            <div className="container d-sm-block d-lg-none mob-header">
                <div className="row">
                    <div className="col-sm-2 header-img">
                        <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1481913057/idpaksg5l65vvdiunlvt.png" onClick={navigatetohome}/>
                    </div>
                    <div className="col-sm-7 header-input">
                        <input type="search" placeholder="search for products" />
                    </div>
                    <div className="col-sm-3 header-bar">
                        
                        {changebutton ?
                            <button onClick={hoveron}>{select > 0 ? select : ""} <BsBasket2Fill style={{ color: "black" }} /></button>
                            :
                            <button onClick={changedbutton}><IoCloseSharp /></button>}
                    </div>
                </div>
            </div>
            <div className="vandhudu-sisae" >
                {onhover ?
                    <div onMouseOver={hoveron} onMouseLeave={hoveroff}>
                        <Cartproduct />
                    </div> : ""
                }
                {/* {hoverdiv?<Cartproduct/>:""} */}
            </div>
        </div>
    )
}

export default Cartheader