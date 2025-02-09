import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make API call to your backend hosted on Render
    fetch('https://project-5-jkjv.onrender.com')  // Use your Render backend URL
      .then(response => response.json())
      .then(data => setMessage(data.message))  // Store the message from the response
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message ? message : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;
