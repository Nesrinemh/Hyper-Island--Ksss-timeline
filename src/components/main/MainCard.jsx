import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Button from './Button';

/**
 * `MainCard` is a functional component that renders a main card with event details.
 * The card includes the event year, title, summary, and a read more button.
 * The title and summary can be in English or Swedish, based on the language stored in local storage.
 * The card also includes an image of the event.
 * The component uses the AOS library to animate the card when it's scrolled into view.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.item - The event data to display in the card.
 * @param {string} props.item.year - The year of the event.
 * @param {string} props.item.titleSwedish - The Swedish title of the event.
 * @param {string} props.item.titleEnglish - The English title of the event.
 * @param {string} props.item.summarySwedish - The Swedish summary of the event.
 * @param {string} props.item.summaryEnglish - The English summary of the event.
 * @param {string} props.item.eventId - The ID of the event.
 * @param {Object[]} props.item.images - The images of the event.
 * @param {Object} props.item.images[].fields - The fields of the image.
 * @param {string} props.item.images[].fields.file.url - The URL of the image.
 *
 *
 * // The component can be used like this:
 * <MainCard item={item} />
 *
 * @returns {React.Element} The rendered React element.
 */

function MainCard({ item }) {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'swedish'
  );

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  useEffect(() => {
    // Update local storage when language changes
    localStorage.setItem('language', language);
  }, [language]);

  const readMoreText = language === 'swedish' ? 'Läs mer' : 'Read more';
  return (
    <>
      <div className="bg-custom-grey">
        <article
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-[3rem] "
          {...(window.innerWidth <= 640 &&
            item > 1 && {
              'data-aos': 'fade-up',
              'data-aos-offset': '300',
              'data-aos-easing': 'ease-in-sine',
              'data-aos-duration': '400',
            })}
          {...(window.innerWidth >= 640 &&
            item > 0 && {
              'data-aos': 'fade-up',
              'data-aos-offset': '300',
              'data-aos-easing': 'ease-in-sine',
              'data-aos-duration': '400',
            })}
        >
          <div className="flex flex-row justify-start items-start ml-0">
            <div className="sticky left-0 bg-custom-yellow font-semibold text-cutom-black px-3 sm:w-[5rem] sm:h-[1.5rem] rounded-r-md">
              {item.year}
            </div>
            <section className="flex flex-col w-full justify-start items-start px-[3rem]">
              <h1 className="font-bold sm:text-xl md:text-2xl lg:text-3xl">
                {language === 'swedish' ? item.titleSwedish : item.titleEnglish}
              </h1>
              <p className="sm:text-sm py-5 md:text-lg">
                {language === 'swedish'
                  ? item.summarySwedish
                  : item.summaryEnglish}
              </p>
              <Link to={`event/${item.eventId}`}>
                <Button
                  text={readMoreText}
                  onClick={() => console.log('Button clicked')}
                />
              </Link>
            </section>
          </div>

          <div className="flex flex-col sm:w-full md:max-w-[25rem] lg:max-w-[35rem]">
            <img
              src={item.images[0].fields.file.url}
              alt="main image"
              className="w-full h-autoobject-cover shadow-md md:rounded-xl sm:rounded-none lg:min-w-[20rem] lg:min-h-[10rem]"
            />
          </div>
        </article>
      </div>
    </>
  );
}

export default MainCard;
