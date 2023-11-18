import './style.css';

export const Footer = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <p className='footer_adress'>Hotel Stříbrava</p>
          <p className='footer_adress'>Ke Kamenné lávce 12</p>
          <p className='footer_adress'>317 24  Libnice nad Stříbravou</p>
          <a className='footer_email' href="mailto:recepce@hotelstribrava.cz">recepce@hotelstribrava.cz</a>
        </div>
        <img src="./img/mapa.png" alt="mapa"/>
      </div>
    </section>
  );
};
