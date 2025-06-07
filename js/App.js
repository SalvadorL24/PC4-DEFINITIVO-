const { useState, useEffect } = React;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('inicio');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Cargar modo oscuro desde localStorage al iniciar
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'juegos': return <Games addToCart={addToCart} />;
      case 'funkos': return <Funkos addToCart={addToCart} />;
      case 'consolas': return <Consoles addToCart={addToCart} />;
      case 'accesorios': return <Accessories addToCart={addToCart} />;
      case 'contacto': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        setCurrentPage={setCurrentPage}
        cartItems={cartItems}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      
      <main className="flex-grow bg-white dark:bg-gray-800">
        {renderPage()}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
      
      {showCart && (
        <Cart 
          cartItems={cartItems} 
          setShowCart={setShowCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
