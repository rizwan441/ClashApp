import React from 'react'
import  Image  from 'next/image';

const heroSection = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div >
         <Image src ='/login.svg' width={600} hight={600} alt="banner"/>   I
        </div>
      
    </div>
  )
}

export default heroSection
