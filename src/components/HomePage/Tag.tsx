import Icon from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { FaRobot } from "react-icons/fa";
import {
  IconCode,
  IconRocket,
  IconHandLittleFinger,
  IconUser,
  IconLambda,
  IconMath,
  IconSchool,
  IconFlipVertical,
  IconBooks,
} from "@tabler/icons-react";
import { useHome } from "../HomeProvider/HomeProvider";

export default function Tag({ label }: { label: string }) {
  const { filter, setFilter } = useHome();

  const getIcon = (l: string) => {
    const iconMap: any = {
      AI: FaRobot,
      CS: IconCode,
      Startups: IconRocket,
      Short: IconHandLittleFinger,
      Me: IconUser,
      PL: IconLambda,
      Math: IconMath,
      School: IconSchool,
      Reading: IconBooks,
      Meta: IconFlipVertical,
    };

    const res = iconMap[l];
    return res ?? null;
  };

  const getColor = (l: string) => {
    const colorMap: any = {
      CS: "#85abf2",
      AI: "#85abf2",
      PL: "#85abf2",
      Startups: "#65b55e",
      Math: "#f55f6e",
    };

    if (l === filter) return "orange";

    const res = colorMap[l];
    return res ?? "black";
  };

  return (
    <Flex
      fontSize={{ base: "10px", lg: "13px" }}
      borderColor={getColor(label)}
      color="white"
      backgroundColor={getColor(label)}
      align="center"
      justify="center"
      paddingX="3px"
      fontWeight="500"
      borderRadius="5px"
      transition="0.5s"
      onClick={(e) => {
        e.stopPropagation();
        setFilter((p) => {
          return p === label ? "" : label;
        });
      }}
      _hover={{
        paddingX: "7px",
        borderColor: getColor(label),
      }}
    >
      {label}
      <Icon as={getIcon(label)} marginLeft="2px" />
    </Flex>
  );
}
