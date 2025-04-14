import { useEffect } from "react";
import { useProductStore } from "../store/product";
import { IoCartOutline, IoStarSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';


const ProductDetails = () => {
  const { fetchProductsById, product } = useProductStore();
  const { userInfo } = useSelector((state) => state.auth);

  const {id} = useParams();

  console.log(product);

  useEffect(() => {
    fetchProductsById(id);
  }, [fetchProductsById, id]);
  
  return (
    <div className="h-screen pt-[100px] p-4">
      <Link to={`${userInfo.isAdmin? '/admin/products' : '/userproducts'}`} className="flex items-center space-x-4 text-white bg-[#afad55] p-2 justify-center rounded-md text-lg w-[200px]">
        <IoIosArrowBack />
        <button>Back to products</button>
      </Link>
      <div className="flex p-11 justify-center space-x-[100px]">
            <div key={product._id} className="h-[60vh] w-[40%] bg-[#f1e2c2] p-4">
              <img
                src={product.image || "/default-image.jpg"}
                alt={product.name}
                className="w-full h-full object-fill"
              />
        </div>
        <div className="w-[40%] space-y-4">
            <div key={product._id} className="space-y-4 text-md h-full">
              <p className="text-3xl font-semibold">{product.name}</p>
              <p className="text-gray-500">{product._id}</p>
              <div className="flex space-x-2 text-[#afad55] items-center text-lg">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <p className="text-black text-md">214 Reviews</p>
              </div>
              <p className="text-xl">R{product.price}.00</p>
              <p className="h-[30vh]">{product.description}</p>
              <div className="flex space-x-4">
          <div className="w-[50%] border-black border p-2 text-center text-lg">
                <button>Buy Now</button>
              </div>
              <div className="w-[50%] flex items-center space-x-4 text-white bg-[#afad55] p-2 justify-center text-lg">
                <IoCartOutline />
                <button>Add to cart</button>
              </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
