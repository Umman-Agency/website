type Contact = {
  countryNumber: string;
  phoneNumber: string;
  email: string;
}

export type Scheme = {
  logoUri: string;
  contact: Contact;
  categories: string[];
  styles: string[];
}

const MetadataForm = () => {
  return <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-full max-w-2xl p-10">
                
                <div className="flex items-start gap-4 mb-8">
                    <div className="w-10 h-10 bg-green-50 rounded flex items-center justify-center">
                        <span className="text-green-500 text-xl">📋</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">Bloque 1: Información General</h2>
                        <p className="text-sm text-gray-500 font-medium">Define la apariencia y nombre de tu marca</p>
                    </div>
                </div>

                <hr className="mb-8"/>

                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Logo de la Marca <span className="text-gray-400">ⓘ</span></label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg py-10 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
                        <span className="text-2xl mb-1">☁</span>
                        <p className="text-umman-purple font-semibold text-sm">Sube tu logo aquí</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Número de contacto *</label>
                        <div className="flex">
                            <select className="border border-gray-300 rounded-l-lg p-2 bg-gray-50 text-sm outline-none">
                                <option>+34</option>
                            </select>
                            <input type="text" placeholder="999 999 999" className="w-full border border-l-0 border-gray-300 rounded-r-lg p-2 text-sm outline-none"/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Mail de contacto *</label>
                        <input type="email" placeholder="ejemplo@correo.com" className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none"/>
                    </div>
                </div>

                <div className="mb-8">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Rubros / Categorías</label>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-umman-purple text-white px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer">Diseño</span>
                        <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer border border-gray-200">Gastronomía</span>
                        <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer border border-gray-200">Tecnología</span>
                        <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer border border-gray-200">Salud</span>
                        <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer border border-gray-200">Educación</span>
                        <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer border border-gray-200">Finanzas</span>
                        <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer border border-gray-200">Marketing</span>
                        <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer border border-gray-200">Retail</span>
                        <span className="bg-umman-purple text-white w-7 h-7 flex items-center justify-center rounded-full text-lg cursor-pointer">+</span>
                    </div>
                </div>

                <div className="mb-10">
                    <label className="block text-sm font-bold text-gray-700 mb-4">Estilo (Max. 2)</label>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-md transition">
                            <span className="text-xl">⛶</span>
                            <p className="text-[10px] font-bold text-gray-600">Minimalista</p>
                        </div>
                        <div className="bg-umman-purple border border-umman-purple rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-200">
                            <span className="text-xl text-white">♡</span>
                            <p className="text-[10px] font-bold text-white">Vintage</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-md transition">
                            <span className="text-xl">💼</span>
                            <p className="text-[10px] font-bold text-gray-600">Corporativo</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-md transition">
                            <span className="text-xl">📷</span>
                            <p className="text-[10px] font-bold text-gray-600">Realista</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-md transition">
                            <span className="text-xl">🖋</span>
                            <p className="text-[10px] font-bold text-gray-600">Artístico</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-md transition">
                            <span className="text-xl text-umman-purple">💧</span>
                            <p className="text-[10px] font-bold text-gray-600">Alto contraste</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button className="bg-umman-purple text-white px-10 py-3 rounded-xl font-bold text-sm shadow-lg shadow-purple-200 hover:bg-opacity-90 transition">
                        Continuar
                    </button>
                </div>
            </div>
  </>;
}

export default MetadataForm;