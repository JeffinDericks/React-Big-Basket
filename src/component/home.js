import React from "react";
import Header from "./header";
import Footer from "./footer";
import Product from "./product";
import Carousel from "./carousel";
import Staples from "./staples";



const Home=()=>{
    return(
        <div>
            <Header />
            <Carousel/>
            <Product/>
            <Staples />
            <Footer/>
        </div>
    )
}

export default Home