import axios from "axios";
import React, { useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Home from "../../components/Home";

export const fetchData = async () => {
  let result = await axios.get(process.env.ENDPOINT ??  `/api/fetchData`);
  return result.data;
};



// NOTE :- process.env.ENDPOINT helps us to fetch the data on the server side
// if you are using api folder for fetching data then you need to env variable for server side data fetching 


const HomePage = (props:any) => {
  console.log(props)
    const { isSuccess, data, isLoading, isError } = useQuery(
      ["posts"],fetchData,
     
    );
    

  return <Home data={data} />;
};


export const getServerSideProps = async(context:any)=>{
  //  const result = await fetch('https://jsonplaceholder.typicode.com/photos')
  // .then(response => response.json())
  // .then(json => json )

if(!context.req.cookies.token){
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}
  const queryClient = new QueryClient();

   await queryClient.prefetchQuery(["posts"],fetchData
  );
  
  return {
    props:{dehydratedState: dehydrate(queryClient)}
  }
}

export default HomePage;
