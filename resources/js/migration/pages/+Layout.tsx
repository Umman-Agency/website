import "./Layout.css";
import "./tailwind.css";
import logoUrl from "../assets/logo.svg";
import { AnimatePresence } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="min-h-screen bg-[#0C0D0D] text-white overflow-x-hidden flex flex-col">
      <AnimatePresence mode="wait">
      {children}
      </AnimatePresence>
    </div>
    </>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div id="sidebar" className={"p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200"}>
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content" className={"p-5 pb-12 min-h-screen"}>
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className={"p-5 mb-2"}>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
