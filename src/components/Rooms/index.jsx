import { Room } from '../Room';
import { useState, useEffect } from 'react';
import './style.css';

export const Rooms = () => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRooms(data.result);
    };

    fetchRooms();
  }, []);

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
            <Room roomsTypes={roomType} key={roomType.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
