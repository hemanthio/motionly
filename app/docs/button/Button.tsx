"use client"

import { motion, AnimatePresence } from 'motion/react'
import React ,{useState} from 'react'

interface ButtonProps {
  text? : string ;
  href? : string;
  className?: string;
  variant?: "solid" | "border";
}

const Button = ({
  text='Book discovery call' ,
  href="#",
  className = '',
  variant = 'solid'
}: ButtonProps) => {

  

  const [isHovered, setIsHovered] = useState(false);
  
  const textVariants ={
    initial :{ y:0},
    enter :{y:30, opacity:0},
    animate:{y:0,opacity:1},
    exit:{y:-30, opacity:0}
  }    

  const baseClasses = "px-8 py-3 rounded-full inline-block overflow-hidden"

  const variantClasses = {
    solid:"bg-black font-medium text-white",
    border:"border border-black hover:bg-black font-medium hover:text-white"
  }


  return (
    <a href={href}
     onMouseEnter={()=>setIsHovered(true)}
     onMouseLeave={()=>setIsHovered(false)}
     className={`${baseClasses} ${variantClasses[variant]||""} ${className}`}>

      <AnimatePresence mode='wait'>
      <motion.span 
      key={isHovered ? 'hovered' : 'not-hovered'}
      variants={textVariants}
      initial="enter"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='block'
      >
        {text}
        </motion.span>
        </AnimatePresence>

        </a>
  )
}

export default Button