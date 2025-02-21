//src\components\spmain\Spmain.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Heart, Star, StarHalf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { toast } from "sonner";
import { useAtom } from "jotai";
import { cartNumber } from "@/globalState/globalState";


function Spmain(props: {
  id: string;
  productName: string;
  productPrice: number;
  productImage: string;
  productDescription: string;
  dicountPercentage: number;
  tags: string;
  isNew: boolean;
}) {
  const {
    id,
    productName,
    productPrice,
    productImage,
    productDescription,
    dicountPercentage,
    tags,
    isNew,
  } = props;

  const [cartNum, setCartNum] = useAtom(cartNumber)

  const [cartVisible, setCartVisible] = useState(false);
  const [addToCart, setAddToCart] = useState(1);

  function handleAddToCartClick() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = cart.findIndex((item: any) => item.id === id);

    if (existingProductIndex >= 0) {
      // Update the quantity if the product already exists
      cart[existingProductIndex].quantity += addToCart;
    } else {
      // Add the product to the cart
      cart.push({
        id,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: addToCart,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartNum(cart.length)
    toast.success("Product added to cart!");
  }

  // funcion for increase quantity
  function handleAddToCart() {
    setAddToCart(addToCart + 1);
  }

  //function for decrease cart
  function handleDecreaseFromCart() {
    if (addToCart > 1) {
      setAddToCart(addToCart - 1);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setAddToCart(value);
    }
  }

  function handleWishlistClick() {
    toast.success("Item Added to Wishlist");
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    wishlist.push({ id, productName, productImage, productPrice });
    
    

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }

  return (
    <>
    <div className="relative w-full mt-[30px] mb-[100px] px-4 md:px-6 lg:px-10">
      {cartVisible && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setCartVisible(false)}
          ></div>
        </>
      )}

<div className="m-auto flex flex-col lg:flex-row gap-10 lg:justify-center">
        <div className="flex flex-col lg:flex-row gap-6 mt-10 lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex gap-4 lg:flex-col">
            {[...Array(4)].map((_, index) =>{return(

<div
                key={index}
                className="w-[60px] h-[60px] exsm:w-[70px] exsm:h-[70px] xsm:w-[76px] xsm:h-[80px] bg-[#f9f1e7] rounded-xl flex items-center justify-center"
              >
                <Image
                  src={productImage}
                  alt="Thumbnail"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] object-center rounded-md"
                />
              </div>
            )} )}
          </div>

          {/* Main Image */}
          <div className="relative bg-red-500 w-full max-w-[300px] md:max-w-[423px] h-[300px] md:h-[500px] rounded-lg flex items-center justify-center mx-auto exsm:mx-1 md:ml-[50px]">
  <Image
    src={productImage}
    alt="Main Image"
    fill
    style={{ objectFit: "cover" }}
    className="object-center rounded-md"
  />
</div>
        </div>

        <div className="w-full lg:w-[606px] space-y-6">
          <div className="text-center lg:text-left">
            <div className="flex gap-16">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">
                {productName}
              </h1>

              <button
                onClick={handleWishlistClick}
                aria-label="Wishlist"
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <p className="text-lg sm:text-2xl text-muted-foreground mt-10">
              $ {productPrice}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC700] text-primary"
                />
              ))}
              <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              5 Customer Reviews
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex justify-center items-center border rounded-md w-[100px] sm:w-[123px] h-[48px]">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none"
                onClick={handleDecreaseFromCart}
                disabled={addToCart <= 1}
              >
                -
              </Button>
              <input
                type="number"
                min={1}
                max={100}
                value={addToCart}
                onChange={handleInputChange}
                className="text-center w-12"
              />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none"
                onClick={handleAddToCart}
              >
                +
              </Button>
            </div>

            <Link href={"/cart"}>
              <Button
                variant="outline"
                className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-[15px]"
                onClick={handleAddToCartClick}
              >
                Add To Cart
              </Button>
            </Link>

            <Link
              href={`/productComparison?id=${id}&productName=${productName}&productPrice=${productPrice}&productImage=${productImage}&productDescription=${productDescription}&dicountPercentage=${dicountPercentage}`}
            >
              <Button
                variant="outline"
                className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]"
              >
                + Compare
              </Button>
            </Link>
          </div>

          <div className="bg-gray-200  w-full h-1"></div>

          <div className="flex justify-between text-gray-500">
            <p>New/Old: {isNew ? "New" : "Old"}</p>
          </div>

          <div className="flex justify-between text-gray-500">
            <p>Discount: {dicountPercentage ? "available" : "not available"}</p>
          </div>

          <div className="flex flex-col justify-between text-gray-500 ">
            <p className="underline">Tags:</p>
            <div className="mb-[40px]">
              {(tags ? tags.split(",") : []).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <p>Share:</p>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Spmain;






// //src\components\spmain\Spmain.tsx
// "use client";

// import { Button } from "@/components/ui/button";
// import { Heart, Star, StarHalf } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import React, { useState } from "react";
// import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
// import { toast } from "sonner";
// import { useAtom } from "jotai";
// import { cartNumber } from "@/globalState/globalState";


// function Spmain(props: {
//   id: string;
//   productName: string;
//   productPrice: number;
//   productImage: string;
//   productDescription: string;
//   dicountPercentage: number;
//   tags: string;
//   isNew: boolean;
// }) {
//   const {
//     id,
//     productName,
//     productPrice,
//     productImage,
//     productDescription,
//     dicountPercentage,
//     tags,
//     isNew,
//   } = props;

//   const [cartNum, setCartNum] = useAtom(cartNumber)

//   const [cartVisible, setCartVisible] = useState(false);
//   const [addToCart, setAddToCart] = useState(1);

//   function handleAddToCartClick() {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     const existingProductIndex = cart.findIndex((item: any) => item.id === id);

//     if (existingProductIndex >= 0) {
//       // Update the quantity if the product already exists
//       cart[existingProductIndex].quantity += addToCart;
//     } else {
//       // Add the product to the cart
//       cart.push({
//         id,
//         name: productName,
//         price: productPrice,
//         image: productImage,
//         quantity: addToCart,
//       });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     setCartNum(cart.length)
//     toast.success("Product added to cart!");
//   }

//   // funcion for increase quantity
//   function handleAddToCart() {
//     setAddToCart(addToCart + 1);
//   }

//   //function for decrease cart
//   function handleDecreaseFromCart() {
//     if (addToCart > 1) {
//       setAddToCart(addToCart - 1);
//     }
//   }

//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const value = parseInt(event.target.value);
//     if (!isNaN(value) && value >= 1 && value <= 100) {
//       setAddToCart(value);
//     }
//   }

//   function handleWishlistClick() {
//     toast.success("Item Added to Wishlist");
//     const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
//     wishlist.push({ id, productName, productImage, productPrice });
    
    

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }

