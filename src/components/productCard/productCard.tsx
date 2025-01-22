// src\components\productCard\productCard.tsx
import Image from "next/image";
import { Heart, Share2, LayoutGrid } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Product } from "@/constant/pro1";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Helper function to format price
  const formatPrice = (price: number, currency: string = 'Rp') => {
    return `${currency} ${price.toLocaleString()}`;
  };

  return (
    <>
    <div 
      className={`group relative w-full max-w-xs sm:max-w-sm exsm:max-w-[320px] lg:max-w-md ${product.id === '2' ? 'overlay-wrapper' : ''}`}
    >
      {/* Card Overlay for ID 2 */}
      {/* {product.id === '2' && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 pointer-events-none"></div>
      )} */}

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.imageUrl} // Ensure correct image path
          alt={product.name}
          className="object-cover transition-transform group-hover:scale-105"
          fill
        />
        {/* Product Tag */}
        {product.tag && (
          <div
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-sm text-white
              ${product.tag === 'new' ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {product.tag === 'new' ? 'New' : `-${product.salePercentage}%`}
          </div>
        )}
        
        {/* Card Action Buttons (appears on hover) */}
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-0 p-4 transition-all group-hover:bg-opacity-20">
          <div className="flex justify-center space-x-4 opacity-0 transition-opacity group-hover:opacity-100">
            <Button variant="ghost" size="icon" className="h-10 w-10 bg-white">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 bg-white">
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 bg-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium">{product.name}</h3>
        {/* <p className="text-sm text-gray-500">{product.description}</p> */}

        {/* Price and Discount Section */}
        <div className="flex items-center space-x-2">
          {/* <span className="text-lg font-bold">{formatPrice(product.price)}</span> */}
          {/* {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )} */}
        </div>
      </div>

      {/* Add to Cart Button for specific product ID */}
      {product.id === '2' && (
        <Button className="mt-2 w-full bg-[#B88E2F] hover:bg-[#A17B2A] text-white">
          Add to cart
        </Button>
      )}
    </div>
    </>
  );
}
