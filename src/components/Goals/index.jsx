import Goal1 from "../../assets/goal1.png";
import Goal2 from "../../assets/goal2.png";
import Goal3 from "../../assets/goal3.png";
import Goal4 from "../../assets/goal4.png";
import OrangeRectangle from "../../assets/orange_blog_rectangle.png";
import LargeSlash from "../../assets/slash_large.png";


const Goals = () => {
    return (
        <>
            <div className="flex justify-center mt-16">
                <h1 className="font-roboto_condensed font-bold text-[32px] italic text-dark1">OBJETIVOS</h1>
            </div>

            <div className="flex justify-center gap-3 mt-3">

                <div className="img-goal1 w-[277px] h-[340px] flex flex-col-reverse overflow-hidden border-[0.01px] border-solid border-white ">
                    <img
                        src={Goal1}
                        alt="Foto 1"
                        className="grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-500"     
                    />
                    <div className="absolute flex">
                        <img src={OrangeRectangle} alt="" />
                        <div className="large-slash absolute flex">
                            <img src={LargeSlash} alt="" className="large-slash"/>
                        <h4 className="z-10 mt-[12px] ml-[-20px] font-barlow font-bold text-sm italic text-black1 uppercase">Ganho de massa</h4>
                        </div>
                    </div>
                </div>

                <div className="img-goal1 w-[277px] h-[340px] flex flex-col-reverse overflow-hidden border-[0.01px] border-solid border-white ">
                    <img
                        src={Goal2}
                        alt="Foto 1"
                        className="grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-500"     
                    />
                    <div className="absolute flex">
                        <img src={OrangeRectangle} alt="" />
                        <div className="large-slash absolute flex">
                            <img src={LargeSlash} alt="" className="large-slash"/>
                            <h4 className="z-10 mt-[12px] ml-[-20px] font-barlow font-bold text-sm italic text-black1 uppercase">energia</h4>
                        </div>
                    </div>
                </div>

                <div className="img-goal1 w-[277px] h-[340px] flex flex-col-reverse overflow-hidden border-[0.01px] border-solid border-white ">
                    <img
                        src={Goal3}
                        alt="Foto 1"
                        className="grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-500"     
                    />
                    <div className="absolute flex">
                        <img src={OrangeRectangle} alt="" />
                        <div className="large-slash absolute flex">
                            <img src={LargeSlash} alt="" className="large-slash"/>
                            <h4 className="z-10 mt-[12px] ml-[-20px] font-barlow font-bold text-sm italic text-black1 uppercase">recuperação muscular</h4>
                        </div>
                    </div>
                </div>

                <div className="img-goal1 w-[277px] h-[340px] flex flex-col-reverse overflow-hidden border-[0.01px] border-solid border-white ">
                    <img
                        src={Goal4}
                        alt="Foto 1"
                        className="grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-500"     
                    />
                    <div className="absolute flex">
                        <img src={OrangeRectangle} alt="" />
                        <div className="large-slash absolute flex">
                            <img src={LargeSlash} alt="" className="large-slash"/>
                            <h4 className="z-10 mt-[12px] ml-[-20px] font-barlow font-bold text-sm italic text-black1 uppercase">emagrecimento</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Goals;