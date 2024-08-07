import Link from 'next/link'
import  Image  from 'next/image';
import { Button } from '@/components/ui/button';
 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <Image src ="./NotFound.svg" width={600} height={600} alt="notFounds"/>
      <Link href='/'>
      <Button>Return Home</Button>
      </Link>
      
    </div>
  )
}