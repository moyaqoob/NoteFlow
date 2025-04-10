import React from 'react'
import Page from '@/components/sections/Page'
import Header from '@/components/sections/Header'
import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'


const page = () => {
  return (
   <div>
    <Page>
      <Header>
        <Navigation/>
        <Hero/>
      </Header>
      </Page>
   </div>
  )
}

export default page