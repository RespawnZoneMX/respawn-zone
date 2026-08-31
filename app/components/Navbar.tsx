import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#0B0F19] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link href="/" className="text-2xl font-bold hover:text-[#22C55E] transition">
          <span className="text-[#22C55E]">RESPAWN</span> ZONE
        </Link>

        <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
          <Link href="/" className="hover:text-[#22C55E] transition">🏠 Inicio</Link>
          <Link href="/sobre-mi" className="hover:text-[#22C55E] transition">👤 Sobre Mí</Link>
          <Link href="/legado-gamer" className="hover:text-[#22C55E] transition">⭐ Legado Gamer</Link>
          <Link href="/hall-of-fame" className="hover:text-[#22C55E] transition">🏆 Hall of Fame</Link>
          <Link href="/biblioteca-steam" className="hover:text-[#22C55E] transition">🎮 Steam</Link>
          <Link href="/actualmente-jugando" className="hover:text-[#22C55E] transition">🕹 Jugando</Link>
        </div>
      </nav>
    </header>
  );
}
