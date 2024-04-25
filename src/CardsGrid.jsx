import React from 'react';
import { Link } from 'react-router-dom';
import items from './data';


function CardsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {items.map(item => (
        <div key={item.id}>
          <Link to={`/item/${item.id}`} key={item.id} className="block border border-gray-200 rounded hover:border-gray-400 transition">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t" />
          </Link>
          <div className="p-4">
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p>{item.description}</p>
              <p className="text-gray-600">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsGrid;
