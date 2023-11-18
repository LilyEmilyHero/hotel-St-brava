export const Room = ({ roomsTypes, onClick }) => {


  return (
    <div onClick={()=>{onClick(roomsTypes)}} className="card">
      <img className="card__image" src={roomsTypes.img} />
      <div className="card__title">{roomsTypes.name}</div>
      <div className="card__body">{roomsTypes.pricePerPersone} Kč na osobu</div>
    </div>
  );
};
