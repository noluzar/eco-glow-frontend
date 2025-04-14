// import React from 'react'

export const Subscribe = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-8 space-y-8 lg:space-y-0 h-auto lg:h-[30vh]">
      {/* Newsletter Section */}
      <div className="lg:w-[50%] space-y-6 text-center lg:text-left">
        <div>
          <h1 className="font-semibold text-3xl lg:text-5xl">Our Newsletter</h1>
          <p className="text-lg lg:text-xl">Subscribe to our Newsletter and get updated</p>
        </div>
        <div className="bg-white flex items-center justify-between h-12 rounded-md shadow-md overflow-hidden">
          <input
            placeholder="Enter your email"
            className="pl-4 flex-grow outline-none text-sm lg:text-base"
          />
          <button className="bg-[#afad55] w-[30%] h-full text-white font-medium">
            Subscribe
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="lg:w-[45%] space-y-4 text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl">Pure by Nature, Perfect by You.</h1>
        <p className="text-sm lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
          consequuntur explicabo voluptatibus accusantium.
        </p>
      </div>
    </div>
  );
};
