import { Grid, Flex, Skeleton, useMediaQuery } from "@chakra-ui/react";
import { useQuery } from 'react-query';
import ProductCard from "./ProductCard";
import { ProductServices } from "@/services/ProductServices";
import { IProduct } from "@/interfaces/product/IProduct";
import { IMarketplace } from "@/interfaces/product/IMarketplace";

const fetchProducts = async () => {
  let response: IMarketplace = await ProductServices.getProducts();
  return response.products;
};

const Marketplace: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  const { data: products, isLoading } = useQuery<IProduct[]>('products', fetchProducts);

  return (
    <Flex alignSelf={"center"} justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
      <Grid
        w={"100%"}
        h={"100%"}
        px={20}
        py={10}
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={6}>
        {isLoading
          ? Array(8)
              .fill(0)
              .map((_, index) => <Skeleton key={index} height="35vh" width={isMobile ? "45vw" : "20vw"} />)
          : products?.map((product: IProduct) => <ProductCard key={product.id} product={product} />)}
      </Grid>
    </Flex>
  );
};

export default Marketplace;