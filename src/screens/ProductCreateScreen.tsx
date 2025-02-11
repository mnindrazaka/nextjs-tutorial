import { Button, Input } from "@chakra-ui/react";
import { useProductCreate } from "@/fetchers/product";

export default function ProductCreateScreen() {
  const { formState, handleSubmit, isLoading, onSubmit, register } =
    useProductCreate();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input placeholder="Enter your title" {...register("title")} />
        {/* optional chaining */}
        <p style={{ color: "red" }}>{formState.errors.title?.message}</p>
      </div>
      <div>
        <Input placeholder="Enter your price" {...register("price")} />
        <p style={{ color: "red" }}>{formState.errors.price?.message}</p>
      </div>
      <div>
        <Input
          placeholder="Enter your description"
          {...register("description")}
        />
        <p style={{ color: "red" }}>{formState.errors.description?.message}</p>
      </div>
      <div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
