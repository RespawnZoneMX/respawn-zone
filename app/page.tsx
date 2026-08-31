import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
          <span className="text-[#22C55E]">RESPAWN</span> ZONE
        </h1>

        <p className="text-2xl text-gray-300 mb-4">
          Donde cada partida cuenta y se siente real.
        </p>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          El Rafeta · Marduk · Gamer desde la era del Sega Genesis.
          Amante de los MMORPG, los juegos competitivos y las aventuras
          que dejan huella.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/legado-gamer" className="bg-[#111827] rounded-xl p-6 border border-white/10 hover:border-[#22C55E] transition block">
          <div className="text-4xl mb-4">⭐</div>
          <h2 className="text-2xl font-bold text-[#22C55E] mb-3">Legado Gamer</h2>
          <p className="text-gray-300">Los juegos que definieron mi historia como jugador.</p>
        </Link>

        <Link href="/hall-of-fame" className="bg-[#111827] rounded-xl p-6 border border-white/10 hover:border-yellow-400 transition block">
          <div className="text-4xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">Hall of Fame</h2>
          <p className="text-gray-300">Los momentos y juegos más importantes de mi trayectoria gamer.</p>
        </Link>

        <Link href="/biblioteca-steam" className="bg-[#111827] rounded-xl p-6 border border-white/10 hover:border-blue-400 transition block">
          <div className="text-4xl mb-4">🎮</div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3">Biblioteca Steam</h2>
          <p className="text-gray-300">Mi actividad, horas jugadas y estadísticas de Steam.</p>
        </Link>

        <Link href="/actualmente-jugando" className="bg-[#111827] rounded-xl p-6 border border-white/10 hover:border-purple-400 transition block">
          <div className="text-4xl mb-4">🕹️</div>
          <h2 className="text-2xl font-bold text-purple-400 mb-3">Actualmente Jugando</h2>
          <p className="text-gray-300">Los juegos que están ocupando mi tiempo actualmente.</p>
        </Link>
      </section>

      <section className="max-w-6xl mx-auto mt-12">
        <div className="bg-[#111827] rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold mb-4">🎯 Próxima Misión</h2>
          <p className="text-gray-300">
            Integrar Steam, agregar portadas de juegos y construir un dashboard con estadísticas reales de juego.
          </p>
        </div>
      </section>
    </main>
  );
}
