import { Grid, Flex, Skeleton, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductServices } from "@/services/ProductServices";

const Marketplace: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await ProductServices.getProducts();
      setProducts(response.products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <Flex alignSelf={"center"} justifyContent={"center"} w={"100%"} h={"100%"}>
      <Grid p={10} templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6}>
        {isLoading
          ? Array(8)
              .fill(0)
              .map((_, index) => <Skeleton key={index} height="35vh" width={isMobile ? "45vw" : "20vw"} />)
          : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </Grid>
    </Flex>
  );
};

export default Marketplace;