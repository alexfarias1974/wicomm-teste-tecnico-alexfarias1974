import BlogImg1 from "../../assets/blog_img1.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import "../../index.css";

const BlogCard = () => {
    return (
        <div className="img-container flex flex-col w-[376px] h-[380px] border-2 border-solid border-dark3 bg-dark1">
            <img src={BlogImg1} alt="Exercice Image" className="max-h-[200px]"/>
            <h4 className="font-barlow font-normal text-sm text-gray2 mt-[14px]">
                03.06.21
            </h4>
            <h2 className="font-barlow font-bold text-lg text-white mt-3">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
            </h2>
            <button type="button" className="absolute h-10 w-[138px] bg-orange1 hover:bg-orange2 rounded font-barlow font-bold text-sm text-black1 mt-[330px]">
                LER MAIS
            </button>
            <div className="moveArrow absolute mt-[340px] ml-28">
                <div className="text-orange1 text-xl absolute ">
                    <BsBoxArrowUpRight/>
                </div>
            </div>

        </div>
    )
}

export default BlogCard;