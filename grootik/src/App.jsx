import { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [darkMode, setDarkMode] = useState(false); // 🔘 NEW

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setImageUrl('');

    try {
      // Replace with real API
      const response = await fetch('https://api.example.com/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      {/* 🌗 Toggle Button */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <h1>🎨 GenAI Text to Image</h1>

      <input
        type="text"
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={handleGenerate} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate'}
      </button>

      {isLoading && <div className="loader"></div>}

      {imageUrl && (
        <div className="image-container">
          <img src={imageUrl} alt="Generated" />
        </div>
      )}
    </div>
  );
}

export default App;
