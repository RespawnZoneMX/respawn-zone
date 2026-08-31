const juegos = [
  {
    nombre: "World of Warcraft",
    genero: "MMORPG",
    plataforma: "PC",
    horas: "10000+",
    comentario:
      "El juego que más tiempo me ha acompañado y una referencia absoluta del género.",
  },
  {
    nombre: "Valorant",
    genero: "FPS Competitivo",
    plataforma: "PC",
    horas: "5000+",
    comentario:
      "Precisión, reflejos y estrategia en cada partida.",
  },
  {
    nombre: "Chrono Trigger",
    genero: "RPG",
    plataforma: "SNES / PC",
    horas: "100+",
    comentario:
      "Una obra maestra de los RPG clásicos.",
  },
  {
    nombre: "Counter-Strike",
    genero: "FPS",
    plataforma: "PC",
    horas: "2000+",
    comentario:
      "Uno de los shooters más importantes de la historia.",
  },
  {
    nombre: "Saga Mario",
    genero: "Plataformas",
    plataforma: "Nintendo",
    horas: "1000+",
    comentario:
      "Diversión pura desde la infancia.",
  },
  {
    nombre: "Saga Resident Evil",
    genero: "Survival Horror",
    plataforma: "PlayStation / PC",
    horas: "500+",
    comentario:
      "Terror, acción y grandes recuerdos.",
  },
  {
    nombre: "The King of Fighters",
    genero: "Peleas",
    plataforma: "Arcade / PlayStation",
    horas: "800+",
    comentario:
      "Batallas épicas y muchas retas.",
  },
  {
    nombre: "Marvel vs Capcom",
    genero: "Peleas",
    plataforma: "Arcade / PlayStation",
    horas: "600+",
    comentario:
      "Uno de los mejores crossovers de la historia.",
  },
  {
    nombre: "Albion Online",
    genero: "MMORPG Sandbox",
    plataforma: "PC",
    horas: "1000+",
    comentario:
      "Libertad total y economía controlada por jugadores.",
  },
  {
    nombre: "Overwatch",
    genero: "Hero Shooter",
    plataforma: "PC",
    horas: "5000+",
    comentario:
      "Partidas frenéticas y personajes memorables.",
  },
];

export default function Biblioteca() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-3">
        Legado Gamer
      </h1>

      <p className="text-gray-400 mb-8">
        Estos no son necesariamente los mejores juegos del mundo.
        Son los títulos que definieron mi historia como jugador,
        me acompañaron durante miles de horas y dejaron recuerdos
        que siguen vivos hasta hoy.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {juegos.map((juego) => (
          <div
            key={juego.nombre}
            className="bg-[#111827] rounded-xl overflow-hidden border border-white/10 hover:border-[#22C55E] hover:shadow-lg hover:shadow-[#22C55E]/20 transition"
          >
            <div className="h-40 bg-[#1F2937] flex items-center justify-center text-gray-500">
              Portada próximamente
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold text-[#22C55E] mb-2">
                {juego.nombre}
              </h2>

              <div className="text-yellow-400 text-lg mb-3">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-sm text-gray-400 mb-2">
                🎮 {juego.genero}
              </p>

              <p className="text-sm text-gray-400 mb-2">
                🖥️ {juego.plataforma}
              </p>

              <p className="text-sm text-gray-400 mb-4">
                ⏱️ {juego.horas} horas
              </p>

              <p className="text-gray-300">
                {juego.comentario}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}