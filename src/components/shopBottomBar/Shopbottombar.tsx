import React from 'react'
import Image from 'next/image'

function Shopbottombar() {
  return (
    <section className="w-full bg-[#f9f1e7] py-6 md:py-12">
      {/* Main container */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* 1st Div - High Quality */}
          <div className="flex items-center space-x-4 p-4 hover:bg-white/50 rounded-lg transition-colors">
            <div className="flex-shrink-0">
              <Image
                src="/trophy 1.png"
                alt="trophy"
                width={48}
                height={48}
                className="w-12 h-12 md:w-[60px] md:h-[60px]"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg md:text-[22px] lg:text-[25px] leading-tight">
                High Quality
              </h2>
              <p className="font-medium text-sm md:text-lg lg:text-[20px] text-[#898989] leading-snug">
                crafted from top materials
              </p>
            </div>
          </div>

          {/* 2nd Div - Warranty Protection */}
          <div className="flex items-center space-x-4 p-4 hover:bg-white/50 rounded-lg transition-colors">
            <div className="flex-shrink-0">
              <Image
                src="/guarantee.png"
                alt="guarantee"
                width={48}
                height={48}
                className="w-12 h-12 md:w-[60px] md:h-[60px]"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg md:text-[22px] lg:text-[25px] leading-tight">
                Warranty Protection
              </h2>
              <p className="font-medium text-sm md:text-lg lg:text-[20px] text-[#898989] leading-snug">
                Over 2 years
              </p>
            </div>
          </div>

          {/* 3rd Div - Free Shipping */}
          <div className="flex items-center space-x-4 p-4 hover:bg-white/50 rounded-lg transition-colors">
            <div className="flex-shrink-0">
              <Image
                src="/shipping.png"
                alt="shipping"
                width={48}
                height={48}
                className="w-12 h-12 md:w-[60px] md:h-[60px]"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg md:text-[22px] lg:text-[25px] leading-tight">
                Free Shipping
              </h2>
              <p className="font-medium text-sm md:text-lg lg:text-[20px] text-[#898989] leading-snug">
                Order over $150
              </p>
            </div>
          </div>

          {/* 4th Div - 24/7 Support */}
          <div className="flex items-center space-x-4 p-4 hover:bg-white/50 rounded-lg transition-colors">
            <div className="flex-shrink-0">
              <Image
                src="/cust.png"
                alt="customer support"
                width={48}
                height={48}
                className="w-12 h-12 md:w-[60px] md:h-[60px]"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg md:text-[22px] lg:text-[25px] leading-tight">
                24/7 Support
              </h2>
              <p className="font-medium text-sm md:text-lg lg:text-[20px] text-[#898989] leading-snug">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shopbottombar

