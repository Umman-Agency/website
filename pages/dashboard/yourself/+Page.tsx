import FormSteps from "./FormSteps";
import MetadataForm from "./MetadataForm";
import AboutBussinessForm from "./AboutBussinessForm";
import TargetPublicForm from "./TargetPublicForm";
import MediaApproachForm from "./MediaApproachForm";
import StrategyForm from "./StrategyForm";
import { useState } from "react";
import CaptureForm from "./CaptureForm";
import { CapturableForm } from "../../types";


export default function Page() {
  const [currentStep, stepOn] = useState(0);

  let isReady = false;

  const components = [ MetadataForm, MediaApproachForm, TargetPublicForm, StrategyForm ];

  const points = ["Info. General", "Psicologia de Marca", "Público Objetivo", "Estrategia"];

  // Derive over currenStep
  function goNext() {
    stepOn(currentStep + 1);
  }

  function getForm(index: number): CapturableForm {
    return components[index];
  }


  return <>
    <FormSteps points={points} current={currentStep} />
    <section className="my-8 h-full flex items-center justify-center w-full ">
      <CaptureForm counter={goNext} Children={getForm(currentStep)} />
    </section>
  </>
}