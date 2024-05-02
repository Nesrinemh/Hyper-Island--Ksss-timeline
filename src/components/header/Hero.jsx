/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from 'react';

/**
 * `Hero` is a functional component that renders a hero section with a title and a description.
 * The description can be in English or Swedish, based on the language stored in local storage.
 *
 *
 * // The component can be used like this:
 * <Hero />
 *
 * @returns {React.Element} The rendered React element.
 */

function Hero() {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'english'
  );

  const textContent = {
    english:
      "KSSS is Sweden's largest and the world's second largest sailing club. With over 5,000 members, including over 2,000 juniors.",
    swedish:
      'KSSS är Sveriges största och världens näst största seglingsklubb med över 5 000 medlemmar, inklusive över 2 000 juniorer.',
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'english';
    setLanguage(storedLanguage);
  }, []);

  return (
    <div className="px-16 flex flex-col justify-center border-[#F3F3F3] border-b-2 pb-4">
      <h1 className="py-4 text-2xl font-semibold">Ksss History</h1>
      <p className="text-sm text-gray-900">{textContent[language]}</p>
    </div>
  );
}

export default Hero;
