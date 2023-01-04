import React, { useEffect, useState } from 'react'

const Home = ({data}:any) => {
  return (
    <>
   <br/>
    {data?.slice(0,20)?.map((item:any)=>{
        return <> <div style={{border : "1px solid black"}}>
        <b>{item.id}</b>
        <div>{item.title}</div>
        <img src={item.url} width="250" height="80"/>
        
        </div> <br /> </>
    })}
    </>
  )
}

export default Home