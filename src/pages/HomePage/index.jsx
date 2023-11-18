import { ChosenRoom } from '../../components/ChosenRoom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Rooms } from '../../components/Rooms';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Rooms />
      <ChosenRoom />
      <Footer />
    </>
  );
};
