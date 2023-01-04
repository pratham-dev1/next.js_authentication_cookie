import React from 'react'
import About from '../components/About'

const AboutPage = () => {
  return <About/>
}

export default AboutPage

export const getServerSideProps = (context:any)=>{
  if(!context.req.cookies.token){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props : {}
  }
}