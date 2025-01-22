import Image from 'next/image'

export default function BeautifulRoom() {
  return (
    <section className="relative bg-[#fcf8f3] min-h-screen w-full px-4 py-8 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left text content */}
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button className="w-fit px-6 py-3 bg-[#B88E2F] text-white font-bold rounded-md hover:bg-[#a17928] transition-colors">
            Explore More
          </button>
        </div>

        {/* Right images grid */}
        <div className="w-full mt-8 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* Image 1 */}
            <div className="relative w-full aspect-[9/16] sm:aspect-[3/4]">
              <Image
                src="/room1.png"
                alt="Inspirational room design 1"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] sm:mt-12">
              <Image
                src="/room2.png"
                alt="Inspirational room design 2"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Image 3 */}
            <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] lg:mt-24">
              <Image
                src="/room3.png"
                alt="Inspirational room design 3"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

