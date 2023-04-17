import AboutBS from "../../assets/about_blackskull.png";

const About = () => {
    return (
        <div className="flex flex-col mt-16 w-[643px] mx-auto text-center items-center">
            <div>
                <img src={AboutBS} alt="" className="mb-[-68px]"/>
            </div>
            <div>
                <h1 className="font-roboto_condensed font-bold italic text-[32xp] text-dark1 uppercase">SOBRE A Black Skull</h1>
            </div>
            <div>
                <h4 className="font-barlow font-normal text-base text-dark3 w-[643px] h-[140px]">A Black Skull USA é uma marca de suplementos alimentares com foco em atletas de alta performance. Nossa sede no Brasil está alocada em Embu das Artes – SP, com mais de 12.000 m² de área construída, com alta capacidade produtiva. Nossos produtos trabalham com as melhores matérias-primas do mercado e tem como principal característica maior concentração de insumos, que proporcionam níveis de pureza mais altos e por consequência otimizam a qualidade de nossos produtos.</h4>
            </div>
        </div>
    )
}

export default About;