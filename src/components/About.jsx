// import React from 'react'

export const About = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-[#ccca68] lg:px-0">
            {/* Text Section */}
            <div className="w-full lg:w-[50%] py-6 text-center lg:text-left space-y-6 mt-8 lg:mt-0">
                <h1 className="text-4xl sm:text-6xl lg:text-[100px]">
                    Pure by Nature, <br /> Perfect by You.
                </h1>
                <p className="text-lg w-[80%] sm:text-xl lg:text-2xl lg:w-[70%] mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Tempore debitis sapiente, consectetur a eligendi at vitae voluptatibus? 
                    Impedit, aliquid. Laudantium amet expedita dolorum culpa ex sit ad, 
                    consectetur incidunt dolorem? Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Tempore debitis sapiente, consectetur a eligendi at 
                    vitae voluptatibus? Impedit, aliquid. Laudantium amet expedita dolorum 
                    culpa ex sit ad, consectetur incidunt dolorem?
                </p>
            </div>
               {/* Image Section */}
               <div className="w-full lg:w-[40%]">
                <img
                    src="./skinn.jpg"
                    alt="About"
                    className="h-[70vh] lg:h-screen w-full object-cover"
                />
            </div>
        </div>
    );
};
