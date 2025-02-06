import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
};

export function useProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((products: Product[]) => setProducts(products))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { products, isLoading };
}
