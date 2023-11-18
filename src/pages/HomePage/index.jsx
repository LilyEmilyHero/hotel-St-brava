import { ChosenRoom } from '../../components/ChosenRoom';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { Rooms } from '../../components/Rooms';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Rooms />
      <ChosenRoom />
      <Footer />
    </>
  );
};
