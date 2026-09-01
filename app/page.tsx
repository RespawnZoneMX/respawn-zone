import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
          <span className="text-[#22C55E]">RESPAWN</span> ZONE
        </h1>

        <p className="text-2xl text-gray-300 mb-4">
          Donde cada partida cuenta y se siente real.
        </p>
      </section>

      <section className="max-w-6xl mx-auto mb-12">
        <div className="bg-[#111827] rounded-2xl border border-[#22C55E]/20 p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="flex-shrink-0">
              <Image
                src="/avatar-marduk.png"
                alt="Avatar de Marduk"
                width={300}
                height={300}
                className="rounded-2xl border-2 border-[#22C55E]"
              />
            </div>

            <div>
              <p className="text-[#22C55E] text-sm uppercase tracking-widest mb-2">
                Perfil Gamer
              </p>

              <h2 className="text-4xl font-bold mb-2">
                El Rafeta
              </h2>

              <p className="text-xl text-gray-400 mb-4">
                Marduk
              </p>

              <div className="space-y-2 text-gray-300">
                <p>⚔ Clase: MMORPG Explorer</p>
                <p>🎯 Nivel: Veterano Gamer</p>
                <p>🕹 Primera Consola: Sega Genesis</p>
                <p>⭐ Juego que inició todo: Chip 'n Dale Rescue Rangers</p>
                <p>⚔ Saga Favorita: Uncharted</p>
                <p>🎮 Género Favorito: MMORPG</p>
                <p>🖥 Plataformas: PC, PlayStation y Nintendo</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/legado-gamer" className="bg-[#111827] rounded-xl p-6 border border-white/10 hover:border-[#22C55E] transition block">
          <h2 className="text-xl font-bold text-[#22C55E]">⭐ Legado Gamer</h2>
        </Link>

        <Link href="/hall-of-fame" className="bg-[#111827] rounded-xl p-6 border border-white/10 hover:border-yellow-400 transition block">
          <h2 className="text-xl font-bold text-yellow-400">🏆 Hall of Fame</h2>
        </Link>

        <Link href="/biblioteca-steam" className="bg-[#111827] rounded-xl p-6 border border-white/10 hover:border-blue-400 transition block">
          <h2 className="text-xl font-bold text-blue-400">🎮 Biblioteca Steam</h2>
        </Link>

        <Link href="/actualmente-jugando" className="bg-[#111827] rounded-xl p-6 border border-white/10 hover:border-purple-400 transition block">
          <h2 className="text-xl font-bold text-purple-400">🕹 Actualmente Jugando</h2>
        </Link>
      </section>
    </main>
  );
}