//   return (
//     <>
//     <div className="relative w-full mt-[30px] mb-[100px] px-4 md:px-6 lg:px-10">
//       {cartVisible && (
//         <>
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-10"
//             onClick={() => setCartVisible(false)}
//           ></div>
//         </>
//       )}

//       <div className="m-auto flex flex-col lg:flex-row gap-10 lg:justify-center">
//         <div className="flex flex-col lg:flex-row gap-6 lg:w-1/2">
//           {/* Thumbnails */}
//           <div className="flex gap-4 lg:flex-col ">
//             {[...Array(4)].map((_, index) => (
//               <div
//                 key={index}
//                 className="w-[60px] h-[60px] md:w-[76px] md:h-[80px] bg-[#f9f1e7] rounded-xl flex items-center justify-center"
//               >
//                 <Image
//                   src={productImage}
//                   alt="Thumbnail"
//                   width={50}
//                   height={50}
//                   className="w-[50px] h-[50px] object-center rounded-md"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="relative w-full max-w-[300px] md:max-w-[423px] h-[300px] md:h-[500px] bg-[#f9f1e7] rounded-lg flex items-center justify-center ">
//             <Image
//               src={productImage}
//               alt="Main Image"
//               width={280}
//               height={480}
//               className="w-[280px] h-[480px] object-center rounded-md"
//             />
//           </div>
//         </div>

//         <div className="w-full lg:w-[606px] space-y-6">
//           <div className="text-center lg:text-left">
//             <div className="flex gap-16">
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">
//                 {productName}
//               </h1>

//               <button
//                 onClick={handleWishlistClick}
//                 aria-label="Wishlist"
//                 className="p-2 hover:bg-black/5 rounded-full transition-colors"
//               >
//                 <Heart className="w-6 h-6" />
//               </button>
//             </div>

//             <p className="text-lg sm:text-2xl text-muted-foreground mt-10">
//               Rs. {productPrice}
//             </p>
//           </div>

