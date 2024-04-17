import { Card, CardBody, Button, Image, CardHeader, CardFooter, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FiShoppingBag } from "react-icons/fi";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card h={300} w={"100%"} display={"flex"} boxShadow="dark-lg" bgColor={"white"}>
      <CardHeader h={"50%"} w={"100%"}>
        <Image src={product.photo} alt={product.name} />
      </CardHeader>
      <CardBody>
        <Flex>
          <h2>{product.name}</h2>
          <p>{Number(product.price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        </Flex>
        <p>{product.description}</p>
      </CardBody>
      <CardFooter p={0}>
        <Button
          p={0}
          flex={1}
          colorScheme="blue"
          size="sm"
          leftIcon={<FiShoppingBag />}
          borderTopRadius={0}
          borderBottomRadius="md">
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
