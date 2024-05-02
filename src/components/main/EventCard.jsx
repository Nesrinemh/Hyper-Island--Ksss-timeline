import { useContext, useEffect, useState } from 'react';
import { GetSingleDataContext } from '../../helpers/useSingleContext';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import image from '../../assets/fredrik.jpg';

/**
 * `EventCard` is a functional component that fetches and displays data for a single event.
 * The event data is fetched from a context using the `useContext` hook and the `fetchData` function.
 * The component displays a loading message while the data is being fetched.
 * Once the data is fetched, it displays the event title, summary, images, and text.
 * The text and title can be in English or Swedish, based on the language stored in local storage.
 *
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.eventID - The ID of the event to fetch data for.
 * @param {function} props.setData - The function to set the event data.
 *
 *
 * // The component can be used like this:
 * <EventCard eventID="123" setData={setData} />
 *
 * @returns {React.Element} The rendered React element.
 */

const EventCard = ({ eventID, setData }) => {
  const { singleData, fetchData } = useContext(GetSingleDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'swedish'
  );

  useEffect(() => {
    setIsLoading(true);
    fetchData(eventID);
  }, [eventID, fetchData]);

  useEffect(() => {
    if (singleData) {
      setData(singleData);
      setIsLoading(false);
    }
  }, [singleData, setData]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <article className="flex flex-col justify-center items-center">
          <section className="text-sm px-5 py-4">
            <h1 className="font-bold sm:text-xl md:text-2xl lg:text-3xl px-12 pt-8 pb-2">
              {language === 'swedish'
                ? singleData.fields.titleSwedish
                : singleData.fields.titleEnglish}
            </h1>
            <p className="px-12 pb-6 sm:text-sm sm:py-1 md:pb-10 md:text-lg">
              {language === 'swedish'
                ? singleData.fields.summarySwedish
                : singleData.fields.summaryEnglish}
            </p>
          </section>

          <figure>
            <img src={image} alt="main image" className="shadow-md" />
          </figure>

          <div className="w-full overflow-x-auto flex flex-row py-6  max-w-[50rem] justify-between">
            <div className="flex justify-center items-center sticky">
              <SlArrowLeft
                className="absolute left-5 text-white text-3xl"
                style={{
                  filter: 'drop-shadow(1px 1px 3px rgba(0,0,0))',
                }}
              />
            </div>

            {/* <img
                className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              /> */}

            {/* <div className="snap-center pl-4">
              <img
                className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div> */}
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
            <div className="snap-center px-4">
              <img
                className="object-cover shrink-0 max-w-100 max-h-70 min-w-40 min-h-30 rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              />
            </div>
            <div className="flex justify-center items-center sticky">
              <SlArrowRight
                className="absolute right-5 text-white text-3xl"
                style={{
                  filter: 'drop-shadow(1px 1px 3px rgba(0,0,0))',
                }}
              />
            </div>
          </div>
          <div className="text-sm px-5 py-4 max-w-[90%]">
            <p className="px-12 pb-6 sm:text-sm sm:py-1 md:pb-10 md:text-lg">
              {language === 'swedish'
                ? singleData.fields.textSwedish
                : singleData.fields.textEnglish}
            </p>
          </div>
        </article>
      )}
    </div>
  );
};

export default EventCard;
