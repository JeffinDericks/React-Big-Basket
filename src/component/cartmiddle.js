import React, { useEffect } from "react";
import "./mystyle.scss"

import Aos from "aos";
import "aos/dist/aos.css"

const Cartmiddle = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div data-aos="flip-right" data-aos-duration="1000">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/1904223_gourmet-snacks_460_1st.jpg" style={{ width: "100%", marginTop: "20px" }} />
        </div>
    )
}

export default Cartmiddle