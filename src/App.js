// App.js
import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Loading from './components/Loading';


const App = () => {
  const [loading, setLoading] = useState(true);
  document.title = "TeeCee";

  useEffect(() => {
    // Simulate a delay to represent loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timer on component unmount or when data is loaded
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <Loading />} {/* Display Loading component when loading is true */}

      {/* Content is only displayed when loading is false */}
      {!loading && (
        <>
           <Menu />
        </>
      )}
    </div>
  );
};

export default App;