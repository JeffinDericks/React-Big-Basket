import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, update1 } from "./slice";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdOutlineSaveAlt } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import "./mystyle.scss"
import Aos from "aos";
import "aos/dist/aos.css"


const Teaproduct = () => {
    const [selectradio, setSelectradio] = useState("")
    const [filter, setFilter] = useState(false)
    // const [adding,setAdding] = useState(false)

    // const handleradio = (e) => {
    //     const selectedid = e.target.id

    //     setSelectradio(selectedid)
    // }
    const [tea, setTea] = useState([])

    const select = useSelector((a) => {
        return a.key.keyjson.list
    })
    console.log(select);

    const five = () => {
        const fivestar = tea.filter((a) => {
            return a.rating == 5
        })
        console.log(fivestar);
        setTea(fivestar)
    }
    const four = () => {
        const fivestar = tea.filter((a) => {
            return a.rating == 4
        })
        console.log(fivestar);
        setTea(fivestar)
    }
    const three = () => {
        const fivestar = tea.filter((a) => {
            return a.rating == 3
        })
        console.log(fivestar);
        setTea(fivestar)
    }
    const two = () => {
        const fivestar = tea.filter((a) => {
            return a.rating == 2
        })
        console.log(fivestar);
        setTea(fivestar)
    }
    const one = () => {
        const fivestar = tea.filter((a) => {
            return a.rating == 1
        })
        console.log(fivestar);
        setTea(fivestar)
    }

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

        const updatetea = tea.map((event) => {
            return event.id == a.id ? { ...event, boolean: true } : event
        })
        setTea(updatetea)

    }

    useEffect(() => {
        Aos.init()

        const tealist = select.filter((a) => {
            return a.product == "fruit"
        })
        setTea(tealist)

    }, [])

    const hidefilter = (e) => {
        e.preventDefault()
        setFilter(false)
    }

    const showfilter = (e) => {
        e.preventDefault()
        setFilter(true)
    }

    const navi = useNavigate();
    const click = (a) => {
        navi(`/productdetails/?id=${a.id}`)
    }

    return (
        <div className="total" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1500">


            <div className="container cards">
                <div className="row">
                    <div className="col-sm-12 filter">
                        {filter ? <button onClick={hidefilter}><FaRegEyeSlash /> Hide Filter</button> : <button onClick={showfilter}><FaRegEye /> Show filter</button>}
                    </div>
                    {/* <div> */}

                    {
                        filter ?

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="rating-section">
                                    <p className="p-tag">Refined by</p>
                                    <div className="product-rating">
                                        <p>Product Rating</p>
                                        <p><FaAngleUp /></p>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" onClick={five} id="radiofive" disabled={selectradio === "radiofive"} />
                                        <p><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" onClick={four} id="radiofour" disabled={selectradio === "radiofour"} />
                                        <p><FaStar /> <FaStar /> <FaStar /> <FaStar /> <CiStar /></p>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" onClick={three} />
                                        <p><FaStar /> <FaStar /> <FaStar /> <CiStar /> <CiStar /></p>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" onClick={two} />
                                        <p><FaStar /> <FaStar /> <CiStar /> <CiStar /> <CiStar /></p>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" onClick={one} />
                                        <p><FaStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar /></p>
                                    </div>

                                    <div className="product-rating">
                                        <p>Brands</p>
                                        <p><FaAngleUp /></p>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" />
                                        <p>Emperia</p>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" />
                                        <p>Red Label</p>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" />
                                        <p>Taj Mahal</p>
                                    </div>
                                    {/* <div className="radio">
                                <input type="radio" />
                                <p>3 Roses</p>
                            </div>
                            <div className="radio">
                                <input type="radio" />
                                <p>Lipton Green Tea</p>
                            </div> */}
                                </div>
                            </div>
                            : ""}
                    {tea.map((a) => {
                        return (

                            <div className=" col-lg-3 col-md-6 col-sm-12">
                                <div className="mapped">
                                    <img src={a.img} onClick={() => click(a)} />
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
                                        {/* {adding? */}
                                        {/* <button className="add" onClick={()=>handleadd(a)}>added</button>: */}
                                        {a.boolean ?
                                            <button className="add" onClick={() => handleadd(a)}>Added</button> :
                                            <button className="add" onClick={() => handleadd(a)}>Add</button>
                                        }
                                        {/* } */}

                                    </div>
                                </div>
                            </div>
                        )
                    })}



                    {/* </div> */}

                </div>


            </div>

        </div>
    )
}

export default Teaproduct