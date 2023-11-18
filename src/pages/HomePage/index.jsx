import { Header } from '../../components/Header';
import { Rooms } from '../../components/Rooms';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Rooms />
      <section class="light">
        <div class="container">
          <h2>Heading</h2>
          <div class="columns-2">
            <div class="column">
              <img src="img/image1.svg" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                accusantium, dolor quisquam doloremque quod nobis temporibus
                ducimus sapiente consectetur distinctio assumenda, nisi suscipit
                saepe. Vero.
              </p>
            </div>
            <form>
              <div class="form-fields">
                <label htmlFor="field1" class="field-label">
                  Field 1:
                </label>
                <input id="field1" class="field-input" type="text" />

                <label htmlFor="field2" class="field-label">
                  Field 2:
                </label>
                <input id="field2" class="field-input" type="text" />

                <label htmlFor="select" class="field-label">
                  Select:
                </label>
                <select id="select" class="field-input">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>

                <label htmlFor="check1" class="field-label">
                  Checkbox 1:
                </label>
                <input id="check1" class="field-input" type="checkbox" />
              </div>
              <button class="wide">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section class="dark">
        <div class="container columns-2">
          <div class="columns">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              mollitia ut pariatur eos error sunt blanditiis repellat similique
              aperiam temporibus.
            </p>
          </div>
          <img src="img/image1.svg" />
        </div>
      </section>
    </>
  );
};