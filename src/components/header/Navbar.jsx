import logo from '../../assets/icon.svg';
import ToggleLanguages from './ToggleLanguages';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex  px-2 lg:px-0 ">
                  <div className="flex-shrink-0  flex items-center ">
                    {/* Logo */}
                    <Link to={'/'}>
                      <img
                        className=" h-[3em] w-auto"
                        src={logo}
                        alt="Workflow"
                      />
                    </Link>
                  </div>

                  <div className="flex justify-center items-center w-[20em] space-x-10 md:w-[40em] ">
                    {/* Title */}

                    <h2 className=" ml-4 text-[#017AAF] font-bold">History</h2>
                    {/* Ksss Website link */}
                    <a
                      href="https://www.ksss.se/"
                      target="_blank"
                      className=" font-bold flex ml-4 text-sm p-0"
                    >
                      <span className="border-b border-black">KSSS</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </a>
                    <div className="inline-flex items-center ml-4">
                      {/* Toggle lang */}
                      <ToggleLanguages />
                    </div>
                  </div>

                  {/* Large screen navbar */}
                </div>

                <div className="flex items-center  lg:hidden">
                  {/* Mobile menu button */}

                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#017AAF] ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="w-40 absolute right-0 bg-white z-50">
              <div className="pt-2 pb-3 space-y-1 backdrop-blur-lg">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-black hover:bg-gray-50 block pl-3 pr-4 py-2 border-l-4 text-xs font-medium"
                  s
                >
                  About us
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-black hover:bg-gray-5 block pl-3 pr-4 py-2 border-l-4 text-xs font-medium"
                >
                  Log in/Sign up
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent  hover:bg-gray-5 block pl-3 pr-4 py-2 border-l-4 text-xs font-medium"
                >
                  Be a member
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-[#017AAF] hover:bg-gray-5 block pl-3 pr-4 py-2 border-l-4 text-xs font-medium"
                >
                  <Link to={'/yearbook'}>Year book</Link>
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent  hover:bg-gray-5 block pl-3 pr-4 py-2 border-l-4 text-xs font-medium"
                >
                  Contact us
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Navbar;
