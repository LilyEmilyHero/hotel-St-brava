import { Room } from '../Room';
import './style.css';

export const Rooms = () => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Heading</h2>
        <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
<<<<<<< HEAD
        <div class="cards-row">
          <Room />
=======
        <div className="cards-row">
          <div className="card">
            <img className="card__image" src="./pages/HomePage/img/image.svg" />
            <div className="card__title">Card 1</div>
            <div className="card__body">Sunt natus</div>
          </div>
>>>>>>> d88f3d9e1212c948cbd74617ae15f9aae8f69b5a

          <div className="card">
            <img className="card__image" src="./img/image1.svg" />
            <div className="card__title">Card 2</div>
            <div className="card__body">Laboriosam</div>
          </div>

          <div className="card">
            <img className="card__image" src="img/image1.svg" />
            <div className="card__title">Card 3</div>
            <div className="card__body">Eveniet officiis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
