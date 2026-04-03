import { DataCapture } from "../../types";

type Sieve = (elements: HTMLFormControlsCollection) => { ok: boolean, data?: any };

/**
 * Prevents default on form submition event, applies the sieve function over the form elements,
 * if the sieve returns ok:true, the callback is executed
 * @param sieve {@type Sieve} - custom function to validate form submition
 * @param callback {@link DataCapture}
 * @returns 
 */
export default function genericHandle(sieve: Sieve, callback: DataCapture){
  return function(event: React.SyntheticEvent<HTMLFormElement>){

    const result = sieve(event.currentTarget.elements);;

    if(result.ok){
      callback(result);
    }
  }
}