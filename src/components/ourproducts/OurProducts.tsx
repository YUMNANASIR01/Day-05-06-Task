"use client"
import React, { useEffect, useState } from 'react';
import { ProductCard } from '../productCard/productCard';
import Link from 'next/link';

export interface Product {
  salePercentage: any;
  name: string;
  imageUrl: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  description: string;
  isNew: boolean;
  _id: string;
  title: string;
  id: string;
  image: string;
}

function OurProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://template6-six.vercel.app/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* Product Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Title */}
          <h2 className="mb-8 text-center text-3xl font-bold">Our Products</h2>
          
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <>
              {/* Product Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 exsm:pl-0 justify-items-center">
                {products.map((product: Product, index: number) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>

              {/* Show More Button */}
              <div className="mt-8 flex justify-center">
                <Link href="/shop">
                  <button className="border-2 border-[#B88E2F] px-8 py-2 text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors">
                    Show More
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default OurProducts;