export const Room = ({ roomsTypes }) => {
  return (
    <div className="card">
      <img className="card__image" src="./pages/HomePage/img/image.svg" />
      <div className="card__title">{roomsTypes.name}</div>
      <div className="card__body">{roomsTypes.pricePerPersone} Kč na osobu</div>
    </div>
  );
};
