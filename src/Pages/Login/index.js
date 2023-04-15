import React from "react";
import Store from "../../assets/images/Store.png";
import Cart from "../../assets/images/Cart.png";

const Login = () => {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-6 bg-orangeCream">
      <div className="lg:col-span-5 bg-orangeCream h-screen lg:flex hidden flex-col justify-center items-center space-y-5">
        <img src={Store} className="" alt="store" />
        <img src={Cart} className="" alt="cart" />
      </div>
      <div className="lg:col-span-7 bg-white rounded rounded-tl-3xl rounded-bl-3xl">
        <div className="flex flex-col justify-center items-center py-[63px]">
          <h1 className="text-[48px] font-semibold text-orangeOld">
            Hello Again
          </h1>
          <h1 className="text-[24px] font-normal text-orangeCream">
            Hello, welcome to the website again
          </h1>

          <div className="px-[95px] py-[86px] w-full space-y-10">
            <div class="w-full">
              <div class="relative">
                <input
                  type="text"
                  id="username"
                  class="border-b border-orangeOld py-1 focus:outline-none focus:border-orangeOld focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="username"
                  class="absolute left-0 top-1 text-orangeCream cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orangeOld transition-all"
                >
                  Username
                </label>
              </div>
            </div>
            <div class="w-full">
              <div class="relative">
                <input
                  type="text"
                  id="password"
                  class="border-b border-orangeOld py-1 focus:outline-none focus:border-orangeOld focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="password"
                  class="absolute left-0 top-1 text-orangeCream cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orangeOld transition-all"
                >
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className="px-[95px] w-full space-y-3">
            <button className="h-[83px] w-full rounded-lg bg-orangeOld hover:bg-orangeCream font-medium text-[24px] text-white">
              Login
            </button>
            <button className="h-[83px] w-full rounded-lg bg-blueOld hover:bg-blueTwo font-medium text-[24px] text-white">
              Create Acount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;