import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {

  const users = props.users
  const setUsers= props.setUsers

  const [eusername,setEusername]=useState()
  const [epassword,setEpassword]=useState()
  const navigate = useNavigate()

  function handleUserInput(evt)
  {
    setEusername(evt.target.value)
  }

  function handlePasswordInput(evt)
  {
    setEpassword(evt.target.value)
  }

  function addUser()
  {
    setUsers([...users,{username:eusername,password:epassword}])
    navigate("/")
  }

  return (
    <div className='bg-black p-10'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
            <h1 className='text-3xl font-medium'>Hey Hi</h1>
            <p>Sign up here :)</p>

            <div className='flex flex-col gap-2 my-2'>
                <input onChange={handleUserInput} type="text" className='w-52 border-black p-1  bg-transparent rounded-md border' placeholder='username'/>
                <input onChange={handlePasswordInput} type="text" className='w-52 border-black p-1  bg-transparent rounded-md border' placeholder='password'/>
                <input type="text" className='w-52 border-black p-1  bg-transparent rounded-md border' placeholder='confirm password'/>

                <button onClick={addUser} className='bg-[#FCA201] w-24 p-1 rounded-md'>
                    Sign Up
                </button>

                <p>Already have account? <Link to={"/"} className='underline'>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp