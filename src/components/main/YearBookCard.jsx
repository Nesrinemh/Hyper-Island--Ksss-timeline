import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      {/* {Pdf.map((item, index) => (
        <article
          key={index}
          className="  h-40 my-10 mx-8 bg-cover border-none rounded-xl "
          data-aos="fade-zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div
            className="h-40"
            style={{
              background: 'rgb(255,255,255)',
              background:
                'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 33%)',
            }}
          >
            <a
              href={item.url}
              className="font-bold sm: pl-5 flex items-center justify-start h-full w-full"
              style={{
                color: '#358DB3',
                fontSize: '2.75rem',
              }}
            >
              {item.year}
            </a>
          </div>
        </article>
      ))} */}{' '}
      PRIOR #3 under developing
    </div>
  );
};

export default YearBookCard;
