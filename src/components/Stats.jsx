// import React from "react";

const Stats = () => {
  return (
    <div className="bg-[#f1e2c2] p-6 sm:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-[#afad55] font-bold text-3xl sm:text-4xl md:text-5xl">
            25,356
          </p>
          <p className="text-base sm:text-lg md:text-2xl">Happy Customers</p>
        </div>
        <div>
          <p className="text-[#afad55] font-bold text-3xl sm:text-4xl md:text-5xl">
            6,050
          </p>
          <p className="text-base sm:text-lg md:text-2xl">Followers</p>
        </div>
        <div>
          <p className="text-[#afad55] font-bold text-3xl sm:text-4xl md:text-5xl">
            851
          </p>
          <p className="text-base sm:text-lg md:text-2xl">Shops</p>
        </div>
        <div>
          <p className="text-[#afad55] font-bold text-3xl sm:text-4xl md:text-5xl">
            95%
          </p>
          <p className="text-base sm:text-lg md:text-2xl">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
