import genericHandle from "./genericHandle";
import { DataCapture } from "../../types";

const TargetPublicForm = ({ onSubmit }: { onSubmit: DataCapture }) => {

  function filter(elements: HTMLFormControlsCollection) {
    console.log(elements);

    return { 
      ok: true,
      data: {
        ...elements
      }
    }
  }

  return <>
            <div className="max-w-2xl w-full bg-white rounded-xl border border-gray-100 shadow-sm p-8 h-fit">
                
                <div className="flex items-start gap-4 mb-8">
                    <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                        <i className="fa-regular fa-user text-xl"></i>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-800">Bloque 3: Público Objetivo</h2>
                        <p className="text-sm text-gray-500">Define a tu cliente ideal</p>
                    </div>
                </div>

                <form onSubmit={genericHandle(filter, onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Rango de edad *</label>
                        <select className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-400 text-sm focus:ring-purple-500 focus:border-purple-500 outline-none">
                            <option>Selecciona una opción</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nivel Socioeconómico *</label>
                        <select className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-400 text-sm focus:ring-purple-500 focus:border-purple-500 outline-none">
                            <option>Selecciona una opción</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Género</label>
                        <select className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-400 text-sm focus:ring-purple-500 focus:border-purple-500 outline-none">
                            <option>Selecciona una opción</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Intereses y Comportamientos *</label>
                        <textarea rows="4" placeholder="Ej: Viajes, fotografía, foody, fitness, entretenimiento, etc" className="w-full p-3 border border-gray-300 rounded-lg bg-white text-sm focus:ring-purple-500 focus:border-purple-500 outline-none"></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Puntos de dolor</label>
                        <textarea rows="4" placeholder="¿Qué problemas específicos resuelve tu marca? Esto es crucial para contenido persuasivo" className="w-full p-3 border border-gray-300 rounded-lg bg-white text-sm focus:ring-purple-500 focus:border-purple-500 outline-none"></textarea>
                    </div>

                    <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg flex items-start gap-3">
                        <i className="fa-solid fa-bullhorn text-purple-400 mt-1"></i>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            <span className="font-bold text-purple-600">Tip:</span> Sé específico. Ej: "Pierden tiempo en tareas manuales repetitivas" en lugar de "Tienen problemas"
                        </p>
                    </div>

                    <div className="flex justify-between pt-6">
                        <button type="button" className="px-8 py-2 border border-purple-600 text-purple-600 font-medium rounded-lg text-sm hover:bg-purple-50 transition-colors">Atrás</button>
                        <button type="submit" className="px-8 py-2 bg-[#4c1dff] text-white font-medium rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-md">Continuar</button>
                    </div>
                </form>

            </div>
  
  </>
}

export default TargetPublicForm;
