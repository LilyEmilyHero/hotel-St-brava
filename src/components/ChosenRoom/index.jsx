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
                Select:
              </label>
              <select id="select" className="field-input">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Checkbox 1:
              </label>
              <input id="check1" className="field-input" type="checkbox" />
            </div>
            <button className="wide">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
