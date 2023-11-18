import { useState } from 'react';
import dayjs from 'dayjs';

export const OrderForm = ({ selectRoom }) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [person, setPerson] = useState(0);
  const [child, setChild] = useState(false);
  const [pet, setPet] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [food, setFood] = useState(0);

  const night =
    (dateTo || dateFrom) === null
      ? 0
      : dayjs(dateTo).diff(dayjs(dateFrom), 'day');

  const roomPrice = selectRoom.pricePerPersone * night * person;
  const foodPrice = food * night * person;
  const childPrice = (child ? 1 : 0) * selectRoom.pricePerPersone * 0.5;
  const petPrice = (pet ? 1 : 0) * selectRoom.pricePerPersone * 0.25;
  const totalPriceControl = roomPrice + foodPrice + childPrice + petPrice;
  const totalPrice = totalPriceControl > 0 ? totalPriceControl : 0;

  console.log(night);
  console.log(food);

  const handleClick = (e) => {
    if (e.target.value === 'Snídaně') {
      setFood(150);
    } else if (e.target.value === 'Polopenze') {
      setFood(300);
    } else if (e.target.value === 'Plná penze') {
      setFood(500);
    } else {
      setFood(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <div className="form-fields">
        <label htmlFor="dateFrom" className="field-label">
          Od:
        </label>
        <input
          id="dateFrom"
          className="field-input"
          type="date"
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <label htmlFor="dateTo" className="field-label">
          Do:
        </label>
        <input
          id="dateTo"
          className="field-input"
          type="date"
          onChange={(e) => setDateTo(e.target.value)}
        />
        <label htmlFor="howManyPersons" className="field-label">
          Počet osob:
        </label>
        <input
          id="person"
          className="field-input"
          type="text"
          onChange={(e) => {
            setPerson(e.target.value);
          }}
        />
        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select id="select" className="field-input" onChange={handleClick}>
          <option>vyberte</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          id="check1"
          className="field-input"
          type="checkbox"
          onClick={(e) => setPet(e.target.checked)}
        />
        <label htmlFor="check1" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          id="check1"
          className="field-input"
          type="checkbox"
          onClick={(e) => setChild(e.target.checked)}
        />
        <label htmlFor="check1" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          id="check1"
          className="field-input"
          type="checkbox"
          onClick={(e) => setInvalid(e.target.checked)}
        />
        <label htmlFor="howManyPersons" className="field-label">
          Email:
        </label>
        <input id="dateTo" className="field-input" type="email" />
        <label htmlFor="howManyPersons" className="field-label">
          Telefon:
        </label>
        <input id="dateTo" className="field-input" type="tel" />
      </div>
      <p>Celková cena za pobyt: {totalPrice} Kč</p>
      <button className="wide" onClick={handleSubmit}>
        Odeslat poptávku
      </button>
    </form>
  );
};
