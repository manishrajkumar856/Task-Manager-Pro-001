import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'

const Protected = () => {
  const {user, loading} = useSelector((state) => state.auth);
  const navigare = useNavigate();

  if(loading){
    <h1>Loading...</h1>
  }

  if(!user){
    return <Navigate to={"/"} />
  }
  
  return <Outlet />
}

export default Protected