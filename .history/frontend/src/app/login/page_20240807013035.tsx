import React from 'react'
import { Label } from './../../components/ui/label'
import { Input } from './../../components/ui/input'
import { Button } from './../../components/ui/button'


const Login = () => {
  return (

    <div className="w-full h-screen flex justify-center items-center  flex-col">
        <div className='w-[500px] bg-white rounded-xl px-5 py-10 shadow-md'>
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-900 text-transparent bg-clip-text text-center">Clash</h1>
        <h1 className="text-3xl font-bold ">Login</h1>
        <p className=''>Welcome Back</p>
        <form className=''>
          <div className='mt-4' >
            <Label htmlFor='email'>email</Label>
            <Input id="email" name="email" placeholder="email"/>

          </div>
          <div className='mt-4'>
            <Label htmlFor='password'>Password</Label>
            <Input id="password" name="password" type="password" placeholder="Password"/>

          </div>
          <Button className='w-full'>Submit</Button>
        </form>


        </div>
    </div>
  )
}

export default Login