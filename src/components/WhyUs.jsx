import { FaLeaf } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiSolidBadgeCheck } from "react-icons/bi";

const WhyUs = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6 md:px-10 py-12 lg:py-20 bg-[#f6e9db]">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          WHY ECOGLOW?
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iste voluptas, veritatis beatae corporis illum nostrum aut optio odit accusantium ullam soluta natus ratione maxime id animi.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="space-y-4 flex flex-col items-center">
          <FaLeaf className="size-14 sm:size-16 md:size-20 lg:size-24 text-[#afad55]" />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Natural</p>
          <p className="text-sm sm:text-base md:text-lg">
            Yourself required no at thoughts delicate landlord it be.
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <MdDoNotDisturbAlt className="size-14 sm:size-16 md:size-20 lg:size-24 text-[#afad55]" />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">No Side Effects</p>
          <p className="text-sm sm:text-base md:text-lg">
            Yourself required no at thoughts delicate landlord it be.
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <BiSolidBadgeCheck className="size-14 sm:size-16 md:size-20 lg:size-24 text-[#afad55]" />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">100% Organic</p>
          <p className="text-sm sm:text-base md:text-lg">
            Yourself required no at thoughts delicate landlord it be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
