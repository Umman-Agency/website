import { CapturableForm } from "../../types";

export type CaptureFormProps= {
  counter: () => void;
  Children: CapturableForm;
}

const CaptureForm = ({ counter, Children }: CaptureFormProps) => {

  // Add a type that generalizes every shape
  function submitListener(data: any){
    console.log(data);
    counter();
  }

  return <>
    <Children onSubmit={submitListener} />
  </>
}

export default CaptureForm;