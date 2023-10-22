import RightCard from "../cards/Rightcard";
import LeftCard from "../cards/LeftCard";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What do I help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[1rem] leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            asperiores sapiente natus numquam nulla praesentium vero dicta velit
            molestias labore. Recusandae velit esse alias sed amet excepturi
            repellendus quisquam deserunt?
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* vertical line */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* left-card */}
              <LeftCard imgSrc={frontendImg} title="Frontend Development" />

              {/* right-card */}
              <RightCard
                imgSrc={backendImg}
                title="Backend Development"
                delay="50"
                duration="1300"
              />
              {/* left-card */}
              <LeftCard
                imgSrc={uiImg}
                title="UI/UX Design"
                delay="100"
                duration="1400"
              />

              {/* right-card */}
              <RightCard
                imgSrc={appsImg}
                title="Apps Development"
                delay="100"
                duration="1500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
