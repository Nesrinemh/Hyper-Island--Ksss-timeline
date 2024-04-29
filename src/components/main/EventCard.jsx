import { useContext, useEffect, useState } from 'react';
import { GetSingleDataContext } from '../../helpers/useSingleContext';

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
        <div>
          <h1>{singleData.fields.fullDate}</h1>
          <br />
          <h1>
            {language === 'swedish'
              ? singleData.fields.titleSwedish
              : singleData.fields.titleEnglish}
          </h1>
          <br />
          <h1>
            {language === 'swedish'
              ? singleData.fields.summarySwedish
              : singleData.fields.summaryEnglish}
          </h1>
          <br />
          <h1>
            {language === 'swedish'
              ? singleData.fields.textSwedish
              : singleData.fields.textEnglish}
          </h1>
          <br />
        </div>
      )}
    </div>
  );
};

export default EventCard;
