import React from 'react'

const TodoItem = (props) => {
  const activityArr = props.activityArr
  const setActivityArr= props.setActivityArr

  function handleDelete(deletedid)
  {
    let temparr = activityArr.filter(function(item){
      if(item.id === deletedid)
        
      {
          return false
      }else{
        return true
      }
    })
    setActivityArr(temparr)
  }
  return (
    <div className='flex justify-between'>
        <p>{props.index+1}.{props.activity}</p>
        <button className='text-red-500' onClick={()=> handleDelete(props.id)}>Delete</button>
    </div>
  )
}

export default TodoItem