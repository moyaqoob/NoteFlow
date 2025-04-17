"use client"
import React from 'react'
import type { FAQProps } from './FAQList'
import Image from 'next/image';
import {motion}  from "motion/react"
import { IoIosArrowUp } from "react-icons/io";


const FAQ = ({question,activeQuestion,handleQuestionClick}:any) => {
    const itemVariants = {
        hidden : {opacity:0,y:20},
        visible:{opacity:1,y:0} 
    }
    
   return (
    <motion.li variants={itemVariants}  className='shrink-0 grow-0 pt-12'>
        <button
            className='flex w-full items-center cursor-pointer'
            onClick={()=>handleQuestionClick(question.id)}
        >
            <div className='border-primary-50 mr-6 rounded-xl border-2 p-3.5'>
                <question.Icon 
                   className="stroke-primary-50"
                    alt={question.alt}
                    width={2}
                />
            </div>

            <p className='text-primary-50 mr-auto pr-4'>{question.question}</p>

            <div className='flex h-12n w-12 shrink-0 items-center justify-center '>
                <IoIosArrowUp className='text-primary-50'/>
            </div>
        </button>

        <motion.p
         className='pl-20 pt-0 pr-14  text-lg/8 font-light text-primary-150'
        initial = {{opacity:0,maxHeight:0,visibility:"hidden"}}
        animate={
            activeQuestion === question.id ? {
                opacity:1,
                maxHeight:"300px",
                visibility:"visible",
                paddingTop:"1rem"
            }:{}
        }
        transition={{duration:0.3, ease:"easeIn"}}
         >{question.answer}
         </motion.p>


    </motion.li>
    
  )
}


export default FAQ