// parent component
import React, { useState, useEffect } from 'react';
// import Introduction from './components/introduction';
// import Profile from './components/profile';

function App() {
  // kiri -> getter
  // kanan -> setter
  const [temanSaya, setTemanSaya] = useState(1);
  const [namaTeman, setNamaTeman] = useState('');

  useEffect(() => {
    if (temanSaya > 1) {
      setNamaTeman('Aziz');
    } else {
      setNamaTeman('Albab');
    }
  }, [temanSaya]);

  return (
    <>
      <h5>nama teman: {namaTeman}</h5>
      <h1>saya memiliki: {temanSaya} teman</h1>
      <button onClick={() => setTemanSaya((prev) => prev + 1)}>tambah teman</button>
      <button onClick={() => setTemanSaya((prev) => prev - 1)}>kurangi teman</button>
      {/* <Profile /> */}
      {/* <Introduction name="uwan maharaya" />
      <Introduction name="albab ghozari" /> */}
    </>
  );
}

export default App;
