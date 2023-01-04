import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

const Layout = (props:any) => {
  const router = useRouter()

  const Logout = ()=>{
    axios.post("api/logout").then((data)=>{
      console.log(data)
      router.push("/")
    })
  }

  return (
    <div>
        <div style={{backgroundColor:"green", height:50,color:"#fff",display:"flex"}}>
          <span>Header</span>
          <button style={{height:20,marginTop:10,marginLeft:600}} onClick={Logout}>Logout</button>
        </div>
        {props.children}
    </div>
  )
}

export default Layout