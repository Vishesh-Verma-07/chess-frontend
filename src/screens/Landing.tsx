import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = ()=>{

    const navigate = useNavigate();

    return <div className="flex items-center justify-center">
        <div className="pt-16 grid grid-cols-1 gap-4 md:grid-cols-2 max-w-screen-lg ">
            <div className="flex justify-center m-16">
                <img src="./chessBoard.jpg" alt=""  className="max-w-96"/>
            </div>
            <div className="flex justify-center flex-col items-center">
                <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  bg-clip-text">Play chess online</h1>
                <div className="mt-16">
                    <Button text = {"Play Online"} onClick={() => navigate("/game")}></Button>
                </div>
            </div>

        </div>
    </div>
}