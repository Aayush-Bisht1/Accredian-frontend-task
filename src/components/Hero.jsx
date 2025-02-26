import React, { useState } from "react";
import hero from "../assets/hero.png";
import money from "../assets/money.png"
import { X } from "lucide-react"
import { Button } from "./ui/button";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    friendEmail: "",
    friendName: "",
    friendPhone: "",
    courseVertical: "",
    yourName: "",
    yourEmail: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    setIsModalOpen(false)
    // Reset form data
    setFormData({
      friendEmail: "",
      friendName: "",
      friendPhone: "",
      courseVertical: "",
      yourName: "",
      yourEmail: "",
    })
  }
  return (
    <div className="w-full mb-8 sm:mb-15 flex flex-col justify-center items-center mt-3 gap-4 sm:gap-6 px-4 sm:px-6">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] h-10 sm:h-12 bg-blue-100 flex justify-around items-center text-black rounded-full text-sm sm:text-base overflow-x-auto whitespace-nowrap">
        <a href="#" className="text-blue-700 px-3 py-1">
          Refer
        </a>
        <a href="#" className="px-3 py-1">Benefits</a>
        <a href="#" className="px-3 py-1">FAQs</a>
        <a href="#" className="px-3 py-1">Support</a>
      </div>
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-2/3 rounded-xl bg-blue-100 px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-around relative">
          <div className="w-full sm:w-1/3 text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Let's Learn<br />& Earn
            </h1>
            <p className="text-xl sm:text-2xl mb-6 sm:mb-8">
              Get a chance to win<br />
              up-to <span className="text-blue-600">Rs. 15,000</span>
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-base sm:text-lg"
            >
              Refer Now
            </button>
          </div>
          <div className="w-full sm:w-2/3">
            <img
              src={hero}
              alt="Hero illustration"
              width={500}
              height={300}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position, index) => (
            <div key={index} className={`absolute ${position === 'top-left' ? '-top-4 sm:-top-6 -left-2 sm:-left-4' : 
                                                    position === 'top-right' ? '-top-4 sm:-top-6 -right-2 sm:-right-4' :
                                                    position === 'bottom-left' ? '-bottom-4 sm:-bottom-6 -left-2 sm:-left-4' :
                                                    '-bottom-4 sm:-bottom-6 -right-2 sm:-right-4'} 
                                        ${position.includes('bottom') ? 'rotate-180' : ''} w-8 sm:w-auto`}>
              <img
                src={money}
                alt="Money icon"
                width={120}
                height={120}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Refer and Earn</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="friendEmail" className="block text-sm font-medium text-gray-700">
                  Friend's Email
                </label>
                <input
                  type="email"
                  id="friendEmail"
                  name="friendEmail"
                  required
                  className="mt-1 block h-8 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.friendEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="friendName" className="block text-sm font-medium text-gray-700">
                  Friend's Name
                </label>
                <input
                  type="text"
                  id="friendName"
                  name="friendName"
                  required
                  className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.friendName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="friendPhone" className="block text-sm font-medium text-gray-700">
                  Friend's Phone
                </label>
                <input
                  type="tel"
                  id="friendPhone"
                  name="friendPhone"
                  required
                  className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.friendPhone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="courseVertical" className="block text-sm font-medium text-gray-700">
                  Course Vertical
                </label>
                <select
                  id="courseVertical"
                  name="courseVertical"
                  required
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.courseVertical}
                  onChange={handleInputChange}
                >
                  <option value="">Select a course</option>
                  <option value="data-science">Data Science</option>
                  <option value="product-management">Product Management</option>
                  <option value="business-analytics">Business Analytics</option>
                  <option value="digital-transformation">Digital Transformation</option>
                </select>
              </div>
              <div>
                <label htmlFor="yourName" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  required
                  className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.yourName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="yourEmail" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="yourEmail"
                  name="yourEmail"
                  required
                  className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.yourEmail}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit" className="w-full h-10 bg-blue-600 text-white hover:bg-blue-700">
                Submit Referral
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
