import React from 'react'
import { useLocation,useNavigate  } from 'react-router-dom'
const About = () => {
  const Location = useLocation();
  const navigate = useNavigate();
  const handleClick =() =>{
    navigate('/')
  }
  return (
  <>

  <div className='about'>
  <form>
  <div className='about1'>
  
  <p className='p'>Firstname Received : </p>{Location.state ==null?'':<h5 >{Location.state.h.firstname}</h5>}
  </div>
  <div className='about2'>
  <p className='p'>Lastname Received : </p>{Location.state ==null?'':<h5 >{Location.state.h.lastname}</h5>}
  </div>
  <div className='about3'>
  <p className='p'>Email Received : </p>{Location.state ==null?'':<h5>{Location.state.h.email}</h5>}
  </div>
  </form>
  </div>
  <div className='btn'>
  <button onClick={()=>handleClick()}>goBack</button>
  </div>
  </>
  )
}
export default About;





