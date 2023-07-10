import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";
import imageone from "../../assets/CTG-1.webp";
import imagetwo from "../../assets/CTG-2.webp";
import imagethree from "../../assets/CTG-3.webp";

type Contents = {
  content: {
    title: string;
    link: string;
    img: string;
  };
}[];

const Explore = () => {
  const contents: Contents = [
    {
      content: {
        title: "Simplicity",
        link: "Explore Now",
        img: imageone,
      },
    },
    {
      content: {
        title: "Your Space",
        link: "Shop Accessories",
        img: imagetwo,
      },
    },
    {
      content: {
        title: "Loft Chair",
        link: "Shop Now",
        img: imagethree,
      },
    },
  ];

  return (
    <Section id="explore">
      <Container className="flex gap-10 flex-col md:flex-row mt-11 sm:mt-16">
        {contents.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden group/item ${
              index === contents.length - 1 ? "lg:block block md:hidden" : ""
            }`}
          >
            <img
              src={item.content.img}
              alt="image"
              className="w-full group-hover/item:scale-110 transition-all duration-[1s] ease-in-out"
            />
            <div className="absolute top-10 left-10 flex flex-col gap-4">
              <h1 className="text-2xl  text-gray-700 font-base">
                {item.content.title}
              </h1>
              <div
                className={`relative w-fit flex flex-col pb-3 group cursor-pointer fader ease-out duration-[1s] delay-100`}
              >
                <Link to="" className="text-sm text-gray-600">
                  {item.content.link}
                </Link>
                <span className="absolute w-1/5 h-0.5 bg-gray-600 bottom-0 group-hover:w-full transition-all duration-[0.5s] ease-in-out"></span>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default Explore;
