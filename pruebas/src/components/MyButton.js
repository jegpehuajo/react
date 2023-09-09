import { useState } from 'react';

export default function MyButton() {
  const [count, setCount] = useState(0);
  function handleClic() {
    setCount(count + 1);
  }
  return (
    <button className="btn" onClick={handleClic}>
      Hiciste clic en {count} veces
    </button>
  )
}