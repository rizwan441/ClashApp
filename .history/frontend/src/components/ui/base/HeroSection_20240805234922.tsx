import React from "react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div>
        <Image src="/login.svg" width={600} height={400} alt="login_image" />
      </div>
      <div className="text-center mt-0">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-900 text-transparent bg-clip-text">Clash</h1>
        <p className="text-2xl md:text-4xl lg:text-5xl text-bold text-center">Discover the Best Choice, Togather</p>
        <Link href="/login">        <Button className="mt-2">Start Free</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
