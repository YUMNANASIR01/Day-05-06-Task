import React from 'react';
import Image from 'next/image';
import { browseRange } from '@/constant/browseRange';

function Browserange() {
  
  return (
    <section className="px-4 mx-auto mb-20 font-poppins w-full max-w-[1183px]">
      
      {/* Top Heading Section */}
      <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-2xl leading-[36px] font-bold text-black">
          Browse The Range
        </h1>
        <p className="text-sm leading-[24px] text-black mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Card Body Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {browseRange.map((item, index) => (
          <div
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
            key={index}
          >
            
            {/* Top Image Container */}
            <div>
              <Image
                src={item.src}
                alt={item.name}
                width={381}
                height={480}
                className="rounded-lg w-full max-w-[381px] h-auto"
              />
            </div>

            {/* Card Text Section */}
            <div className="mt-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black text-center">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Browserange;

