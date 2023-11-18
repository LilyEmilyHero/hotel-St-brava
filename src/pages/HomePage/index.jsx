import { Order } from '../../components/Order';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { Rooms } from '../../components/Rooms';
import './style.css';
import { Main } from '../../components/Main';

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Main />
      <Footer />
    </>
  );
};
