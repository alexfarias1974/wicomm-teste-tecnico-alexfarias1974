import IconTruck from "../../assets/frete_gratis_header.png"

const Header = () => {
    return (
        <div className="flex bg-dark1 justify-between font-barlow font-bold h-8 items-center text-xs px-14">
            <span className="text-orange1 cursor-pointer">FALE CONOSCO</span>
            <picture>
                <img src={IconTruck} alt="IconTruck + Frete gratis" />
            </picture>
            <span className="text-orange1 cursor-pointer">BLOG.BLACKSKULL</span>
        </div>
    )
}

export default Header;