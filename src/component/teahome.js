import React from "react";
import Header from "./header";
import Teacarousel from "./teacarousel";
import Footer from "./footer";
import Teaproduct from "./teaproducts";


const Teahome=()=>{
    return(
        <div>
            <Header />
            <Teacarousel />
            <Teaproduct />
            <Footer />
        </div>
    )
}

export default Teahome