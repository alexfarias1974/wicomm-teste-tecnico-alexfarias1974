import React from "react";
import BlogCard from "../BlogCard";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";
import "../../index.css";



const BlogCardCarousel = () => {
    
    return (
        <div className="blog-bg flex flex-col mt-[150px]">
                
            <div className="flex justify-between px-[85px] mt-7">
                <h1 className="font-roboto_condensed font-bold italic text-[32px] text-white">CONFIRA O <span className="text-orange1">NOSSO BLOG</span> </h1>
                <button type="button" className="h-10 w-[138px] bg-orange1 hover:bg-orange2 rounded font-barlow font-bold text-sm text-black1">
                    LER TODOS
                </button>
            </div>

            <div className="product-carousel flex overflow-hidden py-2 px-[70px]">

                <span className="z-10 pre-btn bg-gray2 rounded-sm w-[30px] h-[30px] absolute flex justify-center items-center mt-[130px] left-[65px] text-xl hover:bg-orange2"><HiArrowLeft/></span>

                <span className="z-10 next-btn bg-gray2 rounded-sm w-[30px] h-[30px] absolute flex justify-center items-center mt-[130px] right-[70px] text-xl hover:bg-orange2 " ><HiArrowRight/></span>

                <div className="flex justify-center mx-auto gap-4">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </div>
    )
}

export default BlogCardCarousel;