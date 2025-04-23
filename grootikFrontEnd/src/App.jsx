import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setImageUrl('');

    try {
      const response = await fetch('https://api.example.com/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
    <div className="container">
      <button
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: '10px 20px',
          backgroundColor: isDarkMode ? '#fff' : '#121212',
          color: isDarkMode ? '#121212' : '#fff',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer'
        }}
        onClick={() => setIsDarkMode(prev => !prev)}
      >
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <h1> GenAI Text to Image</h1>

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
