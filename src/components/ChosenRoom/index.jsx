import './style.css';

export const ChosenRoom = () => {
  return (
    <section className="light">
      <div className="container">
        <h2>Pokoj typ</h2>
        <div className="columns-2">
          <div className="column">
            <img src="img/image1.svg" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              accusantium, dolor quisquam doloremque quod nobis temporibus
              ducimus sapiente consectetur distinctio assumenda, nisi suscipit
              saepe. Vero.
            </p>
          </div>
          <form>
            <div className="form-fields">
              <label htmlFor="dateFrom" className="field-label">
                Od:
              </label>
              <input id="dateFrom" className="field-input" type="date" />
              <label htmlFor="dateTo" className="field-label">
                Do:
              </label>
              <input id="howManyPersons" className="field-input" type="date" />
              <label htmlFor="howManyPersons" className="field-label">
                Počet osob:
              </label>
              <input id="dateTo" className="field-input" type="text" />
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
            <p>Celková cena za pobyt: Kč</p>
            <button className="wide">Odeslat poptávku</button>
          </form>
        </div>
      </div>
    </section>
  );
};
