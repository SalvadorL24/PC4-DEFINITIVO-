function Consoles({ addToCart }) {
  const [consoles, setConsoles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(PC4-DEFINITIVO-/js/data/consolas.json`)
      .then(response => response.json())
      .then(data => {
        setConsoles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading consoles:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">CONSOLAS</h2>
        <p className="text-gray-600 dark:text-gray-300">Cargando consolas...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">CONSOLAS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {consoles.map(console => (
          <ProductCard 
            key={`console-${console.id}`} 
            product={console} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}
