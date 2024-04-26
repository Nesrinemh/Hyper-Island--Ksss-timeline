import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import YearBookPage from './pages/YearBookPage';
import Footer from './container/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/yearbook" element={<YearBookPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
