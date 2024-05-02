import { SlArrowLeft } from 'react-icons/sl';
import { Link } from 'react-router-dom';

/**
 * `BackBar` is a functional component that renders a navigation bar with a back button and the event year.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.eventYear - The year of the event to display in the navigation bar.
 *
 *
 * // The component can be used like this:
 * <BackBar eventYear="2022" />
 *
 * @returns {React.Element} The rendered React element.
 */

function BackBar({ eventYear }) {
  return (
    <>
      <div className="bg-custom-blue flex flex-row items-center justify-between px-5 text-custom-white font-bold h-10">
        <Link to={'/'} className="text-2xl">
          <SlArrowLeft />
        </Link>
        <p className="text-md">{eventYear}</p>
      </div>
    </>
  );
}

export default BackBar;
