/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

/**
 * `GetSingleDataContext` is a React context object. It's used to provide and consume the single data state and the `fetchData` function.
 *
 * @type {React.Context}
 */

const GetSingleDataContext = createContext();

/**
 * `GetSingleDataProvider` is a functional component that provides the single data state and the `fetchData` function to its children.
 * The `fetchData` function fetches data for a single entry from Contentful and sets the `singleData` state.
 *
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.Node} props.children - The child components to render.
 *
 *
 *
 * // The component can be used like this:
 * <GetSingleDataProvider>
 *   <ChildComponent />
 * </GetSingleDataProvider>
 *
 * // The context can be consumed like this:
 * const { singleData, fetchData } = useContext(GetSingleDataContext);
 *
 * @returns {React.Element} A `GetSingleDataContext.Provider` element with the `singleData` state and the `fetchData` function as its value.
 */

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
