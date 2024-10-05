import { useEffect, useState, ReactNode } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const Rating = ({ ratings }: { ratings: number | undefined }) => {
  const [rating, setRating] = useState<ReactNode[]>();

  const stars: ReactNode[] = [
    <AiOutlineStar className="text-yellow-400" />,
    <AiOutlineStar className="text-yellow-400" />,
    <AiOutlineStar className="text-yellow-400" />,
    <AiOutlineStar className="text-yellow-400" />,
    <AiOutlineStar className="text-yellow-400" />,
  ];

  useEffect(() => {
    if (ratings !== undefined) {
      const ratingStars = Math.round(ratings);
      stars.fill(<AiFillStar className="text-yellow-400" />, 0, ratingStars);
      setRating(stars);
    }
  }, [ratings]);

  return (
    <div className="flex gap-[2px]">
      {rating?.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
