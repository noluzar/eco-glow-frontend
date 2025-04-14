import { useEffect } from "react";
import { useProductStore } from "../store/product";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";

export const UserProducts = () => {
  const { fetchProducts, products } = useProductStore();
  const dispatch = useDispatch();

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="pt-[60px] h-screen space-y-4">
      <p className="text-center font-semibold text-[50px] pt-[50px]">
        Curated With Premium Products <br /> For Self-Care
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((item, index) => (
          <div key={index} className="bg-[#f1e2c2] p-4">
            <Link to={`/details/${item._id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-[30vh] w-full"
              />
            </Link>
            <div className="mt-4 flex justify-between items-center text-lg font-medium">
              <p>{item.name}</p>
              <p>R{item.price}.00</p>
            </div>
            <hr className="my-2 text-black" />
            <button
              onClick={() => addToCartHandler(item)}
              className="w-full bg-[#afad55] py-2 text-white hover:bg-[#9d9a4b] transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
