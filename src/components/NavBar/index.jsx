import React from "react";
import LogoBSNavBar from "../../assets/logo_bs_navbar.png";
import {FiSearch} from "react-icons/fi";
import {CgProfile} from "react-icons/cg";
import {AiOutlineStar} from "react-icons/ai";
import {BsCart3} from "react-icons/bs";
import "./style.css";

const NavBar = () => {
    

    return (
        <div className="flex flex-row bg-black1 font-barlow h-[72px] items-center justify-center">
            <picture>
                <img src={LogoBSNavBar} alt="Logo BlackSkull"/>
            </picture>
            <nav className="font-bold text-[14px] text-gray1 mx-5">
                <ul className="flex gap-7 justify-center">
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-[3px] h-[72px] mt-3 transition-all">CATEGORIAS</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-[3px] h-[72px] mt-3 transition-all">VESTUÁRIO</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-[3px] h-[72px] mt-3 transition-all">OBJETIVOS</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-[3px] h-[72px] mt-3 transition-all">PROMOÇÕES</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-[3px] h-[72px] mt-3 transition-all">ATLETAS</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-[3px] h-[72px] mt-3 transition-all">ASSINATURA</li>
                </ul>
            </nav>
            <div className="flex items-center mr-4">
                <input 
                    type="text"
                    placeholder="Buscar"
                    className="h-10 w-[216px] font-medium text-xs text-gray1 bg-dark1 border border-solid border-dark3 rounded"
                    
                />
                <span className="absolute z-10 ml-[190px] text-gray1 text-xl focus:text-dark1">
                    <FiSearch />
                </span>

            </div>
            <div className="flex gap-3 text-2xl">
                <span className="text-gray1 cursor-pointer">
                    <CgProfile />
                </span>
                <span className="text-gray1 cursor-pointer ">
                    <AiOutlineStar />
                </span>
                <span className="text-gray1 cursor-pointer">
                    <BsCart3 />
                </span>
            </div>
        </div>
    )
}

export default NavBar;