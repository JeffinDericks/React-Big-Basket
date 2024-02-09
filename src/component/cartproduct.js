import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./mystyle.scss"
import { IoMdClose } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { FaDropbox } from "react-icons/fa";
import Buynow from "./buynow";
import { update1, updateminus } from "./slice";
import { useNavigate } from "react-router-dom";
// import image from "../images/bbblack.png"

// import Aos from "aos";
// import "aos/dist/aos.css"

const Cartproduct = () => {

    // useEffect(() => {
    //     Aos.init()
    // }, [])

    const [buynow, setBuynow] = useState(false)
    const [addtocart, setAddtocart] = useState([])
    const [empty, setEmpty] = useState("")
    // const [leave,setLeave] = useState(false)
    const select = useSelector((a) => {
        return a.key.keyjson.list
    })

    const selectcount = useSelector((a) => {
        return a.key.keyjson.count
    })
    console.log(selectcount);

    console.log(select);

    const dispatch = useDispatch();

    useEffect(() => {
        const cartitems = select.filter((a) => {
            return a.boolean == true
        })
        setAddtocart(cartitems)
        setEmpty(cartitems)
    }, [])

    const price = addtocart.map((a) => {
        console.log(a.price);
        return a.price
    })

    const sum = price.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)


    const remove = (a) => {
        const change = select.map((e) => {
            return a.id == e.id ? { ...e, boolean: false } : e
        })

        dispatch(update1(change))

        const del = addtocart.filter((j) => {
            return a.id !== j.id
        })
        setAddtocart(del)

        dispatch(updateminus(1))
    }
    const navigate = useNavigate();
    const buy = () => {
        setBuynow(true)

        navigate("/buynow")

    }






    return (
        <div>
            {buynow ?
                "" :
                <div className="container onmouse-hover d-sm-none d-lg-block">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-3"></div>



                        <div className="col-lg-6  hover-box-shadow">

                            {empty == "" ?
                                <div className="empty-basket">
                                    <p>Your basket is empty</p>
                                    <p className="drop"><FaDropbox /></p>
                                </div> :

                                <div>
                                    <div className="scroll-y">
                                        {addtocart.map((a) => {
                                            return (
                                                <div className="hover-start">
                                                    <div className="hover-image col-lg-3">
                                                        <img src={a.img} />
                                                    </div>
                                                    <div className="hover-text col-lg-4">
                                                        <p>Fresho</p>
                                                        <p className="hover-color">{a.name} 1pc</p>
                                                        <p>1 x {a.price}</p>
                                                    </div>
                                                    <div className="hover-buttons col-lg-2">
                                                        <button>-</button>
                                                        <p>1</p>
                                                        <button>+</button>
                                                    </div>
                                                    <div className="hover-price col-lg-2">
                                                        <p className="hover-color">Rs. {a.price}</p>
                                                        <p>Saved Rs.21.50</p>
                                                    </div>
                                                    <div className="hover-close col-lg-1">
                                                        <p onClick={() => remove(a)}><IoMdClose /></p>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>

                                    {selectcount == 0 ?

                                        <div className="empty-basket d-sm-none d-lg-block">
                                            <p>Your basket is empty</p>
                                            <p className="drop"><FaDropbox /></p>
                                        </div>
                                        :
                                        <div className="hover-bottom">
                                            <p>**Actual Delivery Charges computed at checkout!? </p>
                                            <div className="hover-total-flex">
                                                <div className="hover-last1">
                                                    <p>Sub Total :</p>
                                                    <p>GST</p>
                                                    <button onClick={buy}>Buy Now</button>
                                                </div>
                                                <div className="hover-last2">
                                                    <p className="color-green">Rs. {sum}</p>
                                                    <p>**</p>
                                                </div>
                                            </div>
                                        </div>}

                                </div>}
                        </div>
                        <div className="col-lg-1"></div>

                    </div>
                </div>
            }

            {selectcount == 0 ?
                <div className="d-sm-block d-lg-none">
                    <div className="empty-mob">
                        <p>Your basket is empty</p>
                        <p className="drop"><FaDropbox /></p>
                    </div>
                </div>
                :

                <div className="d-lg-none">
                    {addtocart.map((a) => {
                        return (
                            <div className="mob-hover-start separate-div">
                                <div className="col-md-1 d-lg-none d-sm-none d-md-block"></div>
                                <div className="mob-hover-image col-lg-3 col-sm-3 col-md-1">
                                    <img src={a.img} style={{ marginTop: "10px" }} />
                                </div>
                                <div className="mob-hover-text col-lg-4 col-sm-4 col-md-2">
                                    <p>Fresho</p>
                                    <p className="mob-hover-color">{a.name} 1pc</p>
                                    {/* <p>1 x {a.price}</p> */}
                                </div>
                                {/* <div className="mob-hover-buttons col-lg-2 col-sm-2">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div> */}
                                <div className="col-md-2 d-md-block d-lg-none d-sm-none"></div>
                                <div className="col-md-1 d-md-block d-lg-none d-sm-none"></div>
                                <div className="mob-hover-price col-lg-2 col-sm-4 col-md-3">
                                    <p className="mob-hover-color">Rs. {a.price}</p>
                                    <p>Saved Rs.21.50</p>
                                </div>
                                <div className="mob-hover-close col-lg-1 col-sm-1">
                                    <p onClick={() => remove(a)}><IoMdClose /></p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            }
            {selectcount == 0 ?

                // <div className="empty-basket d-lg-none">
                //     <p>Your basket is empty</p>
                //     <p className="drop"><FaDropbox /></p>
                // </div>
                ""
                :
                <div className="hover-bottom d-lg-none">
                    <p className="col-sm-6">**Actual Delivery Charges computed at checkout!? </p>
                    <div className="hover-total-flex col-sm-6">
                        <div className="hover-last1">
                            <p>Sub Total :</p>
                            <p>GST</p>
                            <button onClick={buy}>Buy Now</button>
                        </div>
                        <div className="hover-last2">
                            <p className="color-green">Rs. {sum}</p>
                            <p>**</p>
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default Cartproduct