import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./mystyle.scss"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css"

const Carousel = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  const select = useSelector((a) => {
    return a.key.keyjson.carousel
  })
  console.log(select);
  const settings = {

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="carousel" data-aos="flip-left"
            data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
            <Slider {...settings}>

              {
                select.map((a) => {
                  return <img src={a.img} className="carousel-img" />
                })
              }

            </Slider>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel