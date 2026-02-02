
import { useState } from "react";
import AboutBussinessForm from "@/components/yourself/AboutBussinessForm";
import CaptureForm from "@/components/yourself/CaptureForm";
import FormSteps from "@/components/yourself/FormSteps";
import MediaApproachForm from "@/components/yourself/MediaApproachForm";
import MetadataForm from "@/components/yourself/MetadataForm";
import StrategyForm from "@/components/yourself/StrategyForm";
import TargetPublicForm from "@/components/yourself/TargetPublicForm";

import Dashboard from "./dashboard";

import { type CapturableForm } from "@/types/universal";


export default function Yourself() {
  const [currentStep, stepOn] = useState(0);

  // let isReady = false;

  const components = [MetadataForm, MediaApproachForm, TargetPublicForm, StrategyForm];

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

Yourself.layout = page => <Dashboard children={page} />;