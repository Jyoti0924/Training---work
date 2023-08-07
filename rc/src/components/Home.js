import React from 'react'
const Home = () => {
  return (
    <div>
     <>
     <div>
     <label className='fname' >Enter Name</label>
     <input type='text' autoComplete='off' placeholder='Enter first name'></input>
     <label className='fname' >Enter Last Name</label>
     <input type='text' autoComplete='off' placeholder='Enter last name'></input>
     <label className='fname' >Enter Gmail </label>
     <input type='text' autoComplete='off' placeholder='Enter your gmail'></input>
     
     </div>
     <button className='bname' type='submit' >submit</button>
     </>
    </div>
  )
}

export default Home

