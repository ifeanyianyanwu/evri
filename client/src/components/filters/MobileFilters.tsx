import React from "react";
import { HiX } from "react-icons/hi";
import { styles } from "../../styles";
import { createPortal } from "react-dom";
import { FilterOptions } from "./FilterOptions";
import { IProductProp } from "./Sidebar";

type IProps = {
  showFilterModal: boolean;
  setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
} & IProductProp;

const MobileFilters = ({
  showFilterModal,
  setShowFilterModal,
  products,
}: IProps) => {
  const handleCloseBtnClick = () => {
    setShowFilterModal(false);
  };

  const filters: Element = document.getElementById("filters") as Element;

  return (
    <>
      {createPortal(
        <>
          <div
            className={`md:hidden flex flex-col fixed top-0 left-0 sm:w-1/2 w-full h-screen h-svh bg-white overflow-auto pb-10 z-30 transition-all duration-[0.6s] ${
              showFilterModal
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100%] opacity-0"
            }`}
          >
            <div className="flex justify-between px-[5%] md:px-10 py-4 items-center gap-6 w-full">
              <HiX
                className={`${styles.icon} sm:ml-auto ml-0`}
                onClick={handleCloseBtnClick}
              />
            </div>
            <div className="p-4">
              <FilterOptions products={products} />
            </div>
          </div>
          {showFilterModal && (
            <div
              className="fixed inset-0 bg-slate-900 opacity-70 z-20 sm:block md:hidden hidden"
              onClick={handleCloseBtnClick}
            ></div>
          )}
        </>,
        filters
      )}
    </>
  );
};

export default MobileFilters;
