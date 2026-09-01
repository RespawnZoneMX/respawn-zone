export default function SetupGamer() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-3">Setup Gamer</h1>

      <p className="text-gray-400 mb-8 max-w-3xl">
        Mi centro de mando gamer. Aquí muestro las plataformas, periféricos,
        hardware y futuras mejoras de mi espacio de juego.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-[#111827] rounded-xl p-6 border border-[#22C55E]/20">
          <h2 className="text-2xl font-bold text-[#22C55E] mb-4">🖥 PC Gaming</h2>
          <p className="text-gray-300">Especificaciones pendientes de actualizar.</p>
        </div>

        <div className="bg-[#111827] rounded-xl p-6 border border-blue-500/20">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🎮 PlayStation</h2>
          <p className="text-gray-300">Hogar de la saga Uncharted y grandes aventuras.</p>
        </div>

        <div className="bg-[#111827] rounded-xl p-6 border border-red-500/20">
          <h2 className="text-2xl font-bold text-red-400 mb-4">🍄 Nintendo</h2>
          <p className="text-gray-300">La plataforma donde Mario ocupa un lugar especial.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="bg-[#111827] rounded-xl p-6 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">⌨ Periféricos</h2>
          <ul className="space-y-2 text-gray-300">
            <li>⌨ Teclado: Pendiente</li>
            <li>🖱 Mouse: Pendiente</li>
            <li>🎧 Audífonos: Pendiente</li>
            <li>🖥 Monitor: Pendiente</li>
          </ul>
        </div>

        <div className="bg-[#111827] rounded-xl p-6 border border-yellow-500/20">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🚀 Próximo Upgrade</h2>
          <p className="text-gray-300">Por definir.</p>
        </div>
      </div>

      <div className="mt-6 bg-[#111827] rounded-xl p-6 border border-cyan-500/20">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">⭐ Juegos Favoritos por Plataforma</h2>

        <div className="grid md:grid-cols-3 gap-4 text-gray-300">
          <div>
            <h3 className="font-bold text-white mb-2">PC</h3>
            <p>World of Warcraft</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-2">PlayStation</h3>
            <p>Uncharted</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-2">Nintendo</h3>
            <p>Mario</p>
          </div>
        </div>
      </div>
    </main>
  );
}
