import './App.css';
import HeaderSection from './components/header/HeaderSection';
import Navbar from './components/header/Navbar';
import EventCard from './components/main/EventCard';
import Main from './container/Main';

function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <EventCard />
      <Main />
    </>
  );
}

export default App;
