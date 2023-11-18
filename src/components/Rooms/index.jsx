import { Room } from '../Room';
import { useState, useEffect } from 'react';
import './style.css';
/*
const roomsTypes = [
  {
    id: 0,
    name: 'Úkryt',
    pricePerPersone: 450,
    unit: 'kč/os',
    description:
      'Strohý avšak pohodlný pokoj ideální pro hosty, kteří chtějí maximálně ušetřit a hledají cenově dostupné ubytování bez ztráty základního komfortu. Vhodné pro všechny, kdo chtějí v našem hotelu rychle přečkat nepřízeň počasí a vydat se rychle zase na cestu ať už pěší nebo po řece.',
  },
  {
    id: 1,
    name: 'Základ',
    pricePerPersone: 700,
    unit: 'kč/os',
    description:
      'Jednoduchost a pohodlí za rozumnou cenu. S vkusným designem a mírně retro vybavením poskytuje tento pokoj klidné místo na odpočinek. Z okna vidíte do naší hotelové zahrady a můžete si tak užit klíd hřejivé prostředí našeho rodinného hotelu.',
  },
  {
    id: 2,
    name: 'Klasik',
    pricePerPersone: 1200,
    unit: 'kč/os',
    description:
      'Moderní elegance s výhledem na řeku. Náš pokoj Klasik je ideální pro ty, kteří si přejí stylové ubytování. Všechny pokoje mají novou parketovou podlahu a velké okno s výhledem na malebnou řeku a kammenný most.',
  },
  {
    id: 3,
    name: 'Komfort',
    pricePerPersone: 2500,
    unit: 'kč/os',
    description:
      'Pro hosty, kteří si chtějí dopřát vyšší úroveň ubytování, je tu pokoj Komfort. S moderním nábytkem a útulným designem nabízí relaxační atmosféru na břehu řeky. Všechny pokoje mají příjemný koberec a velká okna, skrze které můžete pozorovat romantické západy slunce nad řekou.',
  },
  {
    id: 4,
    name: 'Luxus',
    pricePerPersone: 8000,
    unit: 'kč/os',
    description:
      'Pro nejnáročnější hosty máme připravený prostorný pokoj s exkluzivním vybavením v prvorepublikovém stylu. Tento pokoj má nejlepší výhled na řeku Stříbravu i na okolní krajinu. Tento pokoj skvělou volbou pro ty, kteří hledají vrcholný komfort a luxusní zážitek během svého pobytu v našem zrekonstruovaném hotelu.',
  },
];
*/
export const Rooms = () => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4001/api/rooms');
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

        <div class="cards-row">
          {rooms.map((roomType) => (
            <Room roomsTypes={roomType} key={roomType.id} />
          ))}

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
