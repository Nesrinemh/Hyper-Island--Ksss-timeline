import './App.css';
import BackBar from './components/header/BackBar';
import HeaderSection from './components/header/HeaderSection';
import Navbar from './components/header/Navbar';
import EventCard from './components/main/EventCard';
import Footer from './container/Footer';
import Main from './container/Main';

function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <BackBar />
      <EventCard />
      <Footer />
    </>
  );
}

export default App;
