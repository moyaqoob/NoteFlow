"use client"
import React from 'react'
import { frequentlyAskedQuestions } from '@/utils/content'
import FAQList from "@/components/sections/FAQ/FAQList"


const FAQs = () => {
  const [category, setActiveCategory] = React.useState("General")
  const [activequestion,setActiveQuestion] = React.useState(null)

  const categoryobj = frequentlyAskedQuestions.filter((obj)=>(
    obj.category == category
  )).at(0)

  const questionsArr = categoryobj?.questions

  const handleQuestionClick = (id:any|null):void=>{
      id === activequestion ? setActiveQuestion(null) : setActiveQuestion(id)
  }

  const handleCategory = (category:any)=>{
      setActiveCategory(category)
      setActiveQuestion(null);
  }


  return (
    <section className='bg-gradient-to-bottom justify-items-center -z-1 max-w-screen  border-white pb-10 pt-10'>
      <div className=' max-w-[90rem]'>
          <h1 className='text-primary-50 text-center text-6xl/10 tracking-tight sm:text-5xl '>Frequently Asked Questions</h1>
          <div className='text-primary-50 justify-items-center mt-6 relative gap-3 pb-5'>
              <p>The most commonly asked questions about noteflow</p>
              <p>Have any other question ? {" "} <a href="#" className='underline underline-offset-2'>Chat with our expert team</a> </p>
          </div>
          <ul className=' flex flex-wrap justify-center gap-x-3 gap-y-4'>
            {frequentlyAskedQuestions.map((obj)=>(
              <li key={obj.id} >
                  <button
                      onClick={()=>handleCategory(obj.category)}
                      className={`border-primary-50 text-primary-50 bg-inherit transition-properties cursor-pointer
                      rounded-full border-2 px-8 py-3.5 text-lg/8   ${obj.category === category && "bg-primary-500 border-primary-500 text-primary-1300 primary-glow"}
                      ${obj.category !== category && "hover:bg-primary-50 hover:text-primary-1300"}
                      `}
                  >
                      {obj.category}
                  </button>
              </li>
            ))}
          </ul>
            <div className='-mt-7'>
              <FAQList
                category = {category}
                questions = {questionsArr ?? []}
                activeQuestion = {activequestion}
                handleQuestionClick = {handleQuestionClick}
              />
            </div>
      </div>
    </section>
  )
}

export default FAQs