import { Button, Card, Image, Text } from "@chakra-ui/react";

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={
          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        }
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>{props.title}</Card.Title>
        <Card.Description>{props.description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $ {props.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
}
