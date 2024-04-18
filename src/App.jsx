import './App.css';
import Header from './container/Header';
import Main from './container/Main';
import YearBookPage from './pages/YearBookPage';
import Footer from "./container/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <YearBookPage />
      <Footer />
    </div>
  );

}
export default App;
