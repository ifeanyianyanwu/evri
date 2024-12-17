import { Section, Container } from "../../layout";
import { brands } from "../../helper";

const Brands = () => {
  return (
    <Section background="cream">
      <Container className="flex gap-8 items-center justify-between md:flex-row flex-col">
        {brands.map((item) => (
          <div key={item.brand.name}>
            <img
              key={item.brand.name}
              loading="lazy"
              src={item.brand.logo}
              alt="brand logo"
              className="w-full h-full"
            />
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default Brands;
