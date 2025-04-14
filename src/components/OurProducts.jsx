import React from "react";

const products = [
  { name: "Cream", image: "cream.png" },
  { name: "Serum", image: "serum.png" },
  { name: "Lotion", image: "lotion.png" },
  { name: "Sunscreen", image: "sunblock.png" },
  { name: "Coconut Oil", image: "coconut.png" },
];

const OurProducts = () => {
  return (
    <div className="bg-[#f6e9db] px-6 py-12 lg:py-20 space-y-10">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
        OUR PRODUCTS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 text-xl font-semibold">
            <div className="bg-[#f1e2c2] rounded-full p-6 md:p-8 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-14 md:w-20" />
            </div>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
