import genericHandle from "./genericHandle";
import { DataCapture } from "../../types";

const MediaApproachForm = ({ onSubmit }: { onSubmit: DataCapture }) => {

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
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-lg flex items-center justify-center text-xl">
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-800">Bloque 2: Psicología de la Marca</h1>
                        <p className="text-sm text-gray-400">Define el tono y la voz de tu comunicación</p>
                    </div>
                </div>

                <form onSubmit={genericHandle(filter, onSubmit)} className="space-y-10">
                    <div className="space-y-6">
                        <label className="text-sm font-bold text-gray-800">Logotipo de la Marca *</label>
                        
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-gray-400 uppercase tracking-wider">
                                <span>Formal</span>
                                <span>Informal</span>
                            </div>
                            <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-gray-400 uppercase tracking-wider">
                                <span>Serio</span>
                                <span>Divertido</span>
                            </div>
                            <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-gray-400 uppercase tracking-wider">
                                <span>Lujoso</span>
                                <span>Accesible</span>
                            </div>
                            <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                        </div>
                    </div>

                    <hr className="border-gray-100"/>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-2">Valores de la marca</label>
                            <textarea rows={4} className="w-full p-4 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition" placeholder="¿Cuáles son los valores fundamentales de tu marca?"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-2">Palabras que nos definen *</label>
                            <textarea rows="3" className="w-full p-4 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition" placeholder="Ej: Innovación, Calidad, confianza, agradable, etc"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-2">Palabras que no nos representan</label>
                            <textarea rows="3" className="w-full p-4 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition" placeholder="Ej: Barato, genérico, promedio, feo, etc"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-2">Misión *</label>
                            <textarea rows="3" className="w-full p-4 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition" placeholder="¿Cuál es el propósito de tu empresa?"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-2">Visión</label>
                            <textarea rows="3" className="w-full p-4 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition" placeholder="¿A dónde quieres llegar?"></textarea>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-6">
                        <button type="button" className="px-8 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition">Atrás</button>
                        <button type="submit" className="px-8 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">Continuar</button>
                    </div>
                </form>
            </div>
  </>
}

export default MediaApproachForm;