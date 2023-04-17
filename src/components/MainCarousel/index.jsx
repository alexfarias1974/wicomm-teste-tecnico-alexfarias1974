import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import ImgCarousel from "../../assets/main_carousel_img.png"
import Button from "../Button"

const MainCarousel = () => {
    return (
      <>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgCarousel}
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgCarousel}
                alt="Image Two"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgCarousel}
                alt="Image Three"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="absolute -mt-[420px] ml-40">
          <h1 className="font-roboto_condensed italic font-bold text-[56px] text-white">
              AJUDANDO VOCÊ A TER
          </h1>
          <h1 className="font-roboto_condensed italic font-bold text-[56px] text-orange1">
              MAIS PERFORMANCE
          </h1>
          <p className="font-barlow font-normal text-base text-white w-[349px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <Button />
        </div>
      </>
    );
  };

  export default MainCarousel;