import { Grid, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductServices } from "@/services/ProductServices";

const Marketplace: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await ProductServices.getProducts();
      setProducts(response.products);
    };

    fetchProducts();
  }, []);

  return (
    <Flex alignSelf={"center"} justifyContent={"center"} w={"100%"} h={"100%"}>
      <Grid
        p={10}
        h={601}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={6}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Marketplace;
