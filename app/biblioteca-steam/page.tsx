export default function BibliotecaSteam() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-3">
        Biblioteca Steam
      </h1>

      <p className="text-gray-400 mb-8 max-w-3xl">
        Esta sección estará conectada con mi cuenta de Steam para mostrar
        mi actividad real como jugador.
      </p>

      <div className="bg-[#111827] rounded-xl p-8 border border-[#22C55E]/20">
        <h2 className="text-2xl font-bold text-[#22C55E] mb-4">
          Próximamente
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>🎮 Juegos recientes</li>
          <li>⏱ Horas jugadas</li>
          <li>🏆 Logros desbloqueados</li>
          <li>📈 Estadísticas personales</li>
          <li>⭐ Juegos favoritos de Steam</li>
          <li>🔥 Actividad reciente</li>
        </ul>
      </div>
    </main>
  );
}