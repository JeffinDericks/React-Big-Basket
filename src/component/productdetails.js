import React, { useEffect, useState } from "react";
import { FaShopify } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { LuHeartHandshake } from "react-icons/lu";
import { IoMdTimer } from "react-icons/io";
import { RiEBike2Fill } from "react-icons/ri";
import { MdOutlinePolicy } from "react-icons/md";
import "./mystyle.scss"
import { update1, update } from "./slice";
import { MdProductionQuantityLimits } from "react-icons/md";




const Productdetails = () => {

    const [productdetails, setProductdetails] = useState([])

    const searchparams = useSearchParams()[0]
    console.log(searchparams.get("ïd"));

    const selector = useSelector((a) => {
        return a.key.keyjson.list
    })
    console.log(selector);


    useEffect(() => {
        const product = selector.filter((a) => {
            return a.id == parseInt(searchparams.get("id"))
        })
        setProductdetails(product)

    }, [])

    const dispatch = useDispatch();

    const handleadd = (a) => {
        dispatch(update(1))
        // setAdding(true)
        console.log(a.id);

        const bool = selector.map((e) => {
            return e.id == a.id ? { ...e, boolean: true } : e
        })
        console.log(bool);
        dispatch(update1(bool))

        const updatetea=productdetails.map((event)=>{
            return event.id == a.id ? {...event,boolean:true} : event 
        })
        setProductdetails(updatetea)


    }


    return (
        <div className="productdetails-page">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 product-showcase">
                        <p><MdProductionQuantityLimits /> Products</p>
                    </div>
                    {/* </div>
            </div>
            
            <div className="container">
                <div className="row">                     */}
                    {productdetails.map((a) => {
                        return (

                            <div className="product-mapping row">
                                <div className="col-lg-4 col-sm-12 product-image">
                                    {/* <div className="product-image"> */}
                                    <img src={a.img} />
                                    {/* </div> */}
                                </div>

                                <div className="col-lg-8 about-product">
                                    {/* <div>                         */}
                                    <p className="underline">Fresho</p>
                                    <p className="freshoo">{a.name}</p>
                                    <p className="line-through">MRP:₹33</p>
                                    <p className="fresho">Price: ₹{a.price} (₹{a.price} / pc)</p>
                                    <p className="color">You Save:39% OFF</p>
                                    <p className="tax">(inclusive of all taxes)</p>
                                    <div className="shopify col-sm-6 col-lg-4">
                                        <p><FaShopify /></p>
                                        <p>Get it for ₹19!</p>
                                    </div>
                                    <div className="product-buttons col-lg-6">
                                    {a.boolean ?
                                            <button className="button1" onClick={() => handleadd(a)}>Added</button> :
                                            <button className="button1" onClick={() => handleadd(a)}>Add to Basket</button>
                                        }
                                        <button className="button2"><CiSaveDown2 /> Save for later</button>
                                    </div>
                                </div>
                            </div>
                            // </div>
                        )
                    })}



                </div>
            </div>

            <div className="container whyyy">
                <div className="row">
                    <div className="col-sm-12 why-choose">
                        <p>Why choose Bigbasket?</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="column-shadow">
                            <p><LuHeartHandshake /></p>
                            <p>Quality</p>
                            <p>You can trust</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="column-shadow">
                            <p><IoMdTimer /></p>
                            <p>On time</p>
                            <p>Guarantee</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="column-shadow">
                            <p><RiEBike2Fill /></p>
                            <p>Free</p>
                            <p>Delivery</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="column-shadow">
                            <p><MdOutlinePolicy /></p>
                            <p>Return Policy</p>
                            <p>No Question asked</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Productdetails