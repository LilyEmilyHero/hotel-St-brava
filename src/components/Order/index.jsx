import './style.css';
import { OrderForm } from '../OrderForm';
import { useState } from 'react';

export const Order = ({ selectRoom }) => {
  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {selectRoom.name}, {selectRoom.pricePerPersone} Kč na osobu za
          noc
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={selectRoom.img} />
            <p>{selectRoom.description}</p>
          </div>
          <OrderForm selectRoom={selectRoom} />
        </div>
      </div>
    </section>
  );
};
