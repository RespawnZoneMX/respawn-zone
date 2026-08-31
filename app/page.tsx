export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white flex flex-col justify-center items-center px-6">

      <div className="text-center max-w-4xl">

        <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
          <span className="text-[#22C55E]">RESPAWN</span> ZONE
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10">
          Donde cada partida cuenta y se siente real.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-[#111827] rounded-xl p-6 border border-[#22C55E]/30">
            <h2 className="text-xl font-bold text-[#22C55E] mb-3">
              🎮 Actualmente Jugando
            </h2>
            <p className="text-gray-300">
              Próximamente podrás mostrar aquí tus juegos activos.
            </p>
          </div>

          <div className="bg-[#111827] rounded-xl p-6 border border-blue-500/30">
            <h2 className="text-xl font-bold text-blue-400 mb-3">
              🏆 Hall of Fame
            </h2>
            <p className="text-gray-300">
              Tus mejores logros y juegos favoritos.
            </p>
          </div>

          <div className="bg-[#111827] rounded-xl p-6 border border-purple-500/30">
            <h2 className="text-xl font-bold text-purple-400 mb-3">
              📅 Próximos Lanzamientos
            </h2>
            <p className="text-gray-300">
              Los juegos más esperados aparecerán aquí.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}