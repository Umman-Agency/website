import FormSteps from "./FormSteps";
import MetadataForm from "./MetadataForm";
import AboutBussinessForm from "./AboutBussinessForm";
import StrategyForm from "./StrategyForm";

export default function Page() {

  const points = ["Psicologia de Marca","Público Objetivo","Estrategia"];

  return <>
    <FormSteps points={points}/>
    <section className="my-8 h-full flex items-center justify-center w-full ">
      {/* <BrandApproachForm /> */}
      <StrategyForm />
    </section>
  </>
}