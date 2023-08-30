import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import PaperIcon from '../assets/images/icon-paper.svg'
import ScissorsIcon from '../assets/images/icon-scissors.svg'
import RockIcon from '../assets/images/icon-rock.svg'
import BgTriangle from '../assets/images/bg-triangle.svg'

const StepOne = () => {
    const { getUserChoice, resetAll } = useContext(AppContext)
    useEffect(() => {
        resetAll()
    }, [])
    // console.log(BgTriangle)

    // const [element , setElement] = useState('')

    // const handleClick = (event) => {
    //     setElement(event.target.outerHTML)
    //     console.log(event)
    // }
    
    // useEffect(() => {
    //     console.log(element)
    // }, [element])

    return (
        <div className="absolute justify-self-center self-center -mt-20 md:mt-0">
            <div className={`bg-no-repeat relative w-[20rem] h-[17.5rem] scale-75 md:scale-100`} style={{backgroundImage: `url(${BgTriangle})`}}>
                <div onClick={getUserChoice} id="paper" className="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-paperA absolute -top-20 -left-20 cursor-pointer">
                    <img id="paper" src={PaperIcon} alt="" />
                </div>
                <div onClick={getUserChoice} id="scissors" className="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA absolute -top-20 -right-20 cursor-pointer">
                    <img id="scissors" src={ScissorsIcon} alt="" />
                </div>
                <div onClick={getUserChoice} id="rock" className="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-rockA absolute -bottom-20 left-20 cursor-pointer">
                    <img id="rock" src={RockIcon} alt="" />
                </div>
            </div>
        </div>
    );
}

export default StepOne