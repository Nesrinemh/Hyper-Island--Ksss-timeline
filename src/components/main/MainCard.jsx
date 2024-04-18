import React, { useEffect } from 'react';
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
      <article>
        {archive.map((item, index) => {
          return (
            <section
              key={index}
              className="w-full flex flex-col pt-12"
              style={{ backgroundColor: '#F7F7F7' }}
              {...(index > 1 && {
                'data-aos': 'fade-zoom-in',
                'data-aos-offset': '400',
                'data-aos-easing': 'ease-in-sine',
                'data-aos-duration': '400',
              })}
              //{...(index > 1 && {
              // data-aos="fade-up"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
              // data-aos-duration="400"
              //})}
            >
              <section className="ml-12 mr-12 pb-4">
                <h2 className="font-bold">{item.title}</h2>
                <p className="font-size-13 py-4">{item.sumary}</p>
                <button
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm border-none rounded-xl px-8 py-2  transform sm: active:scale-95 transition-transform duration-200"
                  style={{ backgroundColor: '#348DB3', color: '#FAFAFA' }}
                >
                  {item.readMore || 'Read more'}
                </button>
              </section>
              <img src={item.mainImg} alt="main image" />
            </section>
          );
        })}
      </article>
    </>
  );
}

export default MainCard;
