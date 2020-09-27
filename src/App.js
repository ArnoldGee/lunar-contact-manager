import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar.component'
import LandingPage from './pages/landing-page/landing-page.component'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
