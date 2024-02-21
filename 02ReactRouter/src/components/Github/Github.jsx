import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData()
  return (
    <>
    <h1 className='text-3xl font-bold bg-orange-500 text-white p-4 text-center'>GitHub Details</h1>
    <div className=' flex flex-col justify-center items-center bg-gray-300 p-5'>
        <h1 className='font-bold text-2xl mb-2 text-1xl'>{data.name}</h1>
        <p>{data.bio}</p>
        <img className='mt-3' src={data.avatar_url} alt="github_pic" width={200} height={200} />
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const res = await fetch('https://api.github.com/users/zarar-code')

    if(!res){
        console.log("Error fetching data")
    }
    return res.json()
}