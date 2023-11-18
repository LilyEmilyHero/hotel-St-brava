import { Order } from '../../components/Order';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { Rooms } from '../../components/Rooms';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Rooms />
      <Order />
      <Footer />
    </>
  );
};
