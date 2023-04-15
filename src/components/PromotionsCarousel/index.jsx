import { newProducts } from "../../db/database";
import NewProductCard from "../NewProductCard";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";

const PromotionsCarousel = () => {
    let box3 = document.querySelector('.product-contain');

    const butpressprev = () => {
        let width = box3.clientWidth;
        box3.scrollLeft = box3.scrollLeft - width;
    }

    const butpressnext = () => {
        let width = box3.clientWidth;
        box3.scrollLeft = box3.scrollLeft + width;
    }

    return (
        <>
            <div className="flex justify-center font-roboto_condensed font-bold italic text-[32px] text-dark1 mt-16">
                    <h1>PROMOÇÕES</h1>
            </div>
            <div className="product-carousel relative overflow-hidden py-2 px-[70px] ">

                <span className="pre-btn bg-gray2 rounded-sm w-[30px] h-[30px] absolute flex justify-center items-center mt-[130px] left-[65px] hover:bg-orange2" onClick={butpressprev}>
                    <HiArrowLeft/>
                </span>

                <span className="next-btn bg-gray2 rounded-sm w-[30px] h-[30px] absolute flex justify-center items-center mt-[130px] right-[70px] hover:bg-orange2" onClick={butpressnext}>
                    <HiArrowRight/>
                </span>

                <div className="product-contain py-0 px-[10px] flex overflow-x-hidden overflow-y-hidden scroll-smooth border-2 gap-6 border-gray1">
                    {newProducts.map((product) => (
                        <NewProductCard 
                            key={product.id}
                            newImg={product.newImg}
                            newName={product.newName}
                            description={product.description}
                            price={product.price}
                            paymentConditions={product.paymentConditions}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default PromotionsCarousel;