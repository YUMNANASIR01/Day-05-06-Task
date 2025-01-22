"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { PcSection } from "@/constant/pcSection";
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";
import PcSectionTwo from "@/components/pcSectiontwo/PcSectionTwo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ProductComparisonContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

 

  return (
    <>
      <div className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-16 mb-12">
        <div className="container text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4 font-poppins">Product Comparison</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <span>
              <Image src="/rightA.png" width={20} height={20} alt="arrow" />
            </span>
            <span>Comparison</span>
          </div>
        </div>
      </div>

      <section className="m-auto pb-[112px]">
        {id && !isNaN(Number(id)) && <PcSectionTwo id={Number(id)} />}

        <div className="mt-[42px] px-[16px] sm:px-[50px]">
          {PcSection.map((section, index) => (
            <div key={index} className="mt-[96px]">
              <h3 className="text-[18px] sm:text-2xl font-medium">{section.heading}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="w-full border-r border-gray-300">
                  <div className="font-medium mt-[28px] mb-[34px]">{section.one}</div>
                  <div className="font-medium mb-[34px]">{section.two}</div>
                  <div className="font-medium mb-[34px]">{section.three}</div>
                  <div className="font-medium mb-[34px]">{section.four}</div>
                </div>

                <div className="w-full border-r border-gray-300">
                  <div className="mb-[34px] mt-[28px]">{section.five}</div>
                  <div className="mb-[34px]">{section.six}</div>
                  <div className="mb-[34px]">{section.seven}</div>
                  <div className="mb-[34px]">{section.eight}</div>
                </div>
                <div className="w-full border-r border-gray-300">
                  <div className="mb-[34px] mt-[28px]">{section.nine}</div>
                  <div className="mb-[34px]">{section.ten}</div>
                  <div className="mb-[34px]">{section.eleven}</div>
                  <div className="mb-[34px]">{section.twelve}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-[53px] mb-[50px] gap-[24px] sm:gap-[108px] flex-wrap">
          <div />
          <Link href="/cart">
            <Button className="exsm:hidden sm:block text-[16px] sm:text-[20px] leading-[30px] py-[12px] sm:py-[17px] px-[12px] sm:px-8 lg:px-12 w-[160px] sm:w-[215px] bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white h-16">
              Add To Cart
            </Button>
          </Link>

          <Link href="/cart">
            <Button className="text-[16px] sm:text-[20px] leading-[30px] w-[160px] sm:w-[215px] py-[12px] sm:py-[17px] px-[12px] sm:px-8 lg:px-12 bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white h-16">
              Add To Cart
            </Button>
          </Link>
        </div>

        <Shopbottombar />
      </section>
    </>
  );
}

function ProductComparison() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductComparisonContent />
    </Suspense>
  );
}

export default ProductComparison;