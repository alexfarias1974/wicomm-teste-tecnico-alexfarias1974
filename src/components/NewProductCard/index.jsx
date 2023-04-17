import React from "react";


const NewProductCard = ({newImg, newName, description, price, paymentConditions}) => {
    return (
        <>        
                <div className="w-[277px] h-[341px] border-2 border-background rounded">
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
        </>
    )
}

export default NewProductCard;
