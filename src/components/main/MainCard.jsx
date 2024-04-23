import { useEffect } from 'react';
import { archive } from '../../../data.js';
import YearNavigation from './YearNavigation.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MainCard() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <>
      <YearNavigation />
      <div style={{ backgroundColor: '#F7F7F7' }}>
        {archive.map((item, index) => {
          return (
            <article
              key={index}
              className="flex flex-col pt-[3rem] sm:flex-col sm:w-full
              md:flex-row 
              md:w-full
              md:justify-evenly md:pr-[3rem] lg:w-full "
              {...(window.innerWidth <= 640 &&
                index > 1 && {
                  'data-aos': 'fade-up',
                  'data-aos-offset': '300',
                  'data-aos-easing': 'ease-in-sine',
                  'data-aos-duration': '400',
                })}
              {...(window.innerWidth >= 640 &&
                index > 1 && {
                  'data-aos': 'fade-up',
                  'data-aos-offset': '300',
                  'data-aos-easing': 'ease-in-sine',
                  'data-aos-duration': '400',
                })}
            >
              <div className="flex flex-row justify-start items-start md:ml-0 lg:ml-0">
                <div
                  className="w-[5rem]  md:h-[1.5rem] sm:semibold md:font-bold text-white px-3 rounded-r-md"
                  style={{ backgroundColor: '#C7324C' }}
                >
                  2024
                </div>
                <section className="flex flex-col w-full justify-start items-start px-[3rem]">
                  <h1 className="font-bold sm:text-xl md:text-2xl lg:text-3xl">
                    {item.title}
                  </h1>
                  <p className="sm:text-sm sm:py-5 md:py-10 md:text-lg">
                    {item.sumary}
                  </p>
                  <button
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm border-none rounded-xl px-8 py-2  mb-[1rem] transform sm: active:scale-95 transition-transform duration-200"
                    style={{ backgroundColor: '#348DB3', color: '#FAFAFA' }}
                  >
                    {item.readMore || 'Read more'}
                  </button>
                </section>
              </div>

              <div className="flex flex-col  sm:w-full md:max-w-[25rem] lg:max-w-[35rem]">
                <img
                  src={item.mainImg}
                  alt="main image"
                  className="w-full h-auto shadow-md"
                />

                <div className="w-full overflow-x-auto flex flex-row py-6 sm:w-full md:max-w-[25rem] lg:max-w-[35rem]">
                  <div className="snap-center sm:pl-4 md:pl-0">
                    <img
                      className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
                      src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                    />
                  </div>
                  <div className="snap-center pl-4">
                    <img
                      className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
                      src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                    />
                  </div>
                  <div className="snap-center pl-4">
                    <img
                      className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
                      src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                    />
                  </div>
                  <div className="snap-center pl-4">
                    <img
                      className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
                      src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                    />
                  </div>
                  <div className="snap-center pl-4">
                    <img
                      className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
                      src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                    />
                  </div>
                  <div className="snap-center pl-4">
                    <img
                      className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
                      src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default MainCard;
