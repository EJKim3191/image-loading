import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssLazyLoading from './pages/CssLazyLoading';
import ObserverAPILoading from './pages/ObserverAPILoading';
import Main from './pages/Main';
import Normal from './pages/Normal'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/normal" element={<Normal />} />
          <Route path="/lazy" element={<CssLazyLoading />} />
          <Route path="/ObserverAPILoading" element={<ObserverAPILoading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
