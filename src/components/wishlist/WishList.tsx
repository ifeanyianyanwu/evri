import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showWishlist } from "../../store/features/modals/modalsSlice";
import { HiX } from "react-icons/hi";
import { styles } from "../../styles";
import EmptyBag from "../../assets/EmptyBag";
import WishlistItem from "./WishListItem";

const WishList = () => {
  const dispatch = useAppDispatch();

  const wishlistShown = useAppSelector((state) => state.modals.wishlistShown);

  const numberOfItemsInWishlist = useAppSelector(
    (state) => state.wishlist.numberOfItemsInWishlist
  );
  const wishlistItems = useAppSelector((state) => state.wishlist.wishlistItems);

  const handleCloseBtnClick = () => {
    dispatch(showWishlist(false));
  };

  const wishlist: Element = document.getElementById("wishlist") as Element;

  return (
    <>
      {createPortal(
        <>
          <div
            className={`flex flex-col fixed top-0 right-0 sm:w-1/2 w-full h-screen h-svh bg-white overflow-hidden z-30 transition-all duration-[0.6s] ${
              wishlistShown
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex justify-between px-[5%] md:px-10 py-7 items-center gap-6 w-full">
              <p>Wish List ({numberOfItemsInWishlist})</p>
              <HiX
                className={`${styles.icon} sm:ml-auto ml-0`}
                onClick={handleCloseBtnClick}
              />
            </div>

            <div className="flex gap-10 px-[5%] md:px-10 flex-col overflow-auto bg-white flex-grow ">
              {numberOfItemsInWishlist === 0 ? (
                <div className="grid gap-6 place-content-center w-full h-full">
                  <EmptyBag />
                  <p className="text-gray-400">No Product in your List</p>
                </div>
              ) : (
                <div className="flex gap-8 flex-col">
                  {wishlistItems.map((item) => (
                    <WishlistItem key={item.id} product={item} />
                  ))}
                </div>
              )}
            </div>
            <div className="py-6"></div>
          </div>
          {wishlistShown && (
            <div
              className="fixed inset-0 bg-slate-900 opacity-70 z-20 sm:block hidden"
              onClick={handleCloseBtnClick}
            ></div>
          )}
        </>,
        wishlist
      )}
    </>
  );
};

export default WishList;
