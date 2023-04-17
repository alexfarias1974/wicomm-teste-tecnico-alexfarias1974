import { BsFacebook, BsInstagram, BsYoutube, BsTwitter, BsTiktok } from "react-icons/bs";
import FinalSectionLogo from "../../assets/final_section_logo.png"
const FinalSection = () => {
    return (
        <div className="h-[500px] bg-black1 mt-16 flex justify-between">
            <div className="pl-8">
                <img src={FinalSectionLogo} alt="" className="mb-10"/>
                <span className="font-barlow font-normal text-sm text-white">Nos siga:</span>
                <div className="flex gap-[20px] mt-3">
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
            <div className="flex flex-col">
                <h4 className="font-barlow font-bold text-base text-white uppercase">Blackskull USA</h4>
                <span className="font-barlow font-normal text-sm text-gray1">Sobre Nós</span>
                <span className="font-barlow font-normal text-sm text-gray1">Black Skull é confiável?</span>
                <span className="font-barlow font-normal text-sm text-gray1">Atletas Black Skull</span>
                <span className="font-barlow font-normal text-sm text-gray1">Nosso Blog</span>
                <span className="font-barlow font-normal text-sm text-gray1">Seja um Revendedor</span>
                <span className="font-barlow font-normal text-sm text-gray1">Entre em Contato</span>
            </div>
            <div className="flex flex-col">
                <h4 className="font-barlow font-bold text-base text-white uppercase">Institucional</h4>
                <span className="font-barlow font-normal text-sm text-gray1">Trocas e devoluções</span>
                <span className="font-barlow font-normal text-sm text-gray1">Política de Entregas</span>
                <span className="font-barlow font-normal text-sm text-gray1">Política de Privacidade</span>
                <span className="font-barlow font-normal text-sm text-gray1">Política de Cancelamentos</span>
            </div>
            <div className="flex flex-col border-r-[2px] border-r-solid border-r-dark3">
                <h4 className="font-barlow font-bold text-base text-white uppercase">Afiliados</h4>
                <span className="font-barlow font-normal text-sm text-gray1">Programa de Afiliados</span>
                <span className="font-barlow font-normal text-sm text-gray1">Desconto para Militares</span>
                <span className="font-barlow font-normal text-sm text-gray1">Benefícios para
Profissionais da Saúde</span>
                <span className="font-barlow font-normal text-sm text-gray1">Benefícios para
Profs. de Educação Física</span>
                <span className="font-barlow font-normal text-sm text-gray1">Assinaturas</span>
            </div>
            <div className="w-[353px] flex flex-col items-center border-l-[2px] border-l-solid border-l-dark3">
                <div className="flex flex-col items-center text-center">
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
            </div>
        </div>
    )
}

export default FinalSection;