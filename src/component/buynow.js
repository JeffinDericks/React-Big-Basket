import React, { useEffect, useState } from "react";
import Header from "./header";
import "./mystyle.scss"
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import del from "../images/bb-delivery.jpg";
import { useDispatch, useSelector } from "react-redux";
import { update, update1, updateminus } from "./slice";

import Aos from "aos";
import "aos/dist/aos.css"

const Buynow = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")
    const [delivery, setDelivery] = useState(false)

    const select = useSelector((a) => {
        return a.key.keyjson.count
    })
    console.log(select);

    const selectlist = useSelector((a) => {
        return a.key.keyjson.list
    })

    const dispatch = useDispatch();

    const navi = useNavigate();

    const purchase = (e) => {
        e.preventDefault()
        setAddress("")
        setFirstname("")
        setLastname("")
        setNumber("")
        setPincode("")

        setTimeout(() => {
            const confirm = window.confirm("Thanks for Shopping! Your items will arrive at your doorstep shortly.")

            if (confirm) {
                navi("/")
            }
        }, 2000)

        setDelivery(true)

        dispatch(updateminus(select))

        const changingallthetruetofalse = selectlist.map((a) => {
            return { ...a, boolean: false }
        })
        dispatch(update1(changingallthetruetofalse))
        console.log(changingallthetruetofalse)

    }
    const handle = (a) => {
        if (a.target.name == "firstname") {
            setFirstname(a.target.value)
            console.log(a.target.value);
        }
        if (a.target.name == "lastname") {
            setLastname(a.target.value)
        }
        if (a.target.name == "number") {
            setNumber(a.target.value)
        }
        if (a.target.name == "address") {
            setAddress(a.target.value)
        }
        if (a.target.name == "pincode") {
            setPincode(a.target.value)
        }
    }

    return (
        <div className="last-buy" data-aos="fade-down"
            data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
            <Header />

            {delivery ?
                <div className="container d-sm-none d-md-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <img src={del} className="scooty-delivery" style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
                :
                <div className="container the-end col-md-12 d-sm-none d-md-block">
                    <div className="row">
                        <div className="buynow-img">
                            {/* <div className="col-lg-4"></div> */}
                            <div className="div-center">
                                <div className="purchase-page">
                                    <p className="almost">Almost there!</p>
                                    <p>help us to reach you</p>
                                </div>
                                <form onSubmit={purchase}>
                                    <div className="first-last">
                                        <input type="text" name="firstname" value={firstname} onChange={handle} placeholder="First name" className="first" required />
                                        <input type="text" name="lastname" value={lastname} onChange={handle} placeholder="Last name" className="last" required />
                                    </div>
                                    <div className="phone-number">
                                        <input type="text" name="number" value={number} onChange={handle} placeholder="Phone Number" required /><br />
                                        {/* </div> */}
                                        {/* <div className="address"> */}
                                        <input type="text" name="address" value={address} onChange={handle} placeholder="Address" required /><br />
                                        {/* </div> */}
                                        {/* <div> */}
                                        <input type="number" name="pincode" value={pincode} onChange={handle} placeholder="Pin-code" required /><br />
                                    </div>
                                    <div>
                                        <button type="submit">Purchase</button>
                                    </div>


                                </form>
                            </div>
                        </div>
                        {/* <div className="col-lg-4"></div> */}
                    </div>
                </div>
            }


            {delivery ?
                <div className="container d-sm-block d-md-none">
                    <div className="row">
                        <div className="col-sm-12">
                            <img src={del} className="scooty-delivery" style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
                :
                <div className="container mob-the-end  d-sm-block d-md-none">
                    <div className="row">
                        {/* <div className="mob-buynow-img "> */}
                        {/* <div className="col-lg-4"></div> */}
                        <div className="mob-div-center">
                            <div className="mob-purchase-page">
                                <p className="almost">Almost there!</p>
                                <p>help us to reach you</p>
                            </div>
                            <form onSubmit={purchase}>
                                <div className="mob-first-last">
                                    <input type="text" name="firstname" value={firstname} onChange={handle} placeholder="First name" className="first" required />
                                    <input type="text" name="lastname" value={lastname} onChange={handle} placeholder="Last name" className="last" required />
                                </div>
                                <div className="mob-phone-number">
                                    <input type="text" name="number" value={number} onChange={handle} placeholder="Phone Number" required /><br />
                                    {/* </div> */}
                                    {/* <div className="address"> */}
                                    <input type="text" name="address" value={address} onChange={handle} placeholder="Address" required /><br />
                                    {/* </div> */}
                                    {/* <div> */}
                                    <input type="number" name="pincode" value={pincode} onChange={handle} placeholder="Pin-code" required /><br />
                                </div>
                                <div>
                                    <button type="submit">Purchase</button>
                                </div>


                            </form>
                        </div>
                        {/* </div> */}
                        {/* <div className="col-lg-4"></div> */}
                    </div>
                </div>
            }
            <Footer />
        </div>
    )
}

export default Buynow