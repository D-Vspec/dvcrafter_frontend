import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
export default function LoginForm({theme}) {
  const [mail,setMail] = useState('');
  function handleLowerMail(event){
    setMail(event.target.value.toLowerCase());
  }
  return (
    <div  className={`card border-1 shadow ${theme==='dark'?'bg-dark shadow-lg text-light':'bg-light'}`} data-bs-theme={theme}>
        <form className='p-5'>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" value={mail} onChange={handleLowerMail} class="form-control" id="exampleInputEmail1" placeholder='abc@xyz.com'/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your password'/>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
        </div>
        <div className='mt-5'>
          <button type="submit" class="btn btn-primary w-100 py-1 d-flex align-items-center justify-content-center">Login <i class="bi bi-arrow-right fs-5 mx-2"></i></button>
        </div>
        <div class='mt-3'>
          <Link className='link-secondary' to='/signup'>Don't have an account?</Link>
        </div>
        </form>
    </div>
  )
}
