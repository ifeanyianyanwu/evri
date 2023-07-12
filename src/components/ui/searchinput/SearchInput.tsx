import { useState, useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { styles } from "../../../styles";

type IProps = {};

const SearchInput = ({}: IProps) => {
  const [searchInputShown, setSearchInputShown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchBtnClick = () => {
    setSearchInputShown((prev) => !prev);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <>
      <div className="relative">
        <HiOutlineSearch
          className={`${styles.icon} z-[1]`}
          onClick={handleSearchBtnClick}
        />

        <input
          ref={inputRef}
          onBlur={() => setSearchInputShown(false)}
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className={`border-solid border-black border-b outline-none text-sm p-2 absolute top-0 h-full ${
            searchInputShown
              ? "left-[-200px] w-[190px] opacity-100"
              : "w-0 opacity-0 left-0 -z-[1]"
          } transition-all duration-700 `}
        />
      </div>
    </>
  );
};

export default SearchInput;
