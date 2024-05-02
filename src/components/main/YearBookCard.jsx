import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import books from '../../assets/books.png';

/**
 * `YearBookCard` is a functional component that renders a card for the KSSS Books section.
 * The card includes a title, a subtitle, and an image.
 * The component uses the AOS library to animate the card when it's scrolled into view.
 *
 * (This functionnality doesn't work rigth now (24/5/2)).
 *
 * // The component can be used like this:
 * <YearBookCard />
 *
 * @returns {React.Element} The rendered React element.
 */

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
