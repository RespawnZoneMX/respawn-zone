const logros = [
  {
    titulo: "🎮 Inicio de la Aventura",
    valor: "Chip 'n Dale Rescue Rangers",
    descripcion:
      "El juego que despertó mi pasión por los videojuegos.",
  },
  {
    titulo: "🕹 Primera Consola",
    valor: "Sega Genesis",
    descripcion:
      "Donde comenzó todo.",
  },
  {
    titulo: "⚔ Saga Favorita",
    valor: "Uncharted",
    descripcion:
      "Una de las experiencias más memorables que he vivido como gamer.",
  },
  {
    titulo: "🔥 Más Horas Jugadas",
    valor: "World of Warcraft",
    descripcion:
      "Más de 10,000 horas explorando Azeroth.",
  },
  {
    titulo: "🎯 Nickname Legendario",
    valor: "Marduk",
    descripcion:
      "Mi identidad gamer a lo largo de los años.",
  },
  {
    titulo: "👑 MMORPG Definitivo",
    valor: "World of Warcraft",
    descripcion:
      "El referente con el que comparo cualquier otro MMORPG.",
  },
];

export default function HallOfFame() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-3">
        Hall of Fame
      </h1>

      <p className="text-gray-400 mb-8 max-w-3xl">
        Los momentos, juegos y recuerdos que definieron mi trayectoria
        como gamer. Este es el salón donde viven las leyendas de
        Respawn Zone.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {logros.map((logro) => (
          <div
            key={logro.titulo}
            className="bg-[#111827] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-400 transition"
          >
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              {logro.titulo}
            </h2>

            <p className="text-lg font-semibold text-white mb-3">
              {logro.valor}
            </p>

            <p className="text-gray-400">
              {logro.descripcion}
            </p>
          </div>
        ))}

      </div>
    </main>
  );
}