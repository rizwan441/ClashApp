import React from 'react'
import { Label } from '../../../components/ui/label'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import  Link  from 'next/link';
const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center  flex-col">
    <div className='w-[500px] bg-white rounded-xl px-5 py-10 shadow-md'>
    <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-900 text-transparent bg-clip-text text-center">Clash</h1>
    <h1 className="text-3xl font-bold text-center">Login</h1>
    <p className='text-center'>Welcome Back</p>
    <form className=''>
    <div className='mt-4' >
        <Label htmlFor='name'>Name</Label>
        <Input id="name" name="name" placeholder="Enter Your Name"/>

      </div>
      <div className='mt-4' >
        <Label htmlFor='email'>email</Label>
        <Input id="email" name="email" placeholder="email"/>

      </div>
      <div className='mt-4'>
        <Label htmlFor='password'>Password</Label>
        <Input id="password" name="password" type="password" placeholder="Password"/>

      </div>
      <div className='mt-4'>
        <Label htmlFor='Cpassword'>Confirm Password</Label>
        <Input id="confirm_password" name="confirm_password" type="password" placeholder="confirm Password"/>

      </div>
      <div className='text-right'>
        <Link href='/forgetPassword'>Forget Password</Link>
      </div>
      <Button className='w-full'>Submit</Button>
    </form>

    <p className='text-center mt-2'>
      Already have a account ?
      <Link href='Register'><strong>Login </strong></Link> 

    </p>


    </div>
</div>
  )
}

export default Register