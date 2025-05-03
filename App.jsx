import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['aqua', 'dimgrey', 'firebrick', 'indigo']; // Changed lightred to lightcoral as 'lightred' isn't a standard CSS color name

  useEffect(() => {
    const currentColor = colors[colorIndex];
    document.documentElement.style.setProperty('--bg-color', currentColor);
  }, [colorIndex, colors]); 

  const handleClick = () => {
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
  };

  return (
    <>
      <h1>
        <button onClick={handleClick}>
          {}
          Change Color Button
        </button>
      </h1>
    </>
  );
}

export default App;