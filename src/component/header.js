import React, { useEffect, useState } from "react";
import { FaCompass } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import "./mystyle.scss"
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingTag } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { update, update1 } from "./slice";
import Aos from "aos";
import "aos/dist/aos.css"

const Header = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    const [open, setOpen] = useState(false)
    const [changebutton, setChangebutton] = useState(true)
    const [input, setInput] = useState("")
    const [header, setHeader] = useState([])
    // const [results, setResults] = useState(false)

    const select = useSelector((a) => {
        return a.key.keyjson.count
    })
    console.log(select);

    const select1 = useSelector((a) => {
        return a.key.keyjson.list
    })

    const handlesearch = (e) => {
        setInput(e.target.value)
    }

    const filterdata = select1.filter((a) => {
        return a.name.toLowerCase().includes(input.toLowerCase())
    })
    // console.log(filterdata);

    const results = filterdata.length > 0
    console.log(filterdata.length > 0);

    const navi = useNavigate()

    const naviagatetohome = () => {
        navi("/")
    }

    const click = (a) => {
        console.log(a.id);

        navi(`/productdetails/?id=${a.id}`)
    }

    const headervisible = () => {
        setOpen(true)
        setChangebutton(false)
    }

    const changedbutton = () => {
        setChangebutton(true)
        setOpen(false)
    }

    const dispatch = useDispatch();

    const handleadd = (a) => {
        dispatch(update(1))
        // setAdding(true)
        console.log(a.id);



        const bool = select1.map((e) => {
            return e.id == a.id ? { ...e, boolean: true } : e
        })
        console.log(bool);
        dispatch(update1(bool))

        const updatehead = header.map((event) => {
            return event.id == a.id ? { ...event, boolean: true } : event
        })
        setHeader(updatehead)
    }




    return (
        <div className="main-header" data-aos="fade-down"
            data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">

            <div className="container d-lg-block d-sm-none">
                <div className="row">
                    <div className="col-lg-1 header-img">
                        <img src="https://gumlet-images.assettype.com/afaqs%2F2021-11%2Fc57035f1-ad95-4b5c-881e-086506b1f6db%2Fbb_TATA_Double_line_logo.jpg?format=webp&w=480&dpr=2.6" onClick={naviagatetohome} />
                    </div>
                    <div className="col-lg-8">
                        <div className="header-input">
                            <input type="search" placeholder="search for products" onChange={handlesearch} />
                            {input ?

                                <div className="search-products">
                                    {/* <div className="container"> */}
                                    {/* <div className="row"> */}
                                    {/* <div className="col-sm-1"></div> */}

                                    {/* <div className="col-sm-8 "> */}
                                    <div className="box-shadow">

                                        <div className="search-left">
                                            <p>Showing results for {input}</p>
                                            {!results ? <p>No results found</p> : ""}
                                        </div>

                                        <div className="lap-y-axis">
                                            {filterdata.map((a) => {
                                                return (
                                                    <div className="search-flex max-height">
                                                        <img src={a.img} className="col-sm-1" onClick={() => click(a)} />
                                                        <p className="col-sm-3">{a.name}<br />Big Basket</p>
                                                        <p className="col-sm-2">Total Pack</p>
                                                        <p className="col-sm-2">Price: ₹{a.price}</p>
                                                        <div className="col-sm-2 border-right">offer sale</div>
                                                        <div className="col-sm-1">
                                                            <button className="gray">1</button>
                                                        </div>
                                                        <div className="col-sm-1">
                                                            {a.boolean ?
                                                                <button className="red" onClick={() => handleadd(a)}>Added</button> :
                                                                <button className="red" onClick={() => handleadd(a)}>Add</button>
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* </div> */}

                                    {/* <div className="col-sm-3"></div> */}
                                    {/* </div> */}
                                    {/* </div> */}
                                </div>
                                : ""}
                        </div>
                    </div>
                    <div className="col-lg-3 header-list">
                        <ul>
                            <li><button><FaCompass /> Select Location</button></li>
                            <li><button className="login">Login/out</button></li>
                            <Link to="/cart">
                                <li><button className="basket">{select > 0 ? select : ""}<RiShoppingBasketFill style={{ fontSize: "20px" }} /></button></li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-lg-12 header2">
                        <nav>
                            <button>Shop by category</button>
                            <a href="#">
                                <Link to="/fruits">
                                    Fruits
                                </Link>
                            </a>
                            <a href="#">
                                <Link to="/tea">
                                    Tea
                                </Link>
                            </a>
                            <a href="#">Ghee</a>
                            <a href="#">Rice</a>
                            <a href="#"><CiShoppingTag style={{ color: "#f76969" }} /> Offers</a>

                        </nav>
                    </div>
                </div>
            </div>

            <div className="container d-sm-block d-md-none d-lg-none mob-header">
                <div className="row">
                    <div className="col-sm-2 header-img">
                        <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1481913057/idpaksg5l65vvdiunlvt.png" onClick={naviagatetohome} />
                    </div>
                    <div className="col-sm-8">
                        <div className="header-input">
                            <input type="search" placeholder="search for products" onChange={handlesearch} />
                            {input ?

                                <div className="search-products">
                                    {/* <div className="container"> */}
                                    {/* <div className="row"> */}
                                    {/* <div className="col-sm-1"></div> */}

                                    {/* <div className="col-sm-8 "> */}
                                    <div className="box-shadow">

                                        <div className="search-left">
                                            <p style={{ fontSize: "12px" }}>Showing results for {input}</p>
                                            {!results ? <p style={{ fontSize: "12px" }}>No results found</p> : ""}
                                        </div>
                                        <div className="y-axis">
                                            {filterdata.map((a) => {
                                                return (
                                                    <div className="search-flex max-height">
                                                        <img src={a.img} className="col-sm-6" onClick={() => click(a)} />
                                                        {/* <p className="col-sm-4">{a.name}</p> */}
                                                        {/* <p className="col-sm-2">Total Pack</p> */}
                                                        {/* <p className="col-sm-2">Price: ₹{a.price}</p> */}
                                                        {/* <div className="col-sm-2 border-right">offer sale</div>
                                                    <div className="col-sm-1">
                                                        <button className="gray">1</button>
                                                    </div> */}
                                                        <div className="col-sm-6">
                                                            {a.boolean ?
                                                                <button className="red" onClick={() => handleadd(a)}>Added</button> :
                                                                <button className="red" onClick={() => handleadd(a)}>Add</button>
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </div>
                                    {/* </div> */}

                                    {/* <div className="col-sm-3"></div> */}
                                    {/* </div> */}
                                    {/* </div> */}
                                </div>
                                : ""}
                        </div>
                    </div>
                    <div className="col-sm-2 header-bar">
                        {changebutton ?
                            <button onClick={headervisible}><FaBarsStaggered /></button>
                            :
                            <button onClick={changedbutton}><IoCloseSharp /></button>}
                    </div>
                </div>
            </div>

            <div className="container d-sm-none d-md-block d-lg-none mob-header">
                <div className="row">
                    <div className="col-md-2 header-img">
                        <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1481913057/idpaksg5l65vvdiunlvt.png" onClick={naviagatetohome} />
                    </div>
                    <div className="col-md-8">
                        <div className="header-input">
                            <input type="search" placeholder="search for products" onChange={handlesearch} />
                            {input ?

                                <div className="search-products">
                                    {/* <div className="container"> */}
                                    {/* <div className="row"> */}
                                    {/* <div className="col-sm-1"></div> */}

                                    {/* <div className="col-sm-8 "> */}
                                    <div className="box-shadow">

                                        <div className="search-left">
                                            <p style={{ fontSize: "15px" }}>Showing results for {input}</p>
                                            {!results ? <p style={{ fontSize: "15px" }}>No results found</p> : ""}
                                        </div>
                                        <div className="tab-y-axis">
                                            {filterdata.map((a) => {
                                                return (
                                                    <div className="search-flex max-height">
                                                        <img src={a.img} className="col-md-3" onClick={() => click(a)} />
                                                        <p className="col-md-4">{a.name}</p>
                                                        {/* <p className="col-md-1">Total Pack</p> */}
                                                        <p className="col-md-4 border-right">Price: ₹{a.price}</p>
                                                        {/* <div className="col-md-2">offer sale</div> */}
                                                        {/* <div className="col-sm-1">
                                                        <button className="gray">1</button>
                                                    </div> */}
                                                        <div className="col-sm-2">
                                                            {a.boolean ?
                                                                <button className="red" onClick={() => handleadd(a)}>Added</button> :
                                                                <button className="red" onClick={() => handleadd(a)}>Add</button>
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })}</div>
                                    </div>
                                    {/* </div> */}

                                    {/* <div className="col-sm-3"></div> */}
                                    {/* </div> */}
                                    {/* </div> */}
                                </div>
                                : ""}
                        </div>
                    </div>
                    <div className="col-sm-2 header-bar">
                        {changebutton ?
                            <button onClick={headervisible}><FaBarsStaggered /></button>
                            :
                            <button onClick={changedbutton}><IoCloseSharp /></button>}
                    </div>
                </div>
            </div>

            {
                open ?
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="mobile-nav">
                                    <nav>
                                        <a href="#">
                                            <Link to="/fruits">
                                                Fruits
                                            </Link>
                                        </a>
                                        <a href="#">
                                            <Link to="/tea">
                                                Tea
                                            </Link>
                                        </a>
                                        <a href="#">Ghee</a>
                                        <a href="#">Rice</a>
                                        <Link to="/cart">
                                            <button className="basket" style={{ marginBottom: "10px" }}>{select > 0 ? select : ""}<RiShoppingBasketFill style={{ fontSize: "20px" }} /></button>
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div> : ""
            }


        </div>
    )
}

export default Header