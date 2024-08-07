import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>
        <Image src="/login.svg" width={600} height={600} alt="login_image" />
      </div>
      <div>
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold">Clash</h1>
      </div>
    </div>
  );
};

export default HeroSection;
