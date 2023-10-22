import { useRef, useEffect, useState } from "react";

import { BsSend } from "react-icons/bs";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => setOpen(!open);
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };
  return (
    <nav
      ref={headerRef}
      className="w-full h-[80px] flex items-center leading-[80px]"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              AA
            </span>
            <div className="leading-[20px]">
              <h2 className="text-md text-smallTextColor font-[700]">
                Abiero Alvin
              </h2>
            </div>
          </div>
          {/* logo end */}

          {/* menu */}
          <div className="menu hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="text-smallTextColor font-[600]">
                <a onClick={handleClick} href="#about">
                  About
                </a>
              </li>
              <li className="text-smallTextColor font-[600]">
                <a onClick={handleClick} href="#services">
                  Services
                </a>
              </li>
              <li className="text-smallTextColor font-[600]">
                <a onClick={handleClick} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="text-smallTextColor font-[600]">
                <a onClick={handleClick} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* menu-end */}

          {/* menu-right  */}
          <div className=" flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-smallTextColor font-[600] border-[1px] border-smallTextColor py-2 px-4 rounded-md max-h-[45px] hover:bg-smallTextColor hover:text-white  ease-in duration-300">
              Lets Talk
              <BsSend />
            </button>

            <span
              onClick={handleNav}
              className="text-2xl text-smallTextColor  cursor-pointer md:hidden z-40"
            >
              {open ? (
                <FaTimes size={30} className=" cursor-pointer" />
              ) : (
                <HiOutlineMenuAlt1 size={30} className=" cursor-pointer" />
              )}
            </span>
          </div>

          {/* menuRight-end */}

          {/* Overlay */}

          {open ? (
            <div className="bg-black/40 fixed w-full h-screen z-20 top-0 right-0 duration-700 ease-in"></div>
          ) : (
            ""
          )}

          {/* Mobile */}

          <ul
            className={`md:hidden bg-white absolute w-[60%] top-0  text-2xl font-medium h-screen space-y-4 py-24 z-30 p-6 duration-500 ease-in ${
              open ? "right-0" : "left-[-100%]"
            }`}
          >
            <li className="text-smallTextColor font-[600] hover:text-primaryColor">
              <a onClick={handleClick} href="#about">
                About
              </a>
            </li>
            <li className="text-smallTextColor font-[600] hover:text-primaryColor">
              <a onClick={handleClick} href="#services">
                Services
              </a>
            </li>
            <li className="text-smallTextColor font-[600] hover:text-primaryColor">
              <a onClick={handleClick} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="text-smallTextColor font-[600] hover:text-primaryColor">
              <a onClick={handleClick} href="#contact">
                Contact
              </a>
            </li>
            <button className="flex items-center gap-2 text-smallTextColor font-[600] text-xl border-[1px] border-smallTextColor py-2 px-4 rounded-md max-h-[45px] hover:bg-smallTextColor hover:text-white  ease-in duration-300">
              Lets Talk
              <BsSend />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
