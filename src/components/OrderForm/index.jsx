import { useState } from 'react';

export const OrderForm = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [roomsPrice, setRoomPrice] = useState(0);
  const [night, setNight] = useState(0);
  const [person, setPerson] = useState(0);
  const [child, setChild] = useState(0);
  const [pet, setPet] = useState(0);
  const [food, setFood] = useState(0);



console.log(person)

  return (
    <form>
      <div className="form-fields">
        <label htmlFor="dateFrom" className="field-label">
          Od:
        </label>
        <input id="dateFrom" className="field-input" type="date" />
        <label htmlFor="dateTo" className="field-label">
          Do:
        </label>
        <input id="dateTo" className="field-input" type="date"/>
        <label htmlFor="howManyPersons" className="field-label" >
          Počet osob:
        </label>
        <input id="person" className="field-input" type="text"  onChange={(e)=>{setPerson(e.target.value)}}/>
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
        <input id="check1" className="field-input" type="checkbox" />
        <label htmlFor="check1" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
        <label htmlFor="check1" className="field-label">
          Bezbariérový přístup:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
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
