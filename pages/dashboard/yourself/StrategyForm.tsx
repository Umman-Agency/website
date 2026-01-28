const StrategyForm = () => {
  return <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-start space-x-4 mb-8">
                    <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                        <i className="fa-solid fa-tv text-xl"></i>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-800">Bloque 4: Estrategia de marca</h2>
                        <p className="text-gray-500 text-sm">Define dónde y cómo comunicarás</p>
                    </div>
                </div>

                <form className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sitio web</label>
                            <div className="flex space-x-2">
                                <input type="text" placeholder="www.miempresa.com" className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"/>
                                <button className="p-2 text-indigo-500 border border-indigo-200 rounded-lg hover:bg-indigo-50"><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
                            <div className="flex space-x-2">
                                <input type="text" placeholder="www.facebook.com/miempresa" className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"/>
                                <button className="p-2 text-indigo-500 border border-indigo-200 rounded-lg hover:bg-indigo-50"><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                            <div className="flex space-x-2">
                                <input type="text" placeholder="www.instagram.com/miempresa" className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"/>
                                <button className="p-2 text-indigo-500 border border-indigo-200 rounded-lg hover:bg-indigo-50"><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tiktok</label>
                            <div className="flex space-x-2">
                                <input type="text" placeholder="www.tiktok.com/@miempresa" className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"/>
                                <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 px-3"><i className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <label className="block text-sm font-bold text-gray-700 mb-4">Plataformas de Publicación *</label>
                        <div className="grid grid-cols-2 gap-3">
                            <label className="flex items-center border border-gray-200 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input type="checkbox" className="mr-3 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                                <span className="text-sm text-gray-600">Generar confianza</span>
                            </label>
                            <label className="flex items-center border border-gray-200 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input type="checkbox" className="mr-3 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                                <span className="text-sm text-gray-600">Transmitir cercanía</span>
                            </label>
                            <label className="flex items-center border border-gray-200 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input type="checkbox" className="mr-3 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                                <span className="text-sm text-gray-600">Educar</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Llamados a la acción *</label>
                        <textarea rows="4" placeholder="Ej: Compra aquí, Cotiza aquí, etc" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg flex space-x-3">
                        <i className="fa-solid fa-bullhorn text-indigo-400 mt-1"></i>
                        <p className="text-xs text-indigo-600 leading-relaxed">
                            Tip: Sé específico. Ej: "Compra aquí" esto es crucial para poder generar alguna interacción.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <label className="flex items-center text-sm font-bold text-gray-700">Sube tus imágenes <i className="fa-solid fa-circle-info ml-2 text-emerald-500"></i></label>
                        <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 flex flex-col items-center justify-center space-y-2 hover:border-indigo-300 transition cursor-pointer">
                            <i className="fa-solid fa-cloud-arrow-up text-gray-400 text-2xl"></i>
                            <span className="text-indigo-600 font-semibold text-sm">Subir imagenes</span>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg flex space-x-3">
                            <i className="fa-solid fa-bullhorn text-indigo-400 mt-1"></i>
                            <p className="text-xs text-indigo-600 leading-relaxed">
                                Recuerda subir todas las imágenes que tengas a tu alcance para poder generar todo el contenido posible y de mejor calidad.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between pt-6">
                        <button type="button" className="px-8 py-2 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition">Atrás</button>
                        <button type="submit" className="px-10 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">Continuar</button>
                    </div>
                </form>
            </div>
  </>
}

export default StrategyForm;