import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';

function App() {
  const [navbarValue, setNavbarValue] = useState('');

  const changeNavbarValue = () => {
    setNavbarValue('My Contact');
  };

  return (
    <div>
      <NavigationBar navValue={navbarValue} />
      <h1>INI HOMEPAGE</h1>
      <button onClick={changeNavbarValue}>Ubah Navigasi</button>
    </div>
  );
}

export default App;
