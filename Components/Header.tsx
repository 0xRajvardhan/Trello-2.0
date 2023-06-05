"use client"

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        {/* Div for gradient */}
        <div
          className="
        absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-pink-400
        to-[#0055D1]
        rounded-md
        #0055D1
        blur-[100px]
        -z-50"
        />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain cursor-pointer"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none py-2"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>
          {/* Avatar  */}
          <div>
            <Avatar
              name="Rajvardhan Sing"
              size="50"
              round={true}
              color="#0055D1"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5 ">
        <p className="flex p-5 items-center text-sm font-[300] text-[#0055D1] pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl">
          <UserCircleIcon className="h-10 w-10 text-[#0055D1] mr-1" />
          GPT is summarizing your day ...
        </p>
      </div>
    </header>
  );
}

export default Header;
