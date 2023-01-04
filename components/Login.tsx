import axios from 'axios'
import { useRouter } from 'next/router'

import React, { useRef } from 'react'

const Login = () => {

 const router = useRouter()

  const inputRef1  = useRef<any>(null)
  const inputRef2 = useRef<any>(null)

  const handleSubmit = async (e:any)=>{
   e.preventDefault()
    let userName = inputRef1.current.value
    let password = inputRef2.current.value
    
     axios.post('api/login',{userName,password}).then((res:any)=>{
      console.log(res)
      router.push('/home')
     }).catch((e)=>{
     console.log(e)
     }
     )
  }

  return (
    <form onSubmit={handleSubmit}>
       Username : <input ref={inputRef1} /> <br />
       Password : <input ref={inputRef2}/> <br />
       <input type="submit"/>
    </form>
  )
}

export default Login