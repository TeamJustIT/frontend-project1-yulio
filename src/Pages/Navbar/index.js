import React from "react";
import Cart from "../../assets/images/Cart.png";
import Ilustration from "../../assets/images/Ilustration.png";

const Navbar = () => {
  return (
    <div className="bg-orangeOld">
      <div className="sticky top-10 z-20 px-10">
        <nav className="w-full flex px-10 py-5 justify-between items-center rounded-full bg-white navbar">
          <img src={Cart} className="h-[80px] w-[80px]"></img>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium gap-10 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About
                </a>
              </li>
              <li>
                <a class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Information
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="bg-orangeOld h-[867px] px-10 py-20">
        <div className="px-20 py-20">
          <div className="relative">
            <div className="h-[500px] w-[500px] rotate-45 bg-white"></div>
            <div className="absolute top-0">
              <img src={Ilustration} className="w-[500px] h-[497px]"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[867px]"></div>
    </div>
  );
};

export default Navbar;