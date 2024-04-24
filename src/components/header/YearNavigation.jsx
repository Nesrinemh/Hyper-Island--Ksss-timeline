import React from 'react';
import useContentful from '../../helpers/useContentful';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="max-w-full overflow-x-auto bg-white">
      <div className="inline-flex justify-between items-center py-[1em] px-[1.5em]">
        {years.map((item, index) => (
          <Link to={`/year/${item.year}`}>
            <button
              key={index}
              className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white"
            >
              {item.year}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default YearNavigation;
