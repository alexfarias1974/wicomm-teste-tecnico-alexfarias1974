import React, {useState} from "react";
import LogoBSNavBar from "../../assets/logo_bs_navbar.png";
import {FiSearch} from "react-icons/fi";
import {GrFormClose} from "react-icons/gr";
import {CgProfile} from "react-icons/cg";
import {AiOutlineStar} from "react-icons/ai";
import {BsCart3} from "react-icons/bs";
import "./style.css";

const NavBar = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <div className="flex flex-row bg-black1 font-barlow h-[72px] items-center justify-center">
            <picture>
                <img src={LogoBSNavBar} alt="Logo BlackSkull"/>
            </picture>
            <nav className="font-bold text-[14px] text-gray1 mx-5">
                <ul className="inline-flex gap-7">
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-8">CATEGORIAS</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-8">VESTUÁRIO</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-8">OBJETIVOS</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-8">PROMOÇÕES</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-8">ATLETAS</li>
                    <li className="hover:text-white cursor-pointer hover:bg-dark2 hover:border-orange1 hover:border-b-8">ASSINATURA</li>
                </ul>
            </nav>
            <div className={`flex items-center ${isFocused ? 'is-focused' : ''}`}>
                <input 
                    type="text"
                    placeholder="Buscar"
                    className="h-10 w-[216px] font-medium text-xs text-gray1 bg-dark1 border border-solid border-dark3 rounded"
                    onFocus={handleFocus}
                />
                <span className="teste">
                    {/* {isFocused ? <GrFormClose/> : <FiSearch/>} */}
                    {/* <FiSearch /> */}
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