import React from "react";
import { classProduct } from "../../db/database";

const ClassCard = ({name, img}) => {
    return (
        <div className="flex flex-col items-center mt-14">

        <div className="flex justify-center items-center rounded-full bg-background w-[178px] h-[178px] cursor-pointer hover:bg-orange1 hover:border-8 hover:border-solid hover:border-orange2 hover:duration-500">
            <picture >
                <img
                    src={img}
                    alt="Imagem do Produto"
                    className="w-[108px] hover:w-[150px]"
                />
            </picture>
        </div >
            <span className="font-barlow font-bold text-xs mt-3 cursor-pointer">{name}</span>
        </div>
    )
}

export default ClassCard;