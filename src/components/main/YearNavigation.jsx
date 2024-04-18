import React from 'react';

function YearNavigation() {
  return (
    <div className="max-w-full overflow-x-auto bg-white">
      <div className="inline-flex justify-between items-center py-[1em] px-[1.5em]">
        <button className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          Now
        </button>
        <button className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          2020
        </button>
        <button className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          2010
        </button>
        <button className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          2000
        </button>
        <button className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          1990
        </button>
        <button className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          1980
        </button>
        <button className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          1970
        </button>
        <button className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          1960
        </button>
        <button className=" w-20 py-[0.3em] px-[1em] my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          1950
        </button>
        <button className=" w-20 py-2 px-3 my-0 mx-4 border-solid border-2 border-slate-200 rounded-3xl hover:bg-[#348DB3] hover:text-white">
          1940
        </button>
      </div>
    </div>
  );
}
export default YearNavigation;
