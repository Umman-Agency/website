import { motion } from "framer-motion";
import { cva } from "class-variance-authority";


const circle = cva(["w-5 h-5","rounded-full","border-2"],{
  variants: {
    intent: {
      primary: ["border-2 border-[#5831fb] flex items-center justify-center"],
    },

    disabled: {
      false: null,
      true: ["border-gray-400"],
    }
  }

});

const FormSteps = ({ points, current = 0 }: { points: string[], current?: number }) => {

  return <>
    <motion.div id="stepper-container" className="max-w-4xl mx-auto my-2 w-full py-2 px-8">
      <div className="flex items-center justify-between">
        {/* <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-[#5831fb] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#5831fb] rounded-full"></div>
                    </div>
                    <span className="text-xs font-bold text-[#5831fb]">Info. General</span>
                </div> */}
        {points.map((point, index) => <>

          <div className={`flex items-center gap-2 ${index === current ? "" : "opacity-30"}`}>
            <div className={circle({ intent: "primary", disabled: index !== current })}>
              {index === current ? (<div className="w-2 h-2 bg-[#5831fb] rounded-full"></div>) : null}
            </div><span className="text-xs font-medium text-gray-500">{point}</span>
          </div>
          {index < points.length - 1 ? (<div className="step-line"></div>) : null}
        </>)
        }
      </div >
    </motion.div>
  </>
}

export default FormSteps;