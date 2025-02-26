import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Plus } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-200 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo and CTA Button section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <h2 className="text-xl font-bold text-white">accredian</h2>
            <span className="text-xs ml-1 text-gray-400">experts that matter</span>
          </div>

          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mb-1 transition-colors w-full sm:w-auto">
              Schedule 1-on-1 Call Now
            </button>
            <div className="text-xs text-gray-400">Speak with our Learning Advisor</div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programs Column */}
          <div>
            <h3 className="font-medium mb-4 text-lg sm:text-base">Programs</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Data Science & AI</span>
                <Plus size={16} />
              </li>
              <li className="flex justify-between items-center">
                <span>Product Management</span>
                <Plus size={16} />
              </li>
              <li className="flex justify-between items-center">
                <span>Business Analytics</span>
                <Plus size={16} />
              </li>
              <li className="flex justify-between items-center">
                <span>Digital Transformation</span>
                <Plus size={16} />
              </li>
              <li className="flex justify-between items-center">
                <span>Business Management</span>
                <Plus size={16} />
              </li>
              <li className="flex justify-between items-center">
                <span>Project Management</span>
                <Plus size={16} />
              </li>
              <li className="flex justify-between items-center">
                <span>Strategy & Leadership</span>
                <Plus size={16} />
              </li>
              <li className="flex justify-between items-center">
                <span>Senior Management</span>
                <Plus size={16} />
              </li>
              <li className="flex justify-between items-center">
                <span>Fintech</span>
                <Plus size={16} />
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="font-medium mb-4 text-lg sm:text-base">Contact Us</h3>
            <ul className="space-y-2 text-sm sm:text-xs">
              <li>Email us (For Data Science Queries): admissions@accredian.com</li>
              <li>Email us (For Product Management Queries):pm@accredian.com</li>
              <li>Data Science Admission Helpline:+91 9079532929 (9 AM - 7 PM)</li>
              <li>Product Management Admission Helpline:+91 9829811095</li>
              <li>Enrolled Student Helpline: +91 7969322707</li>
              <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
            </ul>
            <h3 className="font-medium mt-6 mb-3">Why Accredian</h3>
            <h3 className="font-medium mt-4 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook size={20} />
              <Linkedin size={20} />
              <Twitter size={20} />
              <Instagram size={20} />
              <Youtube size={20} />
            </div>
          </div>

          {/* Accredian Column */}
          <div>
            <h3 className="font-medium mb-4 text-lg sm:text-base">Accredian</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission Policy</li>
              <li>Referral Policy</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Master FAQs</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-gray-500 mt-8 pt-4 border-t border-gray-800">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer