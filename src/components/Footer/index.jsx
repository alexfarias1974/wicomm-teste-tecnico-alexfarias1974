import WicommLogo from "../../assets/Logo_Wicomm_WhiteBlue 1.png";
import VtexLogo from "../../assets/vtex_white_logo.png";

const Footer = () => {
    return (
        <div className="h-[88px] bg-black1 flex justify-between px-14">
            <div className="flex items-center">
                <p className="font-barlow font-normal text-base text-white">Black Skull 2022. Todos os direitos reservados &#169;.</p>
            </div>
            <div className="flex gap-[40px] items-center">
                <img src={WicommLogo} alt="" className="w-[96px] h-[24px]"/>
                <img src={VtexLogo} alt="" className="w-[66px] h-[24px]"/>
            </div>
        </div>
    )
}

export default Footer;