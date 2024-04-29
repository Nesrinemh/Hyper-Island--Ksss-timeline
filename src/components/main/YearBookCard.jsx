import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import books from '../../assets/books.png';

const YearBookCard = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <div>
      <article
        className="h-40 my-10 mx-8 bg-cover border-none rounded-xl "
        data-aos="fade-zoom-in"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
      >
        <h1>KSSS Books</h1>
        <h2>Under developing</h2>

        <img src={books} alt="book" className=" w-[20rem]" />
      </article>
    </div>
  );
};

export default YearBookCard;
