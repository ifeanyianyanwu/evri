import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToggleNavbar from "../navbar/ToggleNavbar";
import { CgArrowLongRight } from "react-icons/cg";
import { styles } from "../../styles";

type Content = {
  [key: string]: { title: string; text: string; button: string };
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const children = ["one", "two", "three"];

  useEffect(() => {
    const timer = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 6000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = children.length - 1;
    } else if (newIndex >= children.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const content: Content = {
    one: {
      title: "New Arrivals",
      text: "Create Your Own",
      button: "Explore Now",
    },
    two: {
      title: "Kitchen",
      text: "Stools with Style",
      button: "Explore Now",
    },
    three: {
      title: "Living Room",
      text: "New Arrivals",
      button: "Explore Now",
    },
  };

  return (
    <div className="relative h-screen w-full stack">
      <Navbar />
      <ToggleNavbar />
      {children.map((item, index) => (
        <div
          key={index}
          className={`bg-cover bg-center h-screen w-full bg-hero-${item} ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          } opacity ease-in-out duration-[2s]`}
        >
          <div className="absolute left-10 top-1/3 md:top-2/4 translate-y--2/4 flex">
            <div
              className={`border-solid border-black border-t-2 px-3 mx-6 mt-2 hidden md:block ${
                index === activeIndex
                  ? "translate-x-0 opacity-100"
                  : "translate-x-6 opacity-0"
              } transform ease-out duration-[1s]`}
            ></div>

            <div className="flex flex-col gap-4">
              <h1
                className={`${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[15rem]"
                } fader ease-out duration-[1s]`}
              >
                {content[item].title}
              </h1>
              <h4
                className={`text-5xl md:text-6xl ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[15rem]"
                } fader ease-out duration-[1s] delay-100`}
              >
                {content[item].text}
              </h4>
              <div
                className={`relative w-fit flex flex-col pb-3 group cursor-pointer z-[1] ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[15rem]"
                } fader ease-out duration-[1s] delay-100`}
              >
                <Link to="" className="text-sm">
                  {content[item].button}
                </Link>
                <span className="absolute w-1/5 h-0.5 bg-black bottom-0 group-hover:w-full transition-all duration-[0.5s] ease-in-out"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-10 left-10 mx-0 md:left-20 md:mx-6 flex gap-4">
        {children.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-[3.5px] rounded-full cursor-pointer ${
              index === activeIndex ? "bg-slate-900" : "bg-slate-400"
            }`}
          ></div>
        ))}
      </div>
      <a
        href="#explore"
        className="animate-bounce absolute bottom-8 right-4 flex flex-col gap-12 items-center cursor-pointer"
      >
        <p className="text-xs font-semibold rotate-90">SCROLL DOWN</p>
        <CgArrowLongRight className={`${styles.icon} rotate-90`} />
      </a>
    </div>
  );
};

export default Hero;

// ${
//   item === "one"
//     ? "bg-hero-one"
//     : item === "two"
//     ? "bg-hero-two"
//     : "bg-hero-three"
// }
