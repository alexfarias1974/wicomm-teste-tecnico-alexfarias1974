import { BsBoxArrowUpRight } from "react-icons/bs";
import "../../index.css";
import Blog1 from "../../assets/blog_img1.png"

const BlogCard = () => {
    return (
        <div className="img-container flex flex-col w-[376px] h-[380px] border-2 border-solid border-dark3 bg-dark1">
            <div className="max-h-[200px] border-[0.01px] border-solid">
                <img src={Blog1} alt="Exercice Image" className="max-h-[195px]"/>
            </div>
            <h4 className="font-barlow font-normal text-sm text-gray2 mt-[14px] ml-4">
                02.01.23
            </h4>
            <h2 className="font-barlow font-bold text-lg text-white mt-1 ml-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <button type="button" className="absolute h-10 w-[138px] bg-orange1 hover:bg-orange2 rounded font-barlow font-bold text-sm text-black1 mt-[315px] ml-4">
                LER MAIS
            </button>
            <div className="moveArrow absolute mt-[325px] ml-[115px]">
                <div className="text-orange1 text-xl absolute ">
                    <BsBoxArrowUpRight/>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;