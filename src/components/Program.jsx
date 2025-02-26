import { ChevronRight } from 'lucide-react';
import React from "react";

const Program = () => {
  const programCategories = [
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS",
  ];

  const programs = [
    {
      name: "Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      name: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">What Are The <span className="text-blue-600">Referral Benefits?</span></h2>
      <div className="flex flex-col lg:flex-row gap-5 pt-4 sm:pt-8">
        {/* Categories Sidebar */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg overflow-hidden mb-6 lg:mb-0">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-500">
                <th className="text-left p-4 flex justify-between text-white text-base sm:text-lg">All Programs <ChevronRight /></th>
              </tr>
            </thead>
            <tbody>
              {programCategories.map((category) => (
                <tr key={category} className="border-t">
                  <td className="p-3 text-sm sm:text-base">{category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Programs Table */}
        <div className="w-full lg:w-2/3 bg-white rounded-lg overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-200 text-blue-800 text-sm sm:text-base">
                <th className="text-left p-2 sm:p-4">Programs</th>
                <th className="text-left p-2 sm:p-4">Referrer Bonus</th>
                <th className="text-left p-2 sm:p-4">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2 sm:p-4 text-xs sm:text-sm">{program.name}</td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm">{program.referrerBonus}</td>
                  <td className="p-2 sm:p-4 text-xs sm:text-sm">{program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Program;
