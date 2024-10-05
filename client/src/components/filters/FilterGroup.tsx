import { ReactNode } from "react";

export const FilterGroup = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="border-solid border-gray-300 border-b py-8 grid gap-2">
      <h4 className="text-gray-700 mb-3 text-base font-medium">{title}</h4>
      {children}
    </div>
  );
};
