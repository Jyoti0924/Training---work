import React from 'react'
import {useParams} from 'react-router-dom'
const Contact = () => {
  
  const {post_id} =useParams();
  const arr = [
    {
      Name: "Jyoti",
      id: 20
    },
    {
      Name: "Mayank",
      id: 21
    },
    {
      Name: "Manu",
      id: 22
    },
    {
      Name: "Jott",
      id: 23
    }
  ]
  const handleClick = (item)=>{
    
    {console.log(item)}

  }
  return (
    <>
    {arr.map((arr, index) => {
      return (
        <>
        <ul>
        <li className='params' onClick={() => handleClick(arr.id)}>
        {arr.Name}
        </li>
        </ul>
        </>
        )
      }
      )}
      </>
  )
}

export default Contact
