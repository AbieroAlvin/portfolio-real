import heroImg from "../../assets/images/hero.svg";
// import CountUp from "react-countup";

import { HiOutlineMail } from "react-icons/hi";
import { RiAppsLine } from "react-icons/ri";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero-left */}
          <div className="w-full md:basis-[60%]">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[1rem]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.5rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Alvin Abiero <br /> Front-End Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800"
              className="flex items-center gap-6 mt-7"
            >
              <button className="bg-primaryColor text-white font-[500] py-2 px-4 rounded-md hover:bg-smallTextColor hover:text-white ease-in duration-300">
                <a href="#contact" className="flex items-center gap-2">
                  <HiOutlineMail />
                  Hire Me
                </a>
              </button>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b-[1px] border-b-smallTextColor"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 mt-12 text-headingColor font-[500] text-[14px] sm:text-[16px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <RiAppsLine />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              cumque dolore et nostrum dicta optio debitis corrupti consequuntur
              sint ut aperiam, distinctio blanditiis, ratione harum?
            </p>

            <div className="flex items-center gap-8 mt-12">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="#twitter"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <BsTwitter />
                </a>
              </span>
              <span>
                <a
                  href="#github"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <BsGithub />
                </a>
              </span>
              <span>
                <a
                  href="#linkedin"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <BsLinkedin />
                </a>
              </span>
            </div>
          </div>
          {/* hero-left end */}
          {/* hero-img */}
          <div className="mt-12 sm:mt-0 ">
            <figure
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex items-center justify-center"
            >
              <img src={heroImg} alt="/" />
            </figure>
          </div>
          {/* hero-img end */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
