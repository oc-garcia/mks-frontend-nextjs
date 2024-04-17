import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledContainer = styled(Box)`
  align-items: center;
  padding: 1rem;
  background-color: var(--chakra-colors-customBlue);
  h1 {
    color: var(--chakra-colors-white);
    font-size: 40px;
    font-weight: 600;
    span {
      color: var(--chakra-colors-white);
      font-weight: 300;
    }
  }
`;

const TopBar = () => {
  return (
    <StyledContainer>
      <h1>
        MKS<span> Sistemas</span>
      </h1>
    </StyledContainer>
  );
};

export default TopBar;
