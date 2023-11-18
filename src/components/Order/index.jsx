import './style.css';
import { OrderForm } from '../OrderForm';
import { useState } from 'react';

export const Order = ({ selectRoom }) => {
  const [price, setPrice] = useState(0);
  return (
    <section className="light">
      <div className="container">
        <h2>
          {selectRoom.name}, {selectRoom.pricePerPersone} na osobu za noc
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={selectRoom.img} />
            <p>{selectRoom.description}</p>
          </div>
          <OrderForm price={price} />
        </div>
      </div>
    </section>
  );
};
