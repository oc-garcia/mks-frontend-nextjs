"use client";
import { Flex } from "@chakra-ui/react";
import Footer from "@/components/default/Footer";
import TopBar from "@/components/default/TopBar";
import Marketplace from "@/components/default/Marketplace";

export default function Page() {
  return (
    <Flex direction="column" minHeight="100vh">
      <TopBar />
      <Flex flex={1}>
        <Marketplace />
      </Flex>
      <Footer />
    </Flex>
  );
}
