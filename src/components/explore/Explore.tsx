import { Container, Section } from "../../layout";
import { Link } from "react-router-dom";
import { explore } from "../../helper";

const Explore = () => {
  return (
    <Section id="explore">
      <Container className="flex gap-10 flex-col md:flex-row mt-11 sm:mt-16">
        {explore.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden group/item ${
              index === explore.length - 1 ? "lg:block block md:hidden" : ""
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
                <Link to="/shop" className="text-sm text-gray-600">
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
