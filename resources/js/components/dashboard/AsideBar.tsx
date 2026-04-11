
function toggleSidebar() {

}

const AsideBar = (props: any) => {
  return <>
    <aside id="sidebar" className=" bg-[#121212] row-end-3 text-gray-400 flex flex-col justify-between p-4 relative w-full" {...props}>
      <div>
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 p-3 hover:text-white transition">
            <i className="fa-solid fa-table-cells-large text-sm w-5 text-center"></i>
            <span className="text-sm font-medium sidebar-text">Dashboard</span>
          </a>
          <div className="mt-4 mb-2 px-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold sidebar-text">Tu empresa</div>
          <a href="#" className="flex items-center gap-3 p-3 sidebar-item-active">
            <i className="fa-solid fa-pen-to-square text-sm w-5 text-center"></i>
            <span className="text-sm sidebar-text">Tu empresa</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:text-white transition">
            <i className="fa-solid fa-file-lines text-sm w-5 text-center"></i>
            <span className="text-sm sidebar-text">Información General</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:text-white transition">
            <i className="fa-solid fa-heart text-sm w-5 text-center"></i>
            <span className="text-sm sidebar-text">Psicología de Marca</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:text-white transition">
            <i className="fa-solid fa-user-group text-sm w-5 text-center"></i>
            <span className="text-sm sidebar-text">Público Objetivo</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:text-white transition">
            <i className="fa-solid fa-bullseye text-sm w-5 text-center"></i>
            <span className="text-sm sidebar-text">Estrategia de Marca</span>
          </a>
        </nav>
      </div>

      <div className="space-y-1 border-t border-gray-800 pt-4">
        <a href="#" className="flex items-center gap-3 p-3 hover:text-white transition">
          <i className="fa-regular fa-circle-question text-sm w-5 text-center"></i>
          <span className="text-sm sidebar-text">Soporte</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 hover:text-white transition">
          <i className="fa-solid fa-gear text-sm w-5 text-center"></i>
          <span className="text-sm sidebar-text">Configuración</span>
        </a>
      </div>
    </aside>
  </>;
}

export default AsideBar;