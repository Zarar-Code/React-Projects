import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    const {id} = useParams()
  return (
    <>
    <h1 className='text-center bg-gray-700 text-2xl font-bold text-white p-4'>User_Id: {id} </h1>

    </>
  )
}

export default Users