import React from 'react'
import Head from 'next/head'
import Footer from './footer'
import Header from './header'

const Layout = ({children, title='', description=''}) => {
  return (
    <>
        <Head>
            {/* 2- Por parametro traemos el title de cada pag. */}
            <title>GuitarLA - {title}</title>
            <meta name='description' content={description}/>
        </Head>
        
        <Header/>


        {/* 1-Toma como parametro children, y va a renderizar todo lo que le pasemos */}
        {children}


        <Footer/>

    </>
  )
}

export default Layout
