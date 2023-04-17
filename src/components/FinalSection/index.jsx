import { BsFacebook, BsInstagram, BsYoutube, BsTwitter, BsTiktok } from "react-icons/bs";
import FinalSectionLogo from "../../assets/final_section_logo.png"
import CCLogos from "../../assets/creditcards_logo.png";
import VtexColor from "../../assets/vtex_color_logo.png";
import Ebit from "../../assets/ebit_logo.png";

const FinalSection = () => {
    return (
        <div className="h-[500px] bg-black1 mt-16 flex justify-between">
            <div className="pl-8 text-center mt-16">
                <img src={FinalSectionLogo} alt="" className="mb-7 -mt-5"/>
                <span className="font-barlow font-normal text-sm text-white text-center">Nos siga:</span>
                <div className="flex gap-[20px] mt-3 justify-center">
                    <div className="text-2xl cursor-pointer text-white">
                        <BsFacebook className="hover:text-orange1"/>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center text-black1 cursor-pointer">
                        <BsInstagram className="hover:bg-orange1"/>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center text-black1 cursor-pointer">
                        <BsYoutube className="hover:text-orange1"/>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center text-black1 cursor-pointer">
                        <BsTwitter className="hover:text-orange1"/>
                    </div>
                    <div className="w-6 h-6 rounded-full flex justify-center items-center text-black1 cursor-pointer bg-white">
                        <BsTiktok className="hover:text-orange1"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-16">
                <h4 className="font-barlow font-bold text-base text-white uppercase mb-3 cursor-pointer">Blackskull USA</h4>
                <span className="font-barlow font-normal text-sm text-gray1 cursor-pointer">Sobre Nós</span>
                <span className="font-barlow font-normal text-sm text-gray1 leading-[45px] cursor-pointer">Black Skull é confiável?</span>
                <span className="font-barlow font-normal text-sm text-gray1 cursor-pointer">Atletas Black Skull</span>
                <span className="font-barlow font-normal text-sm text-gray1 leading-[45px] cursor-pointer">Nosso Blog</span>
                <span className="font-barlow font-normal text-sm text-gray1 cursor-pointer">Seja um Revendedor</span>
                <span className="font-barlow font-normal text-sm text-gray1 leading-[45px] cursor-pointer">Entre em Contato</span>
            </div>
            <div className="flex flex-col mt-16">
                <h4 className="font-barlow font-bold text-base text-white uppercase mb-3">Institucional</h4>
                <span className="font-barlow font-normal text-sm text-gray1 cursor-pointer">Trocas e devoluções</span>
                <span className="font-barlow font-normal text-sm text-gray1 leading-[45px] cursor-pointer">Política de Entregas</span>
                <span className="font-barlow font-normal text-sm text-gray1 cursor-pointer">Política de Privacidade</span>
                <span className="font-barlow font-normal text-sm text-gray1 leading-[45px] cursor-pointer">Política de Cancelamentos</span>
            </div>
            <div className="flex flex-col mt-16 w-[160px]">
                <h4 className="font-barlow font-bold text-base text-white uppercase mb-3">Afiliados</h4>
                <span className="font-barlow font-normal text-sm text-gray1 cursor-pointer">Programa de Afiliados</span>
                <span className="font-barlow font-normal text-sm text-gray1 leading-[45px] cursor-pointer">Desconto para Militares</span>
                <span className="font-barlow font-normal text-sm text-gray1 cursor-pointer">Benefícios para Profissionais da Saúde</span>
                <span className="font-barlow font-normal text-sm text-gray1 mt-3 cursor-pointer">Benefícios para Profs. de Educação Física</span>
                <span className="font-barlow font-normal text-sm text-gray1 leading-[45px] cursor-pointer">Assinaturas</span>
            </div>
            <div className="w-[353px] z-10 flex flex-col items-center border-l-[1px] border-l-solid border-l-dark3">
                <div className="flex flex-col items-center text-center mt-16">
                    <h1 className="w-[140px] font-roboto_condensed font-bold italic text-[32px] text-white uppercase">fique por <span className="text-orange1">dentro</span></h1>
                    <p className="font-barlow font-normal text-sm text-gray1 mt-[16px] w-[260px]">Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e muito mais!</p>
                </div>
                <div className="flex flex-col items-center">
                    <form className="mt-[28px]"></form>
                    <input type="text" placeholder="Nome" className="w-[266px] h-[56px] bg-dark1 hover:bg-dark3 rounded border-[1px] border-solid border-dark3 font-barlow font-medium text-xs text-gray1 pl-4 focus:bg-dark3 focus:border-gray1" />
                    <input type="text" placeholder="Endereço de email" className="w-[266px] h-[56px] bg-dark1 hover:bg-dark3 rounded border-[1px] border-solid border-dark3 font-barlow font-medium text-xs text-gray1 pl-4 focus:bg-dark3 focus:border-gray1 mt-[16px]"/>
                    <button
                        type="button"
                        className="h-10 w-[138px] bg-orange1 hover:bg-orange2 rounded font-barlow font-bold text-sm text-black1 mt-[24px]">
                            ENVIAR
                    </button>
                </div>
            <div className="absolute w-[202px] mr-[1460px] mt-[320px]">
                <h4 className="font-barlow font-bold text-base text-white uppercase mb-3">Formas de pagamento</h4>
                <img src={CCLogos} alt="" />
            </div>
            <div className="absolute mr-[1080px] mt-[320px]">
                <h4 className="font-barlow font-bold text-base text-white uppercase mb-3">Segurança</h4>
                <div className="flex gap-1">
                    <img src={VtexColor} alt="" />
                    <img src={Ebit} alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default FinalSection;