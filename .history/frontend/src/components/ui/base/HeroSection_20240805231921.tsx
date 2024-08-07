import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div>        <Image src="/login.svg" width={600} height={600} alt='login_image'/>
        </div>

    </div>
  )
}

export default HeroSection