import React from 'react';
import { SlArrowLeft } from 'react-icons/sl';

function BackBar() {
  return (
    <>
      <div className="bg-[#358DB3] flex flex-row items-center justify-between px-5 text-white font-bold h-10">
        <a className="text-2xl">
          <SlArrowLeft />
        </a>
        <p className="text-md">2021</p>
      </div>
    </>
  );
}
export default BackBar;
