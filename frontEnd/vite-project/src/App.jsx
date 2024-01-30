
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((response) => response.text())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);



  return (
    <div>
      <h1>testing</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
