const Header = () => {

  return <>
        <header className="bg-[#121212] h-16 border-b border-gray-100 col-start-1 col-end-3 row-start-1 flex items-center justify-end px-8 shrink-0">
            <div className="flex items-center gap-3">
                <div className="text-right">
                    <p className="text-xs font-bold text-slate-800">Jose Savala Torres</p>
                    <p className="text-[10px] text-gray-400">jsavala@umman.es</p>
                </div>
                <img src="https://ui-avatars.com/api/?name=Jose+Savala&background=e2e8f0&color=475569" alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200"/>
            </div>
        </header>
  </>
}

export default Header;