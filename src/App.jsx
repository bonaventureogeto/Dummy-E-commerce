import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsGrid from './CardsGrid';
import ItemDetails from './ItemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CardsGrid />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
