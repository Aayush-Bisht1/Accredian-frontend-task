import React from "react"
import { Button } from "./ui/button"
import { ArrowRight, UserPlus, FileText, Briefcase } from "lucide-react"

const Refer = () => {
  const steps = [
    { icon: UserPlus, text: "Submit referrals easily via our website's referral section." },
    { icon: FileText, text: "Earn rewards once your referral joins an Accredian program." },
    { icon: Briefcase, text: "Referrer receives a bonus 30 days after program enrollment." },
  ]

  return (
    <div className="bg-blue-50 p-4 sm:p-8 pt-8 sm:pt-15 rounded-lg flex flex-col items-center w-full min-h-screen mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
        How Do I <span className="text-blue-600">Refer?</span>
      </h1>

      <div className="relative w-full sm:w-[90%] mt-4 sm:mt-8 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4/5 h-4/5 border-4 border-dashed border-blue-300 rounded-full hidden sm:block"></div>
        </div>

        <div className="relative flex flex-col sm:flex-row justify-between items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="bg-white rounded-full shadow-xl p-4 sm:p-6 w-full sm:w-64 h-auto sm:h-64 flex flex-col items-center justify-center text-center z-10 mb-6 sm:mb-0">
                <div className="bg-blue-500 p-3 rounded-full mb-4 text-white">
                  <step.icon size={32} />
                </div>
                <p className="font-medium text-sm sm:text-base">{step.text}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:flex flex-1 justify-center items-center relative z-0">
                  <ArrowRight className="text-blue-500 absolute" size={32} />
                  <div className="w-full border-t-4 border-blue-500"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Button className="mt-6 sm:mt-10 text-base sm:text-lg h-10 sm:h-12 w-full sm:w-40 bg-blue-500 hover:bg-blue-600 text-white shadow-md transition duration-300">
        Refer Now
      </Button>
    </div>
  )
}

export default Refer

