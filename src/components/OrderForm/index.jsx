import { useState } from 'react';
import dayjs from 'dayjs';

export const OrderForm = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [roomsPrice, setRoomPrice] = useState(0);
  const [dateFrom, setDateFrom] = useState('2010-01-01');
  const [dateTo, setDateTo] = useState('2010-01-02');
  const [night, setNight] = useState(dateFrom.diff(dateTo, 'day'));
  const [person, setPerson] = useState(0);
  const [child, setChild] = useState(false);
  const [pet, setPet] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [food, setFood] = useState(0);

  console.log(dayjs(dateFrom));
  console.log(dayjs(dateTo));

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
        <select id="select" className="field-input">
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
      <p>Celková cena za pobyt: {person} Kč</p>
      <button className="wide">Odeslat poptávku</button>
    </form>
  );
};
