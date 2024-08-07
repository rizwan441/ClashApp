import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Image src="/logim.svg" width={600} height={600} alt='login_image'/>

    </div>
  )
}

export default HeroSection