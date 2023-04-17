import Package from "../../assets/package.png";
import CircleDollar from "../../assets/currency_circle_dollar.png"
import "../../index.css";

const Freight = () => {
    return (
        <div className="flex gap-4 mt-16 justify-center">
            <div className="rotate-package freight-bg flex w-[475px] h-[280px]">
                <div className="w-[267px] flex flex-col mt-10 ml-10">
                    <span className="font-roboto_condensed italic font-bold text-[40px] text-white">
                        GARANTA O
                    </span>
                    <span className="font-roboto_condensed italic font-bold text-[40px] text-orange1">
                        FRETE GRÁTIS
                    </span>
                    <button type="button" className="absolute h-10 w-[138px] bg-orange1 hover:bg-orange2 rounded font-barlow font-bold text-sm text-black1 mt-[130px]">
                        CONSULTE
                    </button>
                </div>
                <div className="w-[208px] mt-20">
                    <img src={Package} alt=""/>
                </div>
            </div>

            <div className="rotate-dollar freight-bg flex w-[475px] h-[280px]">
                <div className="w-[267px] flex flex-col mt-10 ml-10">
                    <span className="font-roboto_condensed italic font-bold text-[40px] text-white">
                        SEU DINHEIRO
                    </span>
                    <span className="font-roboto_condensed italic font-bold text-[40px] text-orange1">
                        DE VOLTA
                    </span>
                    <button type="button" className="absolute h-10 w-[138px] bg-orange1 hover:bg-orange2 rounded font-barlow font-bold text-sm text-black1 mt-[130px]">
                        ENTENDA
                    </button>
                </div>
                <div className="w-[208px] mt-20">
                    <img src={CircleDollar} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Freight;
