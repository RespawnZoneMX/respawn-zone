"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeClass = "text-[#22C55E] font-semibold";

  return (
    <header className="border-b border-white/10 bg-[#0B0F19] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-[#22C55E] transition"
        >
          <span className="text-[#22C55E]">RESPAWN</span> ZONE
        </Link>

        <div className="flex items-center gap-6" ref={menuRef}>
          <Link
            href="/"
            className={pathname === "/" ? activeClass : "hover:text-[#22C55E] transition"}
          >
            🏠 Inicio
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-[#22C55E] transition"
            >
              👤 Sobre Mí ▼
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-[#111827] border border-white/10 rounded-xl shadow-lg overflow-hidden">
                <Link href="/sobre-mi" onClick={() => setOpen(false)} className={`block px-4 py-3 hover:bg-[#1F2937] ${pathname === '/sobre-mi' ? activeClass : ''}`}>
                  👤 Perfil
                </Link>

                <Link href="/legado-gamer" onClick={() => setOpen(false)} className={`block px-4 py-3 hover:bg-[#1F2937] ${pathname === '/legado-gamer' ? activeClass : ''}`}>
                  ⭐ Legado Gamer
                </Link>

                <Link href="/hall-of-fame" onClick={() => setOpen(false)} className={`block px-4 py-3 hover:bg-[#1F2937] ${pathname === '/hall-of-fame' ? activeClass : ''}`}>
                  🏆 Hall of Fame
                </Link>

                <Link href="/setup-gamer" onClick={() => setOpen(false)} className={`block px-4 py-3 hover:bg-[#1F2937] ${pathname === '/setup-gamer' ? activeClass : ''}`}>
                  🖥 Setup Gamer
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/biblioteca-steam"
            className={pathname === "/biblioteca-steam" ? activeClass : "hover:text-[#22C55E] transition"}
          >
            🎮 Steam
          </Link>

          <Link
            href="/actualmente-jugando"
            className={pathname === "/actualmente-jugando" ? activeClass : "hover:text-[#22C55E] transition"}
          >
            🕹 Jugando
          </Link>
        </div>
      </nav>
    </header>
  );
}
