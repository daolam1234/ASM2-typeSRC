import React from 'react'
import ClientHeader from './header'
import ClientFooter from './footer'
import ClientBody from './body'
import ClientCategory from './category'
import ClientNewsletter from './newsletter'

const ClientLayout = () => {
  return (
    <main className='bg-[#FFFFFF]'>
        <ClientHeader/>
        <ClientBody/>
        <ClientCategory/>
        <ClientNewsletter/>
        <ClientFooter/>
    </main>
  )
}

export default ClientLayout

