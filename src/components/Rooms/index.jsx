import { Room } from '../Room';

import './style.css';

export const Rooms = ({rooms, onClick}) => {
  

  if (rooms === null) {
    return (
      <section className="dark">
        <div className="container">
          <h2>Naše pokoje</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>

        <div className="cards-row">
          {rooms.map((roomType) => (
            <Room onClick={onClick} roomsTypes={roomType} key={roomType.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
