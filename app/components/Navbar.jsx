import Image from "next/image";
import React from "react";
import {
  FiArrowLeft,
  FiSearch,
  FiHome,
  FiEdit,
  FiHeart,
  FiUser,
  FiAlignRight,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] fixed bg-black">
      <div className="h-full flex items-center justify-between px-[80px]">
        <Image
          src={"/logo.jpg"}
          width={1000}
          height={1000}
          alt="Logo"
          className="w-[50px]"
        />

        <div className="parent flex gap-5 items-center">
          {/* <div className="icons">
                    <div className="h-full w-[90px] flex justify-center items-center hover:bg-zinc-800 p-4 rounded">
                        <FiArrowLeft size={30} />
                    </div>
                </div> */}

          <div className="icons">
            <div className="h-full w-[90px] flex justify-center items-center hover:bg-zinc-800 p-4 rounded">
              <FiHome size={30} />
            </div>
          </div>
          <div className="icons">
            <div className="h-full w-[90px] flex justify-center items-center hover:bg-zinc-800 p-4 rounded">
              <FiSearch size={30} />
            </div>
          </div>
          <div className="icons">
            <div className="h-full w-[90px] flex justify-center items-center hover:bg-zinc-800 p-4 rounded">
              <FiEdit size={30} />
            </div>
          </div>
          <div className="icons">
            <div className="h-full w-[90px] flex justify-center items-center hover:bg-zinc-800 p-4 rounded">
              <FiHeart size={30} />
            </div>
          </div>
          <div className="icons">
            <div className="h-full w-[90px] flex justify-center items-center hover:bg-zinc-800 p-4 rounded">
              <FiUser size={30} />
            </div>
          </div>
        </div>

        <div className="icons">
          <FiAlignRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
