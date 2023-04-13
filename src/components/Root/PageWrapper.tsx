import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <Flex flex={1} minH="100vh" bg="bg">
      {children}
    </Flex>
  );
}
