import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledFooter = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 34px;
  background-color: #eeeeee;
  color: black;
`;

const StyledText = styled(Text)`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;

const Footer = () => {
  return (
    <StyledFooter as="footer">
      <StyledText>MKS sistemas © Todos os direitos reservados</StyledText>
    </StyledFooter>
  );
};

export default Footer;
