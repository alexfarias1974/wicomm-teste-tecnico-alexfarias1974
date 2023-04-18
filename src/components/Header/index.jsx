import { useRef } from "react";
import IconTruck from "../../assets/frete_gratis_header.png";
import BackTop from "../../assets/back_to_top.png";
import SpeakToUs from "../../assets/speak_to_us.png";
import "../../index.css"

const Header = () => {
    return (
        <header className="flex bg-dark1 justify-between font-barlow font-bold h-8 items-center text-xs px-14">
            <span className="text-orange1 cursor-pointer">FALE CONOSCO</span>
            <picture>
                <img src={IconTruck} alt="IconTruck + Frete gratis" />
            </picture>
            <span className="text-orange1 cursor-pointer mr-[-750px]">BLOG.BLACKSKULL</span>
            <div className="">
                <a href="#" className="btn">
                    <img src={BackTop} alt=""/>
                </a>
            </div>
            <div>
                <img src={SpeakToUs} alt="" className="speak"/>
            </div>
        </header>
    )
}

export default Header;