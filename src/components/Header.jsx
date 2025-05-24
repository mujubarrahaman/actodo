import React from 'react'

const Header = (props) => {
  return (
    <div >
        <h1 className='text-3xl font-medium'>Hello {props.name} !</h1>
        <p>I help you manage your activities :)</p>
    </div>
  )
}

export default Header