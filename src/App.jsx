import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Chat from './Chat';
import Loading from './Loading';
import logo from './assets/litlogo.png';


function App() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSearch = async (query) => {
    setLoading(true);
    console.log(query)
    const response = await fetch('http://127.0.0.1:5000/api/chat', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: query }, { role: 'ai', content: data.message }]);
    setLoading(false);
  };

  return (
    <div className="App">
      <img src={logo }alt="litGPT" className='logo' />
      <SearchBar onSearch={handleSearch} />
      {loading ? <Loading /> : <Chat messages={messages} />}
    </div>
  );
}

export default App;
