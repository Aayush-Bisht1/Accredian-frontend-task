import React from 'react'
import { Button } from './ui/button'
import { Headset } from 'lucide-react'

const Faqs = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">Frequently Asked <span className="text-blue-600">Questions</span></h2>
      <div className="bg-white rounded-lg py-4 sm:py-6 px-4 sm:px-10">
        <div className="mb-6 sm:mb-8 text-base sm:text-lg">
          <h3 className="font-semibold mb-2 text-lg sm:text-xl">Do I need to have prior Product Management and Project Management experience to enroll in the program?</h3>
          <p className="text-gray-600 text-sm sm:text-base">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
        </div>
        
        <div className="bg-blue-600 text-white rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
          <div className='flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0'>
            <Headset size={40} className="sm:w-[60px] sm:h-[60px]" />
            <div>
              <h3 className="text-xl sm:text-3xl font-semibold mb-2 text-center sm:text-left">Want to delve deeper into the program?</h3>
              <p className="text-sm sm:text-base text-center sm:text-left">Share your details to receive expert insights from our program team!</p>
            </div>
          </div>
          <Button className="bg-white text-base sm:text-xl text-blue-600 px-4 sm:px-6 py-2 cursor-pointer w-full sm:w-auto mt-4 sm:mt-0">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Faqs
