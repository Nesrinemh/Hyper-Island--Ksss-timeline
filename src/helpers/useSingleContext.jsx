/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const GetSingleDataContext = createContext();
const GetSingleDataProvider = ({ children }) => {
  const [singleData, setSingleData] = useState(null);
  // Fetching single article data
  const fetchData = async (id) => {
    try {
      const response = await fetch(
        `https://preview.contentful.com/spaces/fr5410kqk9t2/environments/master/entries/${id}?access_token=owrrLKwAXtEz_63EKyciABZxVCXteGvN_16qIaN5Jvc`
      );
      if (!response.ok) {
        throw new Error('Response was not okay');
      }
      const fetchedData = await response.json();
      setSingleData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };
  // send all props to the children
  return (
    <GetSingleDataContext.Provider value={{ singleData, fetchData }}>
      {children}
    </GetSingleDataContext.Provider>
  );
};
export { GetSingleDataContext, GetSingleDataProvider };
