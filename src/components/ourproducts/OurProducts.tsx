


"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

// ✅ Create image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source).url();

// ✅ Product Type Definition
export interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  isNew: boolean;
  tags: string[];
  discountPercentage: number;
  imageUrl: string;
}

function OurProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "product"] {
            _id,
            title,
            price,
            description,
            isNew,
            tags,
            discountPercentage,
            productImage
          }
        `);

        // ✅ Convert image references to URLs
        const formattedProducts = data.map((product: any) => ({
          ...product,
          imageUrl: product.productImage ? urlFor(product.productImage) : "",
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
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
              {products.map((product) => (
                <div key={product._id} className="p-4 border">
                  {/* ✅ Image now correctly loads */}
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={300}
                      height={200}
                      className="w-full h-auto"
                      priority
                    />
                  ) : (
                    <div className="w-[300px] h-[200px] bg-gray-300 flex items-center justify-center">
                      <p>No Image</p>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
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
  );
}

export default OurProducts;



















