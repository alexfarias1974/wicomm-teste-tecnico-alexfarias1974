import BSTeamBg from "../../assets/blackskull_team_bg.png";
import Cedric from "../../assets/cedric.png"
import Model1 from "../../assets/model1.png";
import Model2 from "../../assets/model2.png";
import {BiRightArrowAlt} from "react-icons/bi";
import {HiArrowLeft, HiArrowRight} from "react-icons/hi";

const BlackSkullTeam = () => {
    return (
        <div>
            <div className="flex flex-col h-[470px] mt-12 justify-center items-center">
                <div className="z-10 mt-[-400px]">
                    <h1 className="font-roboto_condensed font-bold italic text-white text-[40px]">CONHEÇA A TROPA <span className="text-orange1">BLACKSKULL</span></h1>
                </div>
                <div className="absolute">
                    <picture className="">
                        <img className="w-screen" src={BSTeamBg} alt="teste" />
                    </picture>
                </div>
                <div className="absolute flex gap-4 text-white">
                    <div className="">
                        <span className="flex justify-center items-center bg-gray2 cursor-pointer rounded-md hover:bg-orange2 text-xl text-dark2 w-[30px] h-[30px] mt-[130px]">
                            <HiArrowLeft />
                        </span>
                    </div>
                    <div>
                        <div className="imagemfundo">
                            <picture>
                                <img src={Cedric} alt="Cedric image" />
                            </picture>
                        </div>
                        <div className=" flex flex-col bg-dark3 -mb-10 bg-opacity-50">
                            <span className="font-roboto_condensed italic text-base font-bold text-orange1 pl-3 mt-2">
                                CEDRIC MCMILLAN
                            </span>
                            <div className="flex pl-3 mt-4">

                                <span className="font-barlow text-xs font-bold mb-2 cursor-pointer">
                                    MAIS INFORMAÇÃO
                                </span>
                                <BiRightArrowAlt/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <img src={Model1} alt="Model 1 image" />
                        </picture>
                        <div className=" flex flex-col bg-dark3 -mb-10 bg-opacity-50">
                            <span className="font-roboto_condensed italic text-base font-bold text-orange1 pl-3 mt-2">MODELO 1</span>
                            <div className="flex pl-3 mt-4">
                                <span className="font-barlow text-xs font-bold mb-2 cursor-pointer">MAIS INFORMAÇÃO</span>
                                <BiRightArrowAlt/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <img src={Model2} alt="Model 2 image" />
                        </picture>
                            <div className=" flex flex-col bg-dark3 -mb-10 bg-opacity-50">
                                <span className="font-roboto_condensed italic text-base font-bold text-orange1 pl-3 mt-2">MODELO 2</span>
                                <div className="flex pl-3 mt-4">

                                <span className="font-barlow text-xs font-bold mb-2 cursor-pointer">MAIS INFORMAÇÃO</span>
                                <BiRightArrowAlt/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="flex justify-center items-center bg-gray2 cursor-pointer rounded-md hover:bg-orange2 text-xl text-dark2 w-[30px] h-[30px] mt-[130px]">
                            <HiArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlackSkullTeam;