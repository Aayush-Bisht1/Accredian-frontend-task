import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-6 lg:px-8 relative ">
      <div className="flex flex-col sm:flex-row gap-3 items-center mb-4 sm:mb-0">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-blue-500 text-3xl sm:text-4xl font-bold">accredian</h1>
          <p className="text-gray-600 text-xs font-semibold">
            credentials that matter
          </p>
        </div>
        <Button className="flex bg-blue-500 text-white h-8 sm:h-10 text-base sm:text-lg text-center cursor-pointer mt-2 sm:mt-0">
          Courses <ChevronDown className="text-base sm:text-lg ml-1" />
        </Button>
      </div>
      <div className="hidden sm:flex justify-center items-center gap-4 text-base sm:text-lg text-black">
        {["Refer & Earn", "Resources", "About Us"].map((item, index) => (
          <a key={index} href="#" className="hover:text-blue-500 transition-colors">
            {item}
          </a>
        ))}
        <Button className="bg-gray-200 text-base sm:text-lg h-8 sm:h-10 cursor-pointer">Login</Button>
        <Button className="bg-blue-600 text-white text-base sm:text-lg h-8 sm:h-10 cursor-pointer">Try for free</Button>
      </div>
      <Button 
        className="sm:hidden bg-blue-500 text-white h-8 text-base"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </Button>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 sm:hidden">
          <div className="flex flex-col items-center py-4">
            {["Refer & Earn", "Resources", "About Us"].map((item, index) => (
              <a key={index} href="#" className="py-2 hover:text-blue-500 transition-colors">
                {item}
              </a>
            ))}
            <Button className="bg-gray-200 text-base w-full max-w-xs my-2">Login</Button>
            <Button className="bg-blue-600 text-white text-base w-full max-w-xs">Try for free</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
