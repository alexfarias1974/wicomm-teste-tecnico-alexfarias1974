import React from "react";
import {AiOutlineStar} from "react-icons/ai";
import {BsCart3} from "react-icons/bs";

const NewProductCard = ({newImg, newName, description, price, paymentConditions}) => {
    return (
        <div className="card-product flex flex-col">        
            <div className="bg-white w-[277px] h-[341px] border-2 border-background rounded">
                <div className="absolute flex flex-col ml-[235px] mt-[18px]">
                    <span className="text-2xl text-gray1 cursor-pointer hover:text-orange1 mb-2">
                        <AiOutlineStar />
                    </span>
                    <span className="text-2xl text-gray1 cursor-pointer hover:text-orange1">
                        <BsCart3 />
                    </span>
                </div>
                <div className="flex justify-center mt-8 mb-6">
                    <picture>
                        <img className="w-40" src={newImg} alt={newName} />
                    </picture>
                </div>
                <div className="pl-6 w-[277px] h-12">
                    <div className="w-[182px] h-11">
                    <h3 className="font-barlow font-semibold text-xs text-black1">
                        {description}
                    </h3>
                    </div>
                    <h2 className="font-barlow font-bold text-[22px] text-orange1 mt-[14px]">
                        {price}
                    </h2>
                    <h4 className="font-barlow font-normal text-sm text-dark3 mt-1">
                        {paymentConditions}
                    </h4>
                </div>
            </div>
                <div className="move-button-buy w-[277px] h-[80px]">
                    <button className="w-[273px] h-[60px] font-barlow font-bold text-xl bg-orange1 rounded hover:bg-orange2">
                        COMPRAR
                    </button>
            </div>
        </div>
    )
}

export default NewProductCard;
