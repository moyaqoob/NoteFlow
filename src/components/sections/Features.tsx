import Image from 'next/image'
import React from 'react'
import img1 from "@/public/assets/graphics/SmartOrganization.webp"
import img2 from "@/public/assets/graphics/ContextualReminders.webp"
const Features = () => {
  return (
    <section className='bg-primary-1300 -z-1 overflow-hidden bg-[url("../public/assets/Noise.webp")] bg-repeat px-24 pt-32 pb-32'>
        <div className='text-primary-50 relative m-auto max-w-[90rem] px-24 py-32'>

            <div className='bg-primary-1300 absolute w-[65.2rem] h-[65.2rem]  top-[50%] left-[100%] -translate[50%] rounded-full opacity-100 blur-[40rem]'/>

            <h2 className='mb-28 text-center text-6xl/18 font-semibold tracking-tighter'>All the tools you need  to <br/> 
            <span className='text-primary-500'>SuperCharge</span> Your Note taking</h2>    

            <div className='mb-28 grid grid-cols-2 items-center gap-x-16'>
                <figure>
                   <Image src={img1} alt='Smart Organization Iphone Graphic'
                   className='max-h-[45rem]'
                   /> 
                </figure>    
                <div className='z-1 max-w-lg justify-self-end'>
                    <p className='text-2xl font-bold text-primary-50'>Smart Organization </p>
                    <p className='text-primary-100 z-1 text-xl/loose font-light'>Automatically categorize and tag your notes using<br/> AI-driven analysis.
                        NoteFlow intelligently identifies<br/> key topics and organizes your content,\
                        making it <br/> easy to find and retrieve your notes when you need<br/>
                        them most.
                    </p>
                </div>
            </div>  

            <div className='grid grid-cols-2 items-center'>
                <div className='max-w-lg justify-self-start'>
                    <p className='mb-8 text-5xl/16 font-semibold tracking-tighter'>Contextual Reminders</p>
                    <p className='text-primary-100 z-1 text-xl/loose font-light '>Stay on top of important tasks with AI<br/>
                        -powered reminders that adopt to the<br/>
                         context of your notes.Noteflow recognizes<br/> deadlines, follow-ups, and key actions from <br/> your notes and sends timely alerts to<br/> ensure nothing slips through the cracks</p>
                </div>
                <figure>
                    <Image src={img2} alt='Extracting Reminder Image' />
                </figure>
            </div>   

            
 
        </div>
    </section>
  )
}

export default Features