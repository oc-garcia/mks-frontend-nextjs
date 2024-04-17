import { Box, Image, Text } from "@chakra-ui/react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.image} alt={product.name} />

      <Box p="6">
        <Box alignItems="baseline">
          <Text mt="2" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {product.name}
          </Text>
        </Box>
        <Box>{product.price}</Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