//           <div className="flex items-center justify-center lg:justify-start gap-2">
//             <div className="flex">
//               {[...Array(4)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC700] text-primary"
//                 />
//               ))}
//               <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
//             </div>
//             <span className="text-sm text-muted-foreground">|</span>
//             <span className="text-sm text-muted-foreground">
//               5 Customer Reviews
//             </span>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 items-center">
//             <div className="flex justify-center items-center border rounded-md w-[100px] sm:w-[123px] h-[48px]">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="rounded-none"
//                 onClick={handleDecreaseFromCart}
//                 disabled={addToCart <= 1}
//               >
//                 -
//               </Button>
//               <input
//                 type="number"
//                 min={1}
//                 max={100}
//                 value={addToCart}
//                 onChange={handleInputChange}
//                 className="text-center w-12"
//               />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="rounded-none"
//                 onClick={handleAddToCart}
//               >
//                 +
//               </Button>
//             </div>

//             <Link href={"/cart"}>
//               <Button
//                 variant="outline"
//                 className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-[15px]"
//                 onClick={handleAddToCartClick}
//               >
//                 Add To Cart
//               </Button>
//             </Link>

//             <Link
//               href={`/productComparison?id=${id}&productName=${productName}&productPrice=${productPrice}&productImage=${productImage}&productDescription=${productDescription}&dicountPercentage=${dicountPercentage}`}
//             >
//               <Button
//                 variant="outline"
//                 className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]"
//               >
//                 + Compare
//               </Button>
//             </Link>
//           </div>

//           <div className="bg-gray-200  w-full h-1"></div>

//           <div className="flex justify-between text-gray-500">
//             <p>New/Old: {isNew ? "New" : "Old"}</p>
//           </div>

//           <div className="flex justify-between text-gray-500">
//             <p>Discount: {dicountPercentage ? "available" : "not available"}</p>
//           </div>

//           <div className="flex flex-col justify-between text-gray-500 ">
//             <p className="underline">Tags:</p>
//             <div className="mb-[40px]">
//               {(tags ? tags.split(",") : []).map((item, index) => (
//                 <p key={index}>{item}</p>
//               ))}
//             </div>

//             <div className="flex gap-4 items-center">
//               <p>Share:</p>
//               <Link
//                 href="https://www.facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaFacebookSquare />
//               </Link>
//               <Link
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTwitterSquare />
//               </Link>
//               <Link
//                 href="https://www.linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Spmain;




















// "use client";
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// const Spmain = () => {
//   const [selectedImage, setSelectedImage] = useState(0)

//   const images = ["/images/product-1.png", "/images/product-2.png", "/images/product-3.png"]

//   const handleImageClick = (index: number) => {
//     setSelectedImage(index)
//   }

//   const handleAddToCartClick = () => {
//     // Add to cart logic here
//   }

//   return (
//     <div className="relative w-full mt-[30px] mb-[100px] px-2 sm:px-4 md:px-6 lg:px-10">
//       <div className="m-auto flex flex-col lg:flex-row gap-6 lg:gap-10 lg:justify-center">
//         <div className="flex flex-col items-center lg:flex-row gap-4 lg:gap-6 lg:w-1/2">
//           <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[423px] h-[300px] sm:h-[350px] md:h-[500px] bg-[#f9f1e7] rounded-lg flex items-center justify-center mb-6 lg:mb-0">
//             <Image
//               src={images[selectedImage] || "/placeholder.svg"}
//               alt={`Product Image ${selectedImage + 1}`}
//               width={300}
//               height={300}
//             />
//           </div>
//           <div className="flex gap-2">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`w-[60px] h-[60px] rounded-lg border border-gray-300 cursor-pointer ${
//                   selectedImage === index ? "border-black" : ""
//                 }`}
//                 onClick={() => handleImageClick(index)}
//               >
//                 <Image src={image || "/placeholder.svg"} alt={`Product Image ${index + 1}`} fill />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="w-full lg:w-[606px] space-y-4 sm:space-y-6">
//           <h2 className="text-[32px] font-bold">Product Name</h2>
//           <p className="text-[#737373] text-[16px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec volutpat nibh.
//           </p>
//           <div className="flex items-center gap-4">
//             <p className="text-[24px] font-bold">$199.99</p>
//             <p className="text-[#737373] line-through text-[16px]">$299.99</p>
//           </div>
//           <p className="text-[#737373] text-[16px]">In stock. Ships within 2-3 business days.</p>
//           <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
//             <Button
//               variant="outline"
//               className="w-full sm:w-[215px] h-[48px] rounded-[15px]"
//               onClick={handleAddToCartClick}
//             >
//               Add To Cart
//             </Button>
//             <Button variant="outline" className="w-full sm:w-[215px] h-[48px] rounded-[15px]">
//               + Compare
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Spmain

