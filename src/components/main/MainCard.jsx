import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

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
      <div style={{ backgroundColor: '#F7F7F7' }}>
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
            <div
              className="sticky left-0 font-semibold text-black px-3 sm:w-[5rem] sm:h-[1.5rem] rounded-r-md"
              style={{ backgroundColor: '#F1B646' }}
            >
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
                <button
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm border-none rounded-xl px-8 py-2  mb-[1rem] transform sm: active:scale-95 transition-transform duration-200"
                  style={{ backgroundColor: '#348DB3', color: '#FAFAFA' }}
                >
                  {readMoreText}
                </button>
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

// const url = item.pdfs && item.pdfs[0].fields.file.url;
// <a href={url}>Download PDF</a>;
