import React from 'react'
import Contact from '../components/Contact'

const ContactPage = () => {
  return <Contact/>
}


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

export default ContactPage