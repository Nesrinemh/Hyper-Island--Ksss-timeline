import useContentful from '../../helpers/useContenful';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * `YearNavigation` is a functional component that renders a navigation bar with links to different years.
 * The years are fetched from Contentful using the `useContentful` hook.
 * Each year is a link that navigates to a route based on the year.

 * // The component can be used like this:
 * <YearNavigation />
 *
 * @returns {React.Element} The rendered React element.
 */

function YearNavigation() {
  const { getData } = useContentful();
  const [years, setYears] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      const sortedYears = response.sort((a, b) => b.year - a.year);
      setYears(sortedYears);
    });
  }, []);

  return (
    <div className="max-w-full overflow-x-auto bg-custom-white">
      <div className="inline-flex justify-between items-center py-[1em] px-[1.5em]">
        {years.map((item, index) => (
          <Link key={index} to={`/year/${item.year}`}>
            <button className=" w-20 px-[1rem] mx-4 border-solid border-2 border-custom-lighGrey rounded-3xl hover:bg-custom-blue hover:text-custom-white">
              {item.year}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default YearNavigation;
