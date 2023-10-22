import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12121e] pt-12 py-8">
      {/* footer top */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <button className="bg-primaryColor text-white font-[500] py-2 px-4 rounded-md hover:bg-smallTextColor hover:text-white ease-in duration-300">
              <Link to="/contact" className="flex items-center gap-2">
                <HiOutlineMail />
                Hire Me
              </Link>
            </button>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis deleniti excepturi nihil tempore aut amet impedit?
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span>
                <a
                  href="#twitter"
                  className="text-gray-300 text-[18px] font-[600]"
                >
                  <BsTwitter />
                </a>
              </span>
              <span>
                <a
                  href="#github"
                  className="text-gray-300 text-[18px] font-[600]"
                >
                  <BsGithub />
                </a>
              </span>
              <span>
                <a
                  href="#linkedin"
                  className="text-gray-300 text-[18px] font-[600]"
                >
                  <BsLinkedin />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* footer top end */}
      {/* footer bottom */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  AA
                </span>

                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Abiero Alvin
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} developed by Alvin Abiero - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom end*/}
    </footer>
  );
};

export default Footer;
