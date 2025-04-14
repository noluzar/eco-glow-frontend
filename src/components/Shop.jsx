import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useProductStore } from "../store/product";

const Shop = () => {
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
    <div className="space-y-12 px-6 py-12 lg:py-20 bg-[#f1e2c2]">
      <h1 className="text-3xl lg:text-5xl text-center font-semibold">
        SHOP OUR PRODUCTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-[#f6e9db] p-4"
          >
            <Link to={`/details/${item._id}`} className="h-64 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </Link>
            <div className="mt-4 flex justify-between items-center text-lg font-medium">
              <p>{item.name}</p>
              <p>R{item.price}.00</p>
            </div>
            <hr className="my-2" />
            <button className="w-full bg-[#afad55] py-2 text-white hover:bg-[#9d9a4b]" 
            onClick={() => addToCartHandler(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
