import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const Element = ({element, className, id}) => {
    return (<div dangerouslySetInnerHTML={{__html: element}} className={className} id={id} />)
}

const StepTwo = () => {
    const {setComponent, userElement, computerElement, userChoice, computerChoice, generateComputerChoice} = useContext(AppContext)

    // useEffect(() => {
    //     console.log(userElement)
    //     console.log(userChoice)
    //     console.log(computerElement)
    //     console.log(computerChoice)
    // }, [userElement, computerElement, userChoice, computerChoice])

    setTimeout(() => {
        generateComputerChoice()
        setTimeout(() => {
            setComponent('StepThree')
        }, 1000);
    }, 2500);

    return (
        <div className="absolute justify-self-center self-center grid grid-flow-col gap-40 -mt-20 scale-[.65] md:scale-100">
            <div className="grid justify-items-center items-center">
                <p className="mb-20 hidden md:block text-center tracking-widest text-3xl">You Picked</p>
                {/* <div :innerHTML="rawHTML" class="transition-transform"></div> */}
                {/* <Element element={userElement} className="" /> */}
                <Element element={userElement} id={userChoice} className={`bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] ${userChoice === 'rock' ? 'border-gradients-rockA' : userChoice === 'paper' ? 'border-gradients-paperA' : 'border-gradients-scissorsA'} scale-150 transition-transform`} />
                <p className="mt-20 block md:hidden text-center tracking-widest text-2xl">You Picked</p>
            </div>
            <div className="grid justify-items-center items-center">
                <p className="mb-20 hidden md:block text-center tracking-widest text-3xl">The House Picked</p>
                {!computerElement ? <div className="w-40 h-40 bg-gradients-backgroundB opacity-30 rounded-full scale-150 animate-ping"></div> : <Element element={computerElement} id={computerChoice} className={`bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] ${computerChoice === 'rock' ? 'border-gradients-rockA' : computerChoice === 'paper' ? 'border-gradients-paperA' : 'border-gradients-scissorsA'} scale-150 transition-shadow`} />}
                {/* <div v-else :innerHTML="computerElement" class="transition-shadow"></div> */}
                <p className="mt-20 block md:hidden text-center tracking-widest text-2xl">The House Picked</p>
            </div>
        </div>
    );
}

export default StepTwo