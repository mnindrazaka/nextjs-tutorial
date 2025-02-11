import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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

type ProductFormValues = {
  title: string;
  price: number;
  description: string;
};

const productSchema = yup.object({
  title: yup.string().required().min(3),
  price: yup.number().positive().integer().required(),
  description: yup.string().required(),
});

export function useProductCreate() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<ProductFormValues>({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = (values: ProductFormValues) => {
    setIsLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        images: ["https://google.com"],
        categoryId: 1,
      }),
    }).then(() => {
      setIsLoading(false);
      router.push("/");
    });
  };

  return { register, handleSubmit, formState, onSubmit, isLoading };
}

export const useProductForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return { title, description, setTitle, setDescription };
};
