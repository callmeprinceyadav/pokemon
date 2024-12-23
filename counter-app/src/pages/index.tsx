// pages/index.js
import { useState } from 'react';

export default function Home() {
  // Initialize the counter state to 0
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <div style={styles.counterBox}>
        <h2>{count}</h2>
        <button style={styles.button} onClick={increment}>Increment</button>
        <button style={styles.button} onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  counterBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};
