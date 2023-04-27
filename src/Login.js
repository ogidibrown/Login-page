import './Login.css';
import Image from "./female_avatar.svg";
import { useState } from 'react';
import validation from './validation';

const Login = () => {
const [values, setValues] =useState({
  email:'',
  password:''
})


const [Errors, setErrors]= useState({})

  const handleChange = (e)=>{
    setValues({...values, [e.target.name]:e.target.value})
    console.log(values);
  };




  const handleSubmit = (e)=>{
    e.preventDefault();
   setErrors(validation(values))
  };



  return (
   
    <div className='main' > 

    <form className='login-form' onSubmit={handleSubmit}>
            <img src={Image} alt='none'/>
            <h1 >Welcome</h1>
            <span>Get Your Best Experience here </span>
          
            <input name='email' value={values.email} type='email' onChange={handleChange} className='inputs' placeholder='Username'/>
            {Errors.email&&<span style={{color:"red"}}>{Errors.email}</span>}
            <input name='password' value={values.password} type='password' onChange={handleChange} className='inputs' placeholder='Password'/>
            {Errors.password&&<span style={{color:"red"}}>{Errors.password}</span>}
            <button type='submit' className='btn'>Submit</button>
    </form>

    </div>

  )
}

export default Login