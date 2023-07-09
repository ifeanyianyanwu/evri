import Section from "../../layout/Section";
import Container from "../../layout/Container";
import BrandOne from "../../assets/logo1.png";
import BrandTwo from "../../assets/logo2.png";
import BrandThree from "../../assets/logo3.png";
import BrandFour from "../../assets/logo4.png";
import BrandFive from "../../assets/logo5.png";

const Brands = () => {
  const brands = [
    { brand: { name: "home sweet", logo: BrandOne } },
    { brand: { name: "cr br", logo: BrandTwo } },
    { brand: { name: "foga home", logo: BrandThree } },
    { brand: { name: "craft", logo: BrandFour } },
    { brand: { name: "black and white", logo: BrandFive } },
  ];

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
