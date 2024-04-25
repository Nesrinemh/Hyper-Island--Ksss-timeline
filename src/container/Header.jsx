import Navbar from '../components/header/Navbar';
import Hero from '../components/header/Hero';
import SearchBar from '../components/header/SearchBar';
import YearNavigation from '../components/header/YearNavigation';

function Header() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <YearNavigation />
    </>
  );
}

export default Header;
