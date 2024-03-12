import React from "react";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "#services",
    title: "Our Services",
  },
  {
    path: "#about",
    title: "About",
  },
  {
    path: "#solution",
    title: "Solution",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];
export default function Navbar() {
  return (
    <header className="container mx-auto w-full px-3 md:px-0">
    <nav className="bg-black w-full rounded-xl shadow-md  mt-2 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:py-4 py-2 px-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Mudi Solutions
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 items-center md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  ">
            {links.map((link) => (
              <li
                key={link.title}
                className="last:border last:border-white last:rounded-md last:p-2 last:hover:border-[#FF6B19]"
              >
                <a
                  href={link.path}
                  className="block py-2 px-3 text-white text-sm  hover:text-[#FF6B19] transition-colors  md:bg-transparent md:p-0  "
                  aria-current="page"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}
