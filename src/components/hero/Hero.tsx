import Navbar from "../navbar/Navbar";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

type Content = {
  [key: string]: { title: string; text: string; button: string };
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const children = ["one", "two", "three"];

  useEffect(() => {
    const timer = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);

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
      {children.map((item, index) => (
        <div
          key={index}
          className={`bg-cover bg-center h-screen w-full bg-hero-${item} ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          } opacity ease-in-out duration-[2s]`}
        >
          <div className="absolute left-10 top-2/4 translate-y--2/4 flex">
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
                className={`text-6xl ${
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
                <Link to="" className="">
                  {content[item].button}
                </Link>
                <span className="absolute w-1/5 h-0.5 bg-black bottom-0 group-hover:w-full transition-all"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
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
