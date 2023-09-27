import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Chat from './Chat';
import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSearch = async (query) => {
    setLoading(true);
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
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
      <SearchBar onSearch={handleSearch} />
      {loading ? <Loading /> : <Chat messages={messages} />}
    </div>
  );
}

export default App;
