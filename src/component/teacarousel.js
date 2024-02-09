import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { AiOutlineHome } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css"


const Teacarousel=()=>{

  useEffect(()=>{
    Aos.init()
  },[])

    const select = useSelector((a)=>{
        return a.key.keyjson.teacarousel
    })
    const settings = {
        // dots: true,
        // autoplay:true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
        dots: true,
                    autoplay: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    responsive: [
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true,
                          dots: true
                        }
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          initialSlide: 2
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      }
                    ]
      };
    return(
      <div className="overall-cards" data-aos="flip-left"
      data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
          <div className="container card-section">
                <div className="row">
                    <div className="col-sm-12 basket">
                        <p><AiOutlineHome /> Home/Beverages/<span>Tea</span></p>
                    </div>
                    {/* <div className="col-lg-4 view-all">
                        <p>View all</p>
                        <div className="arrow-buttons">
                            <button><FaAngleLeft /></button>
                            <button><FaAngleRight /></button>
                        </div>
                    </div> */}
                </div>
            </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="carousel">
                        <Slider {...settings}>

                                {
                                select.map((a)=>{
                                    return <img src={a.img1} className="carousel-img" />
                                })
                            }

                        </Slider>

                    </div>
               </div>
            </div>
        </div>
      </div>
    )
}

export default Teacarousel