
// src\app\cart\page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";
import { Trash } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Iproduct {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: string;
}

export default function Cart() {
  const [cardItems, setCardItems] = useState<Iproduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];
    setCardItems(updatedCart);
  }, []);

  function handleRemoveItem(index: number) {
    const removeCard = [...cardItems];
    removeCard.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(removeCard));
    setCardItems(removeCard);
  }

  return (
    <>
      {/* Banner Section */}
      <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 mb-6">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>
            <span>
              <Image src="/rightA.png" width={20} height={20} alt="arrow" />
            </span>
            <span>Cart</span>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
        {/* Left Div - Cart Items */}
        <div className="w-full lg:w-[817px]">
          <div className="bg-[#f9f1e7] w-full h-14 px-4 flex items-center text-[16px] leading-[24px]">
            <p className="w-1/4 text-center">Product</p>
            <p className="w-1/4 text-center">Price</p>
            <p className="w-1/4 text-center">Quantity</p>
            <p className="w-1/4 text-center">SubTotal</p>
          </div>

          {/* Cart Items */}
          {cardItems.map((item, index) => (
            <Card key={index} className="my-4">
              <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
                <div>
                  <Image
                    src={item.image}
                    alt="cart2"
                    width={108}
                    height={105}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#858484]">{item.name}</p>

                  <p className="text-[#9f9f9f]">Price: {item.price}</p>

                  <p className="text-[#9f9f9f]">Quantity: {item.quantity}</p>
                </div>

                <Button
                  variant="ghost"
                  onClick={() => {
                    handleRemoveItem(index);
                  }}
                >
                  <Trash size={28} fill="#b88e2f" className="mr-6" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-[393px]">
          <div className="w-[90%] max-w-[393px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto flex flex-col items-center bg-[#f9f1e7] p-4 sm:p-6 md:p-8 rounded-md">
            <div>
              <h1 className="text-[28px] sm:text-[32px] leading-[40px] sm:leading-[48px] text-center font-semibold mt-[15px] mb-[40px] sm:mb-[61px]">
                Cart Totals
              </h1>
            </div>

            <div className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] flex items-center justify-between w-full mb-[20px] sm:mb-[31px]">
              <p>Subtotal</p>
              <p className="text-[#a5a4ae]">$ {cardItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)}.00</p>
            </div>

            <div className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] flex items-center justify-between w-full">
              <p>Total</p>
              <p className="text-[#b88e2f] text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px]">
                $ {cardItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)}.00
              </p>
            </div>

            <div className="mt-[30px] sm:mt-[42px] mb-[50px] sm:mb-[80px]">
              <Link href={"/checkout"}>
                <Button
                  variant="outline"
                  className="w-full sm:w-[222px] border-black rounded-[12px] sm:rounded-[15px] text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] px-6 py-4 sm:px-10 sm:py-6"
                >
                  Check Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Shopbottombar />
    </>
  );
}
