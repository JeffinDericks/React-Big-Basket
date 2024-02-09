import React from "react";
import Header from "./header";
import Fruitproduct from "./fruitproducts.js";
import Footer from "./footer";
import Fruitcarousel from "./fruitcarousel.js";


const Fruithome=()=>{
    return(
        <div>
            <Header/>
            <Fruitcarousel />
            <Fruitproduct />
            <Footer />
        </div>
    )
}

export default Fruithome