export default function ActualmenteJugando() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-3">
        Actualmente Jugando
      </h1>

      <p className="text-gray-400 mb-8 max-w-3xl">
        Los juegos en los que estoy invirtiendo tiempo actualmente.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="bg-[#111827] rounded-xl p-6 border border-blue-500/20">
          <h2 className="text-xl font-bold text-blue-400 mb-3">
            🎮 Juego Principal
          </h2>

          <p className="text-gray-300">
            Por actualizar
          </p>
        </div>

        <div className="bg-[#111827] rounded-xl p-6 border border-purple-500/20">
          <h2 className="text-xl font-bold text-purple-400 mb-3">
            🎯 Próximo Objetivo
          </h2>

          <p className="text-gray-300">
            Por actualizar
          </p>
        </div>

      </div>

      <div className="mt-6 bg-[#111827] rounded-xl p-6 border border-[#22C55E]/20">
        <h2 className="text-xl font-bold text-[#22C55E] mb-3">
          Notas Gamer
        </h2>

        <p className="text-gray-300">
          Este espacio servirá para registrar avances, objetivos,
          experiencias y recomendaciones de los juegos que esté jugando.
        </p>
      </div>
    </main>
  );
}