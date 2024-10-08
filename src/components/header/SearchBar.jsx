/* eslint-disable react/no-unknown-property */

/**
 * `SearchBar` is a functional component that renders a search bar.
 * The search bar includes an input field for search queries and a button to submit the search.
 * This functionnality doesn't work rigth now (24/5/2).
 *
 * // The component can be used like this:
 * <SearchBar />
 *
 * @returns {React.Element} The rendered React element.
 */

function SearchBar() {
  return (
    <div className="flex md:justify-center justify-end items-center border-custom-white border-b-2 h-[3.3em]">
      <div className="max-w-lg w-[18.9em] md:w-[128.9em]   overflow-hidden">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#348DB3"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            id="search"
            name="search"
            className="block w-full  pl-10 pr-3 py-2 border-none  rounded-full leading-5 bg-custom-white placeholder-custom-darkGrey focus:outline-none focus:placeholder-custom-darkGrey sm:text-sm"
            placeholder="Search for events"
            type="search"
          />
        </div>
      </div>
      <div className="ml-10 mr-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7.5C3 7.30109 3.07902 7.11032 3.21967 6.96967C3.36032 6.82902 3.55109 6.75 3.75 6.75H6.75C6.94891 6.75 7.13968 6.82902 7.28033 6.96967C7.42098 7.11032 7.5 7.30109 7.5 7.5C7.5 7.69891 7.42098 7.88968 7.28033 8.03033C7.13968 8.17098 6.94891 8.25 6.75 8.25H3.75C3.55109 8.25 3.36032 8.17098 3.21967 8.03033C3.07902 7.88968 3 7.69891 3 7.5ZM20.25 15.75H16.5V14.25C16.5 14.0511 16.421 13.8603 16.2803 13.7197C16.1397 13.579 15.9489 13.5 15.75 13.5C15.5511 13.5 15.3603 13.579 15.2197 13.7197C15.079 13.8603 15 14.0511 15 14.25V18.75C15 18.9489 15.079 19.1397 15.2197 19.2803C15.3603 19.421 15.5511 19.5 15.75 19.5C15.9489 19.5 16.1397 19.421 16.2803 19.2803C16.421 19.1397 16.5 18.9489 16.5 18.75V17.25H20.25C20.4489 17.25 20.6397 17.171 20.7803 17.0303C20.921 16.8897 21 16.6989 21 16.5C21 16.3011 20.921 16.1103 20.7803 15.9697C20.6397 15.829 20.4489 15.75 20.25 15.75ZM12.75 15.75H3.75C3.55109 15.75 3.36032 15.829 3.21967 15.9697C3.07902 16.1103 3 16.3011 3 16.5C3 16.6989 3.07902 16.8897 3.21967 17.0303C3.36032 17.171 3.55109 17.25 3.75 17.25H12.75C12.9489 17.25 13.1397 17.171 13.2803 17.0303C13.421 16.8897 13.5 16.6989 13.5 16.5C13.5 16.3011 13.421 16.1103 13.2803 15.9697C13.1397 15.829 12.9489 15.75 12.75 15.75ZM9.75 10.5C9.94891 10.5 10.1397 10.421 10.2803 10.2803C10.421 10.1397 10.5 9.94891 10.5 9.75V8.25H20.25C20.4489 8.25 20.6397 8.17098 20.7803 8.03033C20.921 7.88968 21 7.69891 21 7.5C21 7.30109 20.921 7.11032 20.7803 6.96967C20.6397 6.82902 20.4489 6.75 20.25 6.75H10.5V5.25C10.5 5.05109 10.421 4.86032 10.2803 4.71967C10.1397 4.57902 9.94891 4.5 9.75 4.5C9.55109 4.5 9.36032 4.57902 9.21967 4.71967C9.07902 4.86032 9 5.05109 9 5.25V9.75C9 9.94891 9.07902 10.1397 9.21967 10.2803C9.36032 10.421 9.55109 10.5 9.75 10.5Z"
            fill="#6A6A6A"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
