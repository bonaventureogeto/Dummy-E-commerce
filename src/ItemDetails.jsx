import React from 'react';
import { useParams } from 'react-router-dom';
import items from './data';


function ItemDetails() {
  const { id } = useParams();
  const item = items.find(item => item.id.toString() === id);

  if (!item) return <div>Item not found!</div>;

  return (
    <div className="max-w-xl mx-auto mt-10">
        <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded" />
        <div className="mt-4">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p>{item.description}</p>
            <p className="text-gray-600">{item.price}</p>
        </div>
        <h2>Welcome Again!</h2>
    </div>
  );
}

export default ItemDetails;
