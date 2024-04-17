import { Grid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Marketplace: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default Marketplace;
