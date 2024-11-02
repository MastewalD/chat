import React, { useState } from 'react'
import * as yup from "yup"
function Signup() {
  const [formValue,setFormValue] = useState({
    username:"",
    password:"",
    confirmPassword:"",
  })
  const [errors,setErrors]= useState({})
  const validationSchema = yup.object().shape({
    username: yup.string()
        .required("username must be filled")
        .min(3,"username length must be greater than 3"),
    password: yup.string()
        .required("password must be filled"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password")],"password must match")
        .required("confirmPassword must be filled") 
    
  })
  function handleChange(e){
    const {name,value} = e.target 
    setFormValue({...formValue,[name]:value})
    
  }
  async function handleSubmit(e){
    e.preventDefault()
    try {
      await validationSchema.validate(formValue,{abortEarly:false})
      setErrors({})
      console.log(formValue)
      
    } catch (error) {
      const validationError={}
      error.inner.forEach(err=>{
        validationError[err.path]=err.message
      })
      setErrors(validationError)
      
      
    }
   

  }
  return (
    <div style={{height:`calc(100vh - 6rem)`}} className='bg-green flex items-center justify-center'>
     <form onSubmit={handleSubmit} className=''>
      <div>
        <label htmlFor="username">username</label>
        <input type="text" id='username' name='username' onChange={handleChange} value={formValue.username} />
        {errors.username && <div><p className='text-red-500'>{errors.username}</p></div>}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id='password' name='password' onChange={handleChange} value={formValue.password} />
        {errors.password && <div><p className='text-red-500'>{errors.password}</p></div>}
      </div>
      <div>
        <label htmlFor="confirmPassword">confirmPassword</label>
        <input type="password" id='confirmPassword' name='confirmPassword' onChange={handleChange} value={formValue.confirmPassword} />
        {errors.confirmPassword && <div><p className='text-red-500'>{errors.confirmPassword}</p></div>}
      </div>

      <button type='submit'>submit</button>
     
     </form>
    </div>
  )
}

export default Signup
