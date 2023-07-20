import BrandOne from "./assets/logo1.png";
import BrandTwo from "./assets/logo2.png";
import BrandThree from "./assets/logo3.png";
import BrandFour from "./assets/logo4.png";
import BrandFive from "./assets/logo5.png";

import imageone from "./assets/CTG-1.webp";
import imagetwo from "./assets/CTG-2.webp";
import imagethree from "./assets/CTG-3.webp";

type ExploreContents = {
  content: {
    title: string;
    link: string;
    img: string;
  };
}[];

type HeroContents = {
  content: {
    title: string;
    text: string;
    link: string;
    bg: string;
  };
}[];

export const sortOptions = [
  { name: "Name: A-Z", value: "ascending" },
  { name: "Name: Z-A", value: "descending" },
  { name: "Price: Lowest", value: "lowToHigh" },
  { name: "Price: Highest", value: "highToLow" },
];

export const brands = [
  { brand: { name: "home sweet", logo: BrandOne } },
  { brand: { name: "cr br", logo: BrandTwo } },
  { brand: { name: "foga home", logo: BrandThree } },
  { brand: { name: "craft", logo: BrandFour } },
  { brand: { name: "black and white", logo: BrandFive } },
];

export const heroContents: HeroContents = [
  {
    content: {
      title: "New Arrivals",
      text: "Create Your Own",
      link: "Explore Now",
      bg: "bg-hero-one",
    },
  },
  {
    content: {
      title: "Kitchen",
      text: "Stools with Style",
      link: "Explore Now",
      bg: "bg-hero-two",
    },
  },
  {
    content: {
      title: "Living Room",
      text: "New Arrivals",
      link: "Explore Now",
      bg: "bg-hero-three",
    },
  },
];

export const explore: ExploreContents = [
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
