import Navbar from '../components/header/Navbar';
import SearchBar from '../components/header/SearchBar';
import YearNavigation from '../components/header/YearNavigation';
import YearBookCard from '../components/main/YearBookCard';

const YearBookPage = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <YearNavigation />
      <YearBookCard />
    </div>
  );
};

export default YearBookPage;
