import { Box, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const StyledContainer = styled(Box)`
  max-height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--chakra-colors-customBlue);
`;

const Title = styled.h1`
  color: var(--chakra-colors-white);
  font-size: 40px;
  font-weight: 600;
  span {
    font-size: 20px;
    color: var(--chakra-colors-white);
    font-weight: 300;
  }
`;

const StyledCartIcon = styled(FaShoppingCart)`
  width: 19.01px;
  height: 18px;
  margin-right: 0.5rem;
`;

const TopBar = () => {
  const [cartItems] = useState(0);
  return (
    <StyledContainer>
      <Title>
        MKS<span> Sistemas</span>
      </Title>
      <Button leftIcon={<StyledCartIcon />} h={45} w={90} colorScheme="gray" color="black" variant="solid">
        {cartItems}
      </Button>
    </StyledContainer>
  );
};

export default TopBar;
