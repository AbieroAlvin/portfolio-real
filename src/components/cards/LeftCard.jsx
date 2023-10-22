const LeftCard = ({ imgSrc, title, delay, duration }) => {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12 mb-6">
      <div className="flex items-center flex-col sm:flex-row">
        <div className="flex justify-start w-full mx-auto items-center">
          <div className="w-full sm:w-1/2 sm:pr-8">
            <div
              data-aos="fade-right"
              data-aos-delay={delay}
              data-aos-duration={duration}
              className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
            >
              <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                {title}
              </h3>

              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[400] leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                laborum at alias obcaecati
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
          <figure>
            <img src={imgSrc} alt="/" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
