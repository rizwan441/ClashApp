import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>
        <Image src="/login.svg" width={600} height={600} alt="login_image" />
      </div>
      <div>
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-900 text-transparent bg-clip-text">Clash</h1>
      </div>
    </div>
  );
};

export default HeroSection;
