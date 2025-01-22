import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  tags?: {
    text: string;
    variant: "destructive" | "default" | "green";
  };
}

interface RelatedProductsProps {
  product: Promise<Product[]>; // Accept a Promise
}

function formatPrice(price: number, currency: string = "Rs"): string {
  return `${currency} ${price.toLocaleString()}`;
}

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const data = await product;
      setProducts(data);
      setLoading(false);
    }

    fetchProducts();
  }, [product]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const displayedProducts = products.slice(0, 4);

  if (displayedProducts.length >= 3) {
    displayedProducts[2] = {
      ...displayedProducts[2],
      tags: {
        text: "New",
        variant: "green",
      },
    };
  }

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-[120px]">
          {displayedProducts.map((product, index) => (
            <Card key={product.id} className="group relative overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {index === 2 && product.tags && (
                    <Badge
                      variant={product.tags.variant === "green" ? "default" : product.tags.variant}
                      className={`absolute top-4 right-4 px-2 py-1 ${
                        product.tags.variant === "green" ? "bg-green-500 hover:bg-green-600" : ""
                      }`}
                    >
                      {product.tags.text}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-6">
                <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition-colors text-[#b88e2f]"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}