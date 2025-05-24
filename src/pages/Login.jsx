import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Login = (props) => {

  const [eusername,setEusername]=useState()
  const [epassword,setEpassword]=useState()
  const [ruser,setRuser] = useState(true)
  const navigate = useNavigate()

  const users= props.users






  function handleUserInput(evt)
  {
    setEusername(evt.target.value)
  }

  function handlePasswordInput(evt)
  {
    setEpassword(evt.target.value)
  }

  function checkUSer()
  {
    let userFound = false
      users.forEach(function(item)
    {
      if(item.username===eusername && item.password===epassword)
      {
        console.log("login succes");
        userFound=true
        navigate("/landing", {state:{user:eusername}})
      }
      
    })
    if(userFound===false){
      console.log("Login Failed");
      setRuser(false)
    }
  }


  return (
    <div className='bg-black p-10'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
            <h1 className='text-3xl font-medium'>Hey Hi</h1>
            {ruser? <p>I help you manage  your activity after you login :)</p>: <p className='text-red-500'>Please sign up before you Login</p>}
           

            <div className='flex flex-col gap-2 my-2'>
                <input onChange={handleUserInput} type="text" className='w-52 border-black p-1  bg-transparent rounded-md border' placeholder='username'/>
                <input onChange={handlePasswordInput} type="text" className='w-52 border-black p-1  bg-transparent rounded-md border' placeholder='password'/>
                

                <button onClick={checkUSer} className='bg-[#8272DA] w-24 p-1 rounded-md'>
                    Login
                </button>

                <p>Don't have an account? <Link to={"/SignUp"} className='underline'>Sign up</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login