import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart/CartContext";
import { CartContextType } from "@/interfaces/cart/ICartContextType";
import CartCard from "./CartCard";
import { IProduct } from "@/interfaces/product/IProduct";
import { ICartItems } from "@/interfaces/cart/ICartItems";

const Cart = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { cartItems, addProductToCart, removeProductFromCart, totalAmount, totalItems } = useContext(
    CartContext
  ) as CartContextType;

  return (
    <Drawer size={"md"} isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent color={"white"} boxShadow={"dark-lg"} backgroundColor={"customBlue"}>
          <Flex p={2} alignItems={"center"} justify={"space-between"}>
            <DrawerCloseButton borderRadius={"50%"} backgroundColor={"black"} m={0} p={0} />
            <DrawerHeader ml={2} p={0} flex={1}>
              Carrinho de Compras
            </DrawerHeader>
          </Flex>
          <DrawerBody mt={4} p={4}>
            <Flex gap={4} h={"100%"} direction={"column"} justifyContent={"space-between"}>
              {cartItems.map((item: ICartItems) => (
                <CartCard key={item.id} product={item} />
              ))}
              <Spacer />
              <Flex px={4} alignItems={"center"} justifyContent={"space-between"}>
                <Heading fontSize={28}>Total:</Heading>
                <Heading fontSize={28}>
                  {totalAmount.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </Heading>
              </Flex>
            </Flex>
          </DrawerBody>
          <DrawerFooter p={0}>
            <Button
              w={"100%"}
              size={"lg"}
              colorScheme="blackAlpha"
              color={"#FFF"}
              backgroundColor={"#000"}
              borderRadius={0}
              flex={3}>
              Finalizar Compra
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Cart;
