import { SlArrowLeft } from 'react-icons/sl';
import { Link } from 'react-router-dom';

function BackBar({ eventYear }) {
  return (
    <>
      <div className="bg-[#358DB3] flex flex-row items-center justify-between px-5 text-white font-bold h-10">
        <Link to={'/'} className="text-2xl">
          <SlArrowLeft />
        </Link>
        <p className="text-md">{eventYear}</p>
      </div>
    </>
  );
}

export default BackBar;
