import { classProduct } from "../../db/database";
import ClassCard from "../ClassCard";
import BtnPrev from "../../assets/left_arrow_carousel.png";
import BtnNext from "../../assets/right_arrow_carousel.png";

const ClassCardCarousel = () => {
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

    return (
        <div className="product-carousel relative overflow-hidden py-2 px-[70px]">
            <button className="pre-btn border-none w-[60px] h-full absolute flex justify-center items-center mt-10px left-[55px]" onClick={btnpressprev}><img src={BtnPrev}/></button>
            <button className="next-btn border-none w-[60px] h-full absolute flex justify-center items-center mt-10px right-[50px]" onClick={btnpressnext}><img src={BtnNext}/></button>
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