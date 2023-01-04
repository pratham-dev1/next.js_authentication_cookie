import React from 'react'
import Login from '../components/Login'

const LoginPage = () => {
  return <Login/>
}

export const getServerSideProps = (context:any)=>{
  if(context.req.cookies.token){
    return {
      
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }
  return {
    props : {}
  }
}

export default LoginPage