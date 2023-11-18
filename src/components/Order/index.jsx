import './style.css';
import { OrderForm } from '../OrderForm';

export const Order = () => {
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
          <OrderForm />
        </div>
      </div>
    </section>
  );
};