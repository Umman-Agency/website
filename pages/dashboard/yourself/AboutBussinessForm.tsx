
const AboutBussinessForm = () => {
  return <>
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800">¿Cuál es tu <span className="italic font-medium text-slate-700">perfil profesional?</span></h2>
      <p className="text-slate-500 mt-4 text-lg font-light">Ayúdanos a personalizar tu solución y liberar tu agenda</p>
    </div>

    <div className="w-full max-w-xl space-y-6">
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide text-[11px]">Perfil</label>
        <div className="relative">
          <select id="perfilSelect" className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 h-[40px] py-0 text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
            <option value="" disabled selected>Selecciona el tipo de perfil</option>
            <option value="freelancer">Freelancer</option>
            <option value="agencia">Agencia</option>
            <option value="empresa">Empresa y/o Negocio</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-chevron-down text-[#0d9488] text-sm"></i>
          </div>
        </div>
      </div>

      <div id="empresaFields" className="hidden-section space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide text-[11px]">Nombre de la Empresa y/o Negocio *</label>
          <input type="text" placeholder="Ingresa el nombre Legal" className="w-full bg-white border border-gray-300 rounded-lg px-4 h-[40px] text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div className="bg-[#EEF0FF] p-4 rounded-lg flex gap-3 border border-[#E0E4FF]">
          <i className="fa-solid fa-bullhorn text-[#5831fb] mt-1"></i>
          <p className="text-[13px] text-slate-600 leading-relaxed">
            Si seleccionaste <strong>Empresa</strong>, te pediremos detalles sobre tu equipo y estructura. Esto nos ayudará a poder organizar la mejor estrategia para tu negocio.
          </p>
        </div>
      </div>

      <div id="continueBtnContainer" className="hidden-section flex justify-end pt-4">
        <button className="bg-[#5831fb] text-white px-10 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#4726d9] transition-colors">
          Continuar
        </button>
      </div>
    </div>
    </>
}

export default AboutBussinessForm;