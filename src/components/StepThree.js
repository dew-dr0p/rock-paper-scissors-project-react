import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import './StepThree.css';

const Element = ({element, className, id}) => {
    return (<div dangerouslySetInnerHTML={{__html: element}} className={className} id={id} />)
}

const StepThree = () => {
    const {component, setComponent, userChoice, userElement, computerChoice, computerElement, getResult, updateScore} = useContext(AppContext)

    // const rawHTML = `${userElement.value.outerHTML}`

    const result = getResult(userChoice, computerChoice)

    useEffect(() => {
        document.getElementById(result)?.classList.add('animation')
    }, [])

    const showResult = userChoice === result ? ("You Win") : (computerChoice === result ? "You Lose" : "It's a Tie")

    useEffect(() => {
        showResult === 'You Win' ? updateScore('increase') : (showResult === 'You Lose' ? updateScore('decrease') : console.log("Score doesn't change"))
    }, [])

    // showResult === 'You Win' ? updateScore('increase') : (showResult === 'You Lose' ? updateScore('decrease') : console.log("Score doesn't change"))

    return (
        <div className="absolute justify-self-center self-center items-center justify-items-center grid -mt-20 scale-[.65] md:scale-100">
            <div className="grid grid-flow-col gap-40 md:gap-20">
                <div className="grid justify-items-center items-center">
                    <p className="mb-20 hidden md:block text-center tracking-widest text-3xl">You Picked</p>
                    {/* <div :innerHTML="rawHTML" class="transition-transform"></div> */}
                    <Element element={userElement} id={userChoice} className={`bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] ${userChoice === 'rock' ? 'border-gradients-rockA' : userChoice === 'paper' ? 'border-gradients-paperA' : 'border-gradients-scissorsA'} scale-150 transition-transform`} />
                    <p className="mt-20 block md:hidden text-center tracking-widest text-2xl">You Picked</p>
                </div>
                <div className="mt-20 hidden md:block">
                    <p className="text-center font-bold text-5xl tracking-widest mb-5">{showResult}</p>
                    <p onClick={() => setComponent('StepOne')} className="bg-[#FFF] rounded-xl p-14 py-3 cursor-pointer text-2xl tracking-widest text-text-dark">Play Again</p>
                </div>
                <div className="grid justify-items-center items-center">
                    <p className="mb-20 hidden md:block text-center tracking-widest text-3xl">The House Picked</p>
                    {/* <div :innerHTML="computerElement"></div> */}
                    <Element element={computerElement} id={computerChoice} className={`bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] ${computerChoice === 'rock' ? 'border-gradients-rockA' : computerChoice === 'paper' ? 'border-gradients-paperA' : 'border-gradients-scissorsA'} scale-150 transition-shadow`} />
                    <p className="mt-20 block md:hidden text-center tracking-widest text-2xl">The House Picked</p>
                </div>
            </div>
            <div className="mt-20 block md:hidden w-fit">
                <p className="text-center font-bold text-5xl tracking-widest mb-5">{showResult}</p>
                <p onClick={() => setComponent('StepOne')} className="bg-[#FFF] rounded-xl p-14 py-3 cursor-pointer text-2xl tracking-widest text-text-dark">Play Again</p>
            </div>
        </div>
    );
}

export default StepThree