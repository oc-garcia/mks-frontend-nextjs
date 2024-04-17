import { CartContext } from "@/contexts/cart/CartContext";
import { CartContextType } from "@/interfaces/cart/ICartContextType";
import { IProduct } from "@/interfaces/product/IProduct";
import { Card, CardBody, Button, Image, CardHeader, CardFooter, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";

interface IProductCardProps {
  product: IProduct;
}

const CardBodyContainer = styled(Flex)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  h2 {
    font-weight: 400;
    font-size: 16px;
    color: #2c2c2c;
  }
  span {
    font-weight: 700;
    font-size: 15px;
    padding: 2px;
    background-color: #373737;
    color: #fff;
    border-radius: 5px;
  }
`;

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext) as CartContextType;

  return (
    <Card h={"20rem"} display={"flex"} boxShadow={"dark-lg"} bgColor={"white"}>
      <CardHeader display={"flex"} alignItems={"center"} justifyContent={"center"} h={"55%"} w={"100%"}>
        <Image h={"100%"} src={product.photo} alt={product.name} objectFit={"cover"} objectPosition={"center"} />
      </CardHeader>
      <CardBody px={5}>
        <CardBodyContainer>
          <h2>{product.name}</h2>
          <span>
            {Number(product.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </CardBodyContainer>
        <Text mt={2} fontSize={10}>
          {product.description}
        </Text>
      </CardBody>
      <CardFooter p={0}>
        <Button
          pt={0}
          flex={1}
          colorScheme={"blue"}
          backgroundColor={"customBlue"}
          size={"sm"}
          leftIcon={<FiShoppingBag />}
          borderTopRadius={0}
          onClick={() => addProductToCart(product)}
          borderBottomRadius={"md"}>
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
