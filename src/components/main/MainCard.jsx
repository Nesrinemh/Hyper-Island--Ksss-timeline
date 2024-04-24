import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MainCard({ item }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <article
          className="flex flex-col py-[3rem] sm:flex-col sm:w-full
        md:flex-row
        md:w-full
        md:justify-evenly md:pr-[3rem] lg:w-full items-center"
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
          <div className="flex flex-row justify-start items-start md:ml-0 lg:ml-0">
            <div
              className="sticky left-0 font-semibold sm:w-[5rem] sm:h-[1.5rem] text-black px-3 rounded-r-md"
              style={{ backgroundColor: '#F1B646' }}
            >
              {item.year}
            </div>
            <section className="flex flex-col w-full justify-start items-start px-[3rem]">
              <h1 className="font-bold sm:text-xl md:text-2xl lg:text-3xl">
                {item.titleSwedish}
              </h1>
              <p className="sm:text-sm py-5 md:text-lg">
                {item.summarySwedish}
              </p>
              <button
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm border-none rounded-xl px-8 py-2  mb-[1rem] transform sm: active:scale-95 transition-transform duration-200"
                style={{ backgroundColor: '#348DB3', color: '#FAFAFA' }}
              >
                Read more
              </button>
            </section>
          </div>

          <div className="flex flex-col sm:w-full md:max-w-[25rem] lg:max-w-[35rem]">
            <img
              src={item.images[0].fields.file.url}
              alt="main image"
              className="w-full h-autoobject-cover shadow-md rounded-xl lg:min-w-[20rem] lg:min-h-[10rem]"
            />
          </div>
        </article>
      </div>
    </>
  );
}

export default MainCard;
