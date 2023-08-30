import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import ImageLogo from '../assets/images/logo.svg'

function PageHeader() {
    const { score } = useContext(AppContext)

    return (
        <div>
            {/* <p onClick={() => {}} className="text-2xl hidden lg:block fixed justify-self-end self-start uppercase border-2 border-[#FFF] rounded-2xl p-10 py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Bonus</p> */}
            <div className="p-7 border-2 border-[#FFF] rounded-2xl lg:max-w-[50vw] m-auto border-opacity-50 uppercase">
                <div className="grid grid-cols-2 gap-10 items-center md:gap-40">
                    <img src={ImageLogo} alt="Rock Paper Scissor Logo" />
                    <div className="bg-[#FFF] text-text-dark justify-center items-center flex flex-col rounded-xl">
                        <p className="text-gradients-paperA text-lg md:text-xl">Score</p>
                        <h5 className="text-6xl md:text-7xl font-bold">{ score }</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;