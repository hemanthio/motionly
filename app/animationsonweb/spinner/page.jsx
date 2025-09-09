"use client"

import  {useState} from "react"
import Spinner from "./Spinner"
import {motion,  AnimatePresence} from "motion/react"
const buttonCopy = {
    idle : "Send me the Link" ,
    loading: <Spinner />,
    success: "Login link sent!",
}

export default function SmoothButton () {
    const [buttonState, setButtonState] = useState("idle")

    return (
        <div className="h-screen flex justify-center items-center">
            <button 
            disabled={buttonState !== "idle"} 
            onClick={()=>{
               

                setButtonState("loading");

                setTimeout(()=>{
                    setButtonState("success");

                },1750) ;

                setTimeout(()=>{
                    setButtonState("idle")
                },3500)


                
                
            }}
                className="w-[148px] rounded-lg relative h-[48px] text-[13px] overflow-hidden font-semibold"
                style={{
                    background: "linear-gradient(180deg, #1994ff 0%, #157cff 100%)",
                    boxShadow: `
                        0px 0px 1px 1px rgba(255, 255, 255, 0.08) inset,
                        0px 1px 1.5px 0px rgba(0, 0, 0, 0.32),
                        0px 0px 0px 0.5px #1a94ff
                    `
                }}
            >
                <AnimatePresence mode="popLayout" initial={false}>
                <motion.span 
                transition={{type: "spring" , duration: 0.3 , bounce: 0}}
                initial={{opacity:0 , y: -25}} 
                animate={{opacity:1 , y:0 }}
                exit={{opacity:0, y: 25}}
                 key={buttonState}
                    className="w-full flex justify-center items-center text-white"
                    style={{ textShadow: "0px 1px 1.5px rgba(0, 0, 0, 0.16)" }}
                >
                    {buttonCopy[buttonState]}
                </motion.span>
                </AnimatePresence>
            </button>
        </div>
    )
}