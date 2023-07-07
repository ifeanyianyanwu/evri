import Navbar from "../navbar/Navbar";
import React, { useEffect, useState } from "react";
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
    <div className="relative h-screen w-full">
      <Navbar />
      {children.map((item, index) => (
        <div
          key={index}
          className={`inset-0 bg-cover bg-center absolute z-[-5] bg-hero-${item} ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          } opacity ease-in-out duration-[2s]`}
        >
          <div className="absolute left-10 top-2/4 translate-y--2/4 flex">
            <div
              className={`border-solid border-black border-t-2 px-3 mx-6 mt-2 ${
                index === activeIndex
                  ? "translate-x-0 opacity-100"
                  : "translate-x-6 opacity-0"
              } transform ease-out duration-[1s]`}
            ></div>

            <div>
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