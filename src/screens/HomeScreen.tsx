import { Button, HStack } from "@chakra-ui/react";

import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";
import { useProductList } from "@/fetchers/product";

export default function HomeScreen() {
  const { products, isLoading } = useProductList();
  return (
    <>
      <h1>Home</h1>
      <Button size="2xl" margin="3">
        Click Me
      </Button>

      {isLoading ? (
        <Loading />
      ) : (
        <HStack flexWrap="wrap">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </HStack>
      )}
    </>
  );
}
