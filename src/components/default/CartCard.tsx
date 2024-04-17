import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { ICartItems } from "@/interfaces/cart/ICartItems";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { CartContext } from "@/contexts/cart/CartContext";
import { CartContextType } from "@/interfaces/cart/ICartContextType";
import { useContext } from "react";
interface CartCardProps {
  product: ICartItems;
}

const CartCard: React.FC<CartCardProps> = ({ product }) => {
  const { addProductToCart, removeProductFromCart, decrementProductInCart } = useContext(
    CartContext
  ) as CartContextType;
  return (
    <Card w={"100%"} p={2} size={"sm"} direction={{ base: "column", sm: "row" }} variant="outline" position="relative">
      <IconButton
        aria-label="Delete item"
        icon={<FaTimes />}
        position="absolute"
        top={-2}
        right={-2}
        backgroundColor={"#000"}
        color={"#FFF"}
        fontSize={12}
        size={"sm"}
        borderRadius={"50%"}
        onClick={() => removeProductFromCart(product.id)}
      />
      <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
        <Image
          flex={1}
          objectFit="contain"
          maxW={{ base: "100%", sm: "100px" }}
          src={product.photo}
          alt={product.name}
        />

        <CardBody w={"100%"} flex={4}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Heading size="13px">{product.name}</Heading>
            <Flex flexDirection={"column"}>
              <Text fontSize={8}>Quant:</Text>
              <ButtonGroup
                h={25}
                py={1}
                isAttached
                display={"flex"}
                alignItems={"center"}
                border={"1px solid #BFBFBF"}
                borderRadius={"5px"}>
                <Button
                  size={"xs"}
                  fontSize={12}
                  variant="ghost"
                  leftIcon={<FaMinus />}
                  onClick={() => decrementProductInCart(product.id)}
                />
                <Box borderLeft="1px solid #BFBFBF" height="20px" />
                <Text fontSize={8} px={2}>
                  {product.quantity}
                </Text>
                <Box borderLeft="1px solid #BFBFBF" height="20px" />
                <Button
                  size={"xs"}
                  fontSize={12}
                  variant="ghost"
                  leftIcon={<FaPlus />}
                  onClick={() => addProductToCart(product)}
                />
              </ButtonGroup>
            </Flex>
          </Flex>
        </CardBody>

        <CardFooter flex={1}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text fontWeight={"700"} fontSize={"14px"}>
              {(Number(product.price) * product.quantity).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </Text>
          </Flex>
        </CardFooter>
      </Flex>
    </Card>
  );
};

export default CartCard;
