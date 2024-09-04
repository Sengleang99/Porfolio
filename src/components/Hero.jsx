import React from "react";
import Profile from "../assets/photo_2024-09-03_23-25-36.jpg";

function Hero() {
  return (
    <div className="py-8 mb-10 text-center text-black bg-slate-50">
      <img 
        src={Profile} 
        alt="Profile Picture" 
        className="object-cover w-48 h-48 mx-auto mb-8 transition duration-300 transform rounded-full mt-14 hover:scale-105" 
      />
      <h1 className="mb-3 text-4xl">
        I'm Sengleang 
      </h1>
      <span className="text-4xl font-extrabold text-transparent bg-blue-700 bg-clip-text">Web & App Developer</span>
      <p className="px-4 mt-4 text-lg text-gray-700">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-t from-green-400 to-blue-500 md:inline hover:scale-105">Contact with me</button>
        <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-t from-pink-400 to-blue-500 md:inline hover:scale-105">Resume</button>
      </div>
    </div>
  );
}

export default Hero;
