import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import closeIcon from '../assets/images/icon-close.svg'
import rulesImage from '../assets/images/image-rules.svg'

const MainPage = () => {
    const {components, component, rulesPopUp, showPopUp, closePopUp}  = useContext(AppContext)
    const Component = components[component]

    return (
        <div>
            <div className="grid w-[calc(100vw-4rem)] h-[calc(100vh-14rem)] uppercase">
                <Component />
                <p onClick={showPopUp} className="text-lg md:text-2xl fixed justify-self-end self-end border-2 border-[#FFF] rounded-xl md:rounded-2xl p-7 md:p-10 py-1 md:py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Rules</p>
                {/* <p onClick={goToBonus} className="text-lg md:text-2xl block lg:hidden fixed justify-self-start self-end uppercase border-2 border-[#FFF] rounded-xl md:rounded-2xl p-7 md:p-10 py-1 md:py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Bonus</p> */}
            </div>
            {rulesPopUp && <div className="bg-[#000] absolute w-screen h-screen z-50 top-0 left-0 bg-opacity-50 grid">
                <div className="bg-[#FFF] p-10 md:rounded-xl w-screen h-screen md:w-fit md:h-fit self-center justify-self-center flex flex-col justify-items-center">
                    <div className="grid grid-flow-col items-center justify-center md:justify-between mb-10">
                        <p className="text-4xl text-gradients-backgroundA uppercase font-bold">Rules</p>
                        <img onClick={closePopUp} src={closeIcon} alt="Close Icon" className="cursor-pointer hidden md:block" />
                    </div>
                    <img src={rulesImage} alt="Rules of rock paper scissors game" className="m-0" />
                    <img onClick={closePopUp} src={closeIcon} alt="Close Icon" className="cursor-pointer block md:hidden w-5 self-center mt-60" />
                </div>
            </div>}
        </div>
    );
}

export default MainPage