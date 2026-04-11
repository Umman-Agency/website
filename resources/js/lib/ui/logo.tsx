import { Link } from "@inertiajs/react";

export default function Logo({ href }: { href: string }) {

  return (
    <>
      <Link href={href} className="text-2xl font-bold text-white tracking-wider">
        <img src="assets/logo_umman.png" alt="Logo de Umman" className="h-auto w-auto" /> {/* Changed h-10 to h-5 */}
      </Link>
    </>

  );
};