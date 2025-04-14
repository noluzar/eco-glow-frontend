import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:pl-[10%] lg:px-0 space-y-8 lg:space-y-0 lg:space-x-6 sm:pt-[50px]">
      <div className="lg:w-[60%] pt-[5%] space-y-6 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-[100px]">
          Pure by Nature, <br /> Perfect by You.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl lg:w-[80%] mx-auto lg:mx-0">
          Indulge in the pure essence of nature with our organic skincare line,
          crafted with ingredients sourced directly from the earth. Each product
          is thoughtfully formulated to nourish and rejuvenate your skin,
          bringing out your natural radiance without harsh chemicals or
          artificial additives.
        </p>
        <div>
          <Link
            to={`${userInfo?.isAdmin ? "/admin/products" : "/userproducts"}`}
            className="border-none bg-[#afad55] text-white py-2 px-6 sm:px-8 rounded-md hover:bg-[#9d9a4b] transition"
          >
            <button>View Products</button>
          </Link>
        </div>
      </div>

      <div className="lg:w-[45%] lg:h-auto w-full">
        <img
          src="./skin.jpg"
          alt="Skincare"
          className="w-full h-[80vh] object-fill"
        />
      </div>
    </div>
  );
};
