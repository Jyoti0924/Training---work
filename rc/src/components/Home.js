import React from 'react'
import { useState } from 'react'
import { useNavigate ,useLocation } from 'react-router-dom';
const Home = () => {
  const [state, setState]=useState({
    firstname:"",
    lastname:"",
    email:""
  });
  const [show ,setShow]=useState(false)
  const handleChange = (event)=>{
    
      const {name,value} = event.target;
      setState((prevProps)=>({
        
      ...prevProps,  //...spread operator 
        [name]:value
}));
  };
  const handleSubmit = (event) => {
    setShow(true)
    event.preventDefault();
    console.log(state);
  };
  console.log(show)
  return (
    <>
    <div className='form'>
    <div > 
     <form onSubmit={handleSubmit}>
     <label className='fname' >Enter Name</label>
     <input className='ip' type='text' name="firstname" value={state.firstname} onChange={handleChange} autoComplete='off' placeholder='Enter first name'/>
  
     <label className='fname' >Enter Last Name</label>
     <input className='ip' type='text' name="lastname" value={state.lastname}  onChange={handleChange} autoComplete='off' placeholder='Enter last name'/>
     <label className='fname' >Enter Gmail </label>
     <input className='ip' type='email' name="email" value={state.email} onChange={handleChange} autoComplete='off' placeholder='Enter your gmail'/>

    <div>
     <button  type='submit'className='bname' >submit</button>
     </div>
     </form>
    {show?<h3>{state.firstname},{state.lastname},{state.email}</h3>:''}
     
     </div>
     </div>
     
     </>
  );
};

export default Home

