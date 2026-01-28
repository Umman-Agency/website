import FormSteps from "./FormSteps";
import MetadataForm from "./MetadataForm";
import AboutBussinessForm from "./AboutBussinessForm";
import StrategyForm from "./StrategyForm";
import { useState } from "react";
import CaptureForm from "./CaptureForm";


export default function Page() {

let [currentStep, stepOn] = useState(0);

// Derive over currenStep

function goNext() {
  stepOn(currentStep += 1);
}

  const points = ["Info. General", "Psicologia de Marca", "Público Objetivo", "Estrategia"];

  return <>
    <FormSteps points={points} current={currentStep} />
    <section className="my-8 h-full flex items-center justify-center w-full ">
      {/* <BrandApproachForm /> */}
      <CaptureForm>
        <StrategyForm />
      </CaptureForm>
    </section>
  </>
}