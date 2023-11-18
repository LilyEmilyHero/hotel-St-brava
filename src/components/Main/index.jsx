import { Order } from '../Order';
import { Rooms } from '../Rooms';
import { useState, useEffect } from 'react';

export const Main = () => {
  const [rooms, setRooms] = useState(null);
  const [selectRoom, setSelectRoom] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRooms(data.result);
    };

    fetchRooms();
  }, []);

  return (
    <>
      <Rooms
        onClick={(room) => {
          setSelectRoom(room);
        }}
        rooms={rooms}
      />

      {selectRoom === null ? (
        <section className="light">
          <div className="container">Vyberte si pokoj</div>
        </section>
      ) : (
        <Order selectRoom={selectRoom} />
      )}
    </>
  );
};

