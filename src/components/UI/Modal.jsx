import portfolios from "../../assets/data/portfolioData";
import { FaTimes } from "react-icons/fa";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="max-w-[600px] max-h-[650px] absolute top-1/2 left-1/2 z-20 bg-white rounded-md transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-md" src={portfolio.imgUrl} alt="/" />
          </figure>
        </div>

        <div>
          <h2 className="sm:text-2xl text-xl text-headingColor sm:my-3 my-3 font-[700]">
            {portfolio.title}
          </h2>
          <p className="sm:text-[15px] text-[12px] sm:leading-7 leading-5 text-smallTextColor">
            {portfolio.description}
          </p>

          <div className="mt-5 sm:mt-3 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor sm:text-[18px] text-[15px] text-[700]">
              Technoligies :
            </h4>

            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-md sm:text-[14px] text-[12px]  leading-0 text-smallTextColor"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-8 sm:my-5 my-4">
            <a href={portfolio.siteUrl}>
              <button className="text-white sm:text-[1rem] text-[12px] bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-md font-[500] ease-in duration-300">
                Live Site
              </button>
            </a>
            <a href="#">
              <button className="text-white sm:text-[1rem] text-[12px] bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-md font-[500] ease-in duration-300">
                Git Link
              </button>
            </a>
          </div>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-white rounded-lg  absolute top-[1.25rem] right-[1rem] text-primaryColor flex justify-center items-center cursor-pointer leading-0"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
