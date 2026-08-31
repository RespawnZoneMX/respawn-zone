export default function SobreMi() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Sobre Mí
      </h1>

      <div className="bg-[#111827] rounded-xl p-8">

        <h2 className="text-2xl font-bold text-[#22C55E] mb-4">
          El Rafeta
        </h2>

        <p className="text-gray-300 mb-6">
          Gamer desde la época de Sega Genesis, apasionado por los MMORPG,
          los juegos competitivos y las grandes aventuras.
        </p>

        <div className="space-y-3">

          <p>
            <strong>Nickname:</strong> Marduk
          </p>

          <p>
            <strong>Primera consola:</strong> Sega Genesis
          </p>

          <p>
            <strong>Juego que me hizo amar los videojuegos:</strong>
            {" "}Chip 'n Dale Rescue Rangers
          </p>

          <p>
            <strong>Saga favorita:</strong> Uncharted
          </p>

          <p>
            <strong>Plataformas:</strong> PC, PlayStation y Nintendo
          </p>

          <p>
            <strong>Género favorito:</strong> MMORPG
          </p>

        </div>

      </div>

      <div className="mt-8 bg-[#111827] rounded-xl p-8">

        <h2 className="text-2xl font-bold text-[#22C55E] mb-4">
          Mi Top 10
        </h2>

        <ol className="space-y-2 text-gray-300">

          <li>1. World of Warcraft</li>
          <li>2. Valorant</li>
          <li>3. Chrono Trigger</li>
          <li>4. Counter-Strike</li>
          <li>5. Saga Mario</li>
          <li>6. Saga Resident Evil</li>
          <li>7. The King of Fighters</li>
          <li>8. Marvel vs Capcom</li>
          <li>9. Albion Online</li>
          <li>10. Overwatch</li>

        </ol>

      </div>

    </main>
  );
}