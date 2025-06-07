function Accessories({ addToCart }) {
  const [accessories, setAccessories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
   fetch('/js/data/accesorios.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">ACCESORIOS</h2>
        <p className="text-gray-600 dark:text-gray-300">Cargando accesorios...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">ACCESORIOS</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {accessories.map(accessory => (
          <ProductCard 
            key={`accessory-${accessory.id}`} 
            product={accessory} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}
