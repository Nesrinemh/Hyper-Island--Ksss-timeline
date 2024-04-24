import './App.css';
import Header from './container/Header';
import Footer from './container/Footer';
import MainPage from './pages/MainPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* // <div className="App">
    //   <Header />
    //   <MainContent />
    //   <Footer />
    // </div> */
}
