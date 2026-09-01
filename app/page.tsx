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
            <Image
              src="/avatar-marduk.png"
              alt="Avatar de Marduk"
              width={300}
              height={300}
              className="rounded-2xl border-2 border-[#22C55E]"
            />

            <div>
              <p className="text-[#22C55E] text-sm uppercase tracking-widest mb-2">
                Perfil Gamer
              </p>
              <h2 className="text-4xl font-bold mb-2">El Rafeta</h2>
              <p className="text-xl text-gray-400 mb-4">Marduk</p>
              <div className="space-y-2 text-gray-300">
                <p>⚔ Clase: MMORPG Explorer</p>
                <p>🎯 Nivel: Veterano Gamer</p>
                <p>🕹 Primera Consola: Sega Genesis</p>
                <p>⭐ Juego que inició todo: Chip 'n Dale Rescue Rangers</p>
                <p>⚔ Saga Favorita: Uncharted</p>
                <p>🎮 Género Favorito: MMORPG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-12">
        <div className="bg-[#111827] rounded-2xl border border-yellow-500/20 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-yellow-400 uppercase tracking-widest text-sm">Sistema RPG</p>
              <h2 className="text-4xl font-bold">Marduk</h2>
              <p className="text-gray-400">Guardian del Respawn</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">Nivel</p>
              <p className="text-5xl font-bold text-[#22C55E]">99</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#22C55E]">Perfil de Clase</h3>
              <div className="space-y-2 text-gray-300">
                <p>⚔ Clase: MMORPG Explorer</p>
                <p>🏅 Rango: Veterano Gamer</p>
                <p>🎮 Especialidad Principal: MMORPG</p>
                <p>🎯 Especialidad Secundaria: FPS Competitivo</p>
                <p>🌍 Exploración: Nivel Máximo</p>
                <p>⏳ Experiencia: 26000+ horas</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-[#22C55E]">Especialidades</h3>
              <div className="space-y-2 text-gray-300">
                <p>MMORPG ★★★★★</p>
                <p>FPS ★★★★★</p>
                <p>RPG ★★★★☆</p>
                <p>Fighting Games ★★★★☆</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-12">
        <div className="bg-[#111827] rounded-2xl border border-yellow-500/20 p-8">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">🏆 Logros Desbloqueados</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/20 rounded-xl p-4"><h3 className="font-bold">Señor de Azeroth</h3><p className="text-gray-400">10000+ horas en World of Warcraft.</p></div>
            <div className="bg-black/20 rounded-xl p-4"><h3 className="font-bold">Veterano Competitivo</h3><p className="text-gray-400">5000+ horas en Valorant.</p></div>
            <div className="bg-black/20 rounded-xl p-4"><h3 className="font-bold">Maestro Hero Shooter</h3><p className="text-gray-400">5000+ horas en Overwatch.</p></div>
            <div className="bg-black/20 rounded-xl p-4"><h3 className="font-bold">Leyenda de Respawn Zone</h3><p className="text-gray-400">Fundador de Respawn Zone.</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/legado-gamer" className="bg-[#111827] rounded-xl p-6 border border-white/10">⭐ Legado Gamer</Link>
        <Link href="/hall-of-fame" className="bg-[#111827] rounded-xl p-6 border border-white/10">🏆 Hall of Fame</Link>
        <Link href="/biblioteca-steam" className="bg-[#111827] rounded-xl p-6 border border-white/10">🎮 Biblioteca Steam</Link>
        <Link href="/actualmente-jugando" className="bg-[#111827] rounded-xl p-6 border border-white/10">🕹 Actualmente Jugando</Link>
      </section>
    </main>
  );
}
