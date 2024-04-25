import './App.css';
import BackBar from './components/header/BackBar';
import HeaderSection from './components/header/HeaderSection';
import Navbar from './components/header/Navbar';
import EventCard from './components/main/EventCard';
import Footer from './container/Footer';
import Main from './container/Main';
import YearBookPage from './pages/YearBookPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
