import React from "react";
import Cartheader from "./cartheader";
import Cartmiddle from "./cartmiddle";
import Footer from "./footer";
import Cartproduct from "./cartproduct";

const Cartpage=()=>{
    return(
        <div>
            <Cartheader />
            <Cartmiddle />
            <Footer />
        </div>
    )
}

export default  Cartpage