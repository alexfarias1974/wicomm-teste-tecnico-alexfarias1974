import React from "react";
import { classProduct } from "../../db/database";
import ClassCard from "../ClassCard";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";


const ClassCardCarousel = () => {
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        // console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width)
    }

    return (
        <div className="product-carousel relative overflow-hidden py-2 px-[70px]">

            <span className="pre-btn bg-gray2 rounded-sm w-[30px] h-[30px] absolute flex justify-center items-center mt-[130px] left-[65px] text-xl hover:bg-orange2" onClick={btnpressprev}><HiArrowLeft/></span>

            <span className="next-btn bg-gray2 rounded-sm w-[30px] h-[30px] absolute flex justify-center items-center mt-[130px] right-[70px] text-xl hover:bg-orange2 " onClick={btnpressnext}><HiArrowRight/></span>

            <div className="product-container py-0 px-[10px] flex overflow-x-hidden scroll-smooth gap-4">
                {classProduct.map((product) => (
                    <ClassCard 
                        key={product.id}
                        img={product.img}
                        name={product.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default ClassCardCarousel;