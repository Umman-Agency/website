import AsideBar from "@/components/dashboard/AsideBar";
import Header from "@/components/dashboard/Header";

import "@/lib/dashboard/dashboard.css";

function Dashboard({ children }: { children: React.ReactNode }) {
  return <main className="grid grid-cols-1 md:grid-rows-[minmax(4%,6%)_auto] md:grid-cols-[min(13.7%,15.35%)_1fr] min-h-screen gap-0">
    <Header />
    <AsideBar />
    <div className="bg-[#ffffff] col-span-2 row-start-2 flex-1 flex flex-col items-center px-8 py-10">
      {children}
    </div>
  </main>
}


export default Dashboard;