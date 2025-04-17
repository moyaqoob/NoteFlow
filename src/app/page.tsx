import React from 'react'
import Page from '@/components/sections/Page'
import Header from '@/components/sections/Header'
import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Reviews from '@/components/sections/Reviews'
import Logo from '@/components/sections/logo'
import { Main } from '@/components/sections/main'
import noise from "../public/assets/Noise.webp"
import Features from '@/components/sections/Features'
import FAQ from '@/components/sections/FAQ/FAQs'
const page = () => {
  return (
   <div>
    <Page>
      <Header>
        <Navigation/>
        <Hero/>
        <Reviews/>
      </Header>
      <Main>
        <Logo/>
        <Features/>
        <FAQ/>
        
      </Main>
      </Page>
   </div>
  )
}

export default page