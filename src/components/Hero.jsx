import React, { useState } from "react";
import hero from "../assets/hero.png";
import money from "../assets/money.png";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    recipientName: "",
    recipientEmail: "",
    recipientPhone: "",
    course: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("referrerName", formData.referrerName);
    formdata.append("referrerEmail", formData.referrerEmail);
    formdata.append("recipientName", formData.recipientName);
    formdata.append("recipientEmail", formData.recipientEmail);
    formdata.append("recipientPhone", formData.recipientPhone);
    formdata.append("course", formData.course);

    try {
      const response = await fetch("https://accredian-backend-task-vrn5.onrender.com/api/referral", {
        method: "POST",
        body: formdata,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(data.message || "Referral submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setIsModalOpen(false);
        setFormData({
          referrerName: "",
          referrerEmail: "",
          recipientName: "",
          recipientEmail: "",
          recipientPhone: "",
          course: "",
        });
      } else {
        toast.error(data.message || "Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Network error occurred", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="w-full mb-8 sm:mb-15 flex flex-col justify-center items-center mt-3 gap-4 sm:gap-6 px-4 sm:px-6">
      <ToastContainer />

      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] h-10 sm:h-12 bg-blue-100 flex justify-around items-center text-black rounded-full text-sm sm:text-base overflow-x-auto whitespace-nowrap">
        <a href="#" className="text-blue-700 px-3 py-1">
          Refer
        </a>
        <a href="#" className="px-3 py-1">
          Benefits
        </a>
        <a href="#" className="px-3 py-1">
          FAQs
        </a>
        <a href="#" className="px-3 py-1">
          Support
        </a>
      </div>
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-2/3 rounded-xl bg-blue-100 px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-around relative">
          <div className="w-full sm:w-1/3 text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Let's Learn
              <br />& Earn
            </h1>
            <p className="text-xl sm:text-2xl mb-6 sm:mb-8">
              Get a chance to win
              <br />
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
          {["top-left", "top-right", "bottom-left", "bottom-right"].map(
            (position, index) => (
              <div
                key={index}
                className={`absolute ${
                  position === "top-left"
                    ? "-top-4 sm:-top-6 -left-2 sm:-left-4"
                    : position === "top-right"
                    ? "-top-4 sm:-top-6 -right-2 sm:-right-4"
                    : position === "bottom-left"
                    ? "-bottom-4 sm:-bottom-6 -left-2 sm:-left-4"
                    : "-bottom-4 sm:-bottom-6 -right-2 sm:-right-4"
                } 
                ${
                  position.includes("bottom") ? "rotate-180" : ""
                } w-8 sm:w-auto`}
              >
                <img
                  src={money}
                  alt="Money icon"
                  width={120}
                  height={120}
                  layout="responsive"
                />
              </div>
            )
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Refer and Earn</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="recipientEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Friend's Email
                </label>
                <input
                  type="email"
                  id="recipientEmail"
                  name="recipientEmail"
                  required
                  className="mt-1 block h-8 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.recipientEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="recipientName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Friend's Name
                </label>
                <input
                  type="text"
                  id="recipientName"
                  name="recipientName"
                  required
                  className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.recipientName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="recipientPhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Friend's Phone
                </label>
                <input
                  type="tel"
                  id="recipientPhone"
                  name="recipientPhone"
                  required
                  className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.recipientPhone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700"
                >
                  Course Vertical
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.course}
                  onChange={handleInputChange}
                >
                  <option value="">Select a course</option>
                  <option value="data-science">Data Science</option>
                  <option value="product-management">Product Management</option>
                  <option value="business-analytics">Business Analytics</option>
                  <option value="digital-transformation">
                    Digital Transformation
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="referrerName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="referrerName"
                  name="referrerName"
                  required
                  className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.referrerName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="referrerEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="referrerEmail"
                  name="referrerEmail"
                  required
                  className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.referrerEmail}
                  onChange={handleInputChange}
                />
              </div>
              <Button
                type="submit"
                className="cursor-pointer w-full h-10 bg-blue-600 text-white hover:bg-blue-700"
              >
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
