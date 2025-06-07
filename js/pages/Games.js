function Games({ addToCart }) {
  const [games, setGames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${window.baseUrl}/js/data/juegos.json`)
      .then(response => response.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading games:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">JUEGOS</h2>
        <p className="text-gray-600 dark:text-gray-300">Cargando juegos...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">JUEGOS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map(game => (
          <ProductCard 
            key={`game-${game.id}`} 
            product={game} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}