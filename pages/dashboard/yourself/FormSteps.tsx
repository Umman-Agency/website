
const FormSteps = ({points}: {points: string[]}) => {

  return <>
        <div id="stepper-container" className="max-w-4xl mx-auto my-2 w-full py-2 px-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-[#5831fb] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#5831fb] rounded-full"></div>
                    </div>
                    <span className="text-xs font-bold text-[#5831fb]">Info. General</span>
                </div>
                <div className="step-line"></div>
                {points.map((point, index) => <>
                    <div className="flex items-center gap-2 opacity-30"><div className="w-5 h-5 rounded-full border-2 border-gray-400"></div><span className="text-xs font-medium text-gray-500">{point}</span></div>
                    {index < points.length - 1 ?( <div className="step-line"></div>) : null }
                  </>
                )
                }
            </div>
        </div>
  
  </>
}

export default FormSteps;