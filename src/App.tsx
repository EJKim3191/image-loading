import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Normal from './pages/Normal'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/normal" element={<Normal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
