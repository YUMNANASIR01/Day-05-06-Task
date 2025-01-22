import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import BlogCenter from "@/components/blogCenter/page";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { RelatedPost } from "@/constant/rp";

export default function Blog() {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start leading-normal tracking-normal">
      <main className="flex flex-col justify-start mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* heading */}

<section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Blog</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>
            <span>
              <Image src={"/rightA.png"} width={20} height={20} alt="arrow" />
            </span>
            <span>Blog</span>
          </div>
        </div>
      </section>

        

        {/* mainsection */}
        <section className="w-full mt-6 flex flex-col lg:flex-row items-start justify-start gap-6 lg:gap-10">
          {/* cards */}
          <div className="w-full">
            <BlogCenter />
          </div>

          {/* sidebar */}
          <aside className="relative w-full lg:w-1/3 flex flex-col items-center gap-6">
            <div className="relative w-full">
              <Input className="mb-6 h-12 w-full" />
              <div className="absolute top-3 right-4">
                <Search />
              </div>
            </div>

            <div className="bg-white w-full px-6">
              <h3 className="text-2xl font-semibold mb-6">Categories</h3>
              <ul className="space-y-4 text-darkgray">
                <li className="flex justify-between">
                  <a href="#" className="hover:text-black">Crafts</a>
                  <p>2</p>
                </li>
                <li className="flex justify-between">
                  <a href="#" className="hover:text-black">Design</a>
                  <p>8</p>
                </li>
                <li className="flex justify-between">
                  <a href="#" className="hover:text-black">Handmade</a>
                  <p>7</p>
                </li>
                <li className="flex justify-between">
                  <a href="#" className="hover:text-black">Interior</a>
                  <p>1</p>
                </li>
                <li className="flex justify-between">
                  <a href="#" className="hover:text-black">Wood</a>
                  <p>6</p>
                </li>
              </ul>
            </div>

            {/* related post */}
            <div className="border border-darkgray w-full px-6 py-4 mt-6">
              <h1 className="text-2xl font-medium mb-6">Recent Posts</h1>
              {RelatedPost.map((item: { src: string | StaticImport; heading: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                <div className="flex gap-3 mb-6" key={index}>
                  <Image src={item.src} width={80} height={80} alt="rp1" />
                  <div className="flex flex-col">
                    <p>{item.heading}</p>
                    <p className="text-gray-400">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* four-button div */}
        <div className="flex gap-4 items-center justify-center my-8">
          <Button className="w-12 h-12 text-lg bg-[#b88e2f]">1</Button>
          <Button className="w-12 h-12 text-lg bg-white text-black">2</Button>
          <Button className="w-12 h-12 text-lg bg-white text-black">3</Button>
          <Button className="w-12 h-12 text-lg bg-white text-black">Next</Button>
        </div>

        <Shopbottombar />
      </main>
    </div>
  );
}
