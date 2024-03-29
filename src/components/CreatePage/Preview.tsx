import { Flex, Link, Text } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Spotify from "react-spotify-embed";
import { spinAnimation } from "../../animations/textAnimations";
import { prettifyDate } from "../../constants/utils";
import { PostType, useHome } from "../HomeProvider/HomeProvider";
import { usePostContext } from "./CreatePage";

const previewTheme = {
  p: (props: any) => {
    const { children } = props;
    if (!children) {
      return <></>;
    }

    const cand = children[0];
    if (typeof cand !== "string") {
      return children;
    }

    try {
      if (cand.substring(0, 5) === "$spin") {
        const split = cand.split("/");
        const size = split[1],
          word = split[2];
        return (
          <Flex
            as={motion.div}
            animation={spinAnimation}
            padding="2"
            w="fit-content"
            fontSize={size}
            m={10}
          >
            {word}
          </Flex>
        );
      } else if (cand.substring(0, 2) === "$l") {
        const split = cand.split("$");
        return (
          <Link isExternal href={split[3]} color="#4e9cf5">
            {split[2]}
          </Link>
        );
      } else if (cand.substring(0, 2) === "$s" && cand.slice(-2) === "$d") {
        const split = cand.split("$");
        return (
          <Flex mt={5}>
            <Spotify wide link={split[2]} />
          </Flex>
        );
      } else if (cand.substring(0, 2) === '$"') {
        const text = cand.split('"')[1];
        return (
          <Text bg="midbg" fontStyle="italic" p={2} mb={5}>
            "{text}"
          </Text>
        );
      } else if (cand.substring(0, 3) === "$br") {
        return <Flex border="1px solid grey" mt={5} />;
      } else if (cand.substring(0, 1) === "$") {
        return (
          <Text textStyle="t2" mb={2}>
            {children[0].substring(1)}
          </Text>
        );
      }
    } catch (e) {
      alert("ERROR");
    }

    return <Text>{children}</Text>;
  },
};

const Preview = ({ post }: { post?: PostType }) => {
  const { body, title } = usePostContext();
  const { menuOpen } = useHome();

  return (
    <Flex
      flex={1}
      whiteSpace="pre-line"
      p={5}
      bg="bg"
      maxH="100vh"
      overflow="scroll"
      justify="flex-start"
      display={{ base: menuOpen ? "none" : "flex", md: "flex" }}
    >
      <Flex direction="column" maxW="700px" height="100%">
        <Flex id={`${post?.title}-id`} position="relative" top="-20px" />
        <Flex
          direction="column"
          mb={5}
          pb={2}
          borderBottom="2px solid"
          borderColor="grey"
        >
          <Text textStyle="t1">{post ? post.title : title}</Text>

          <Flex fontSize="15px">
            <Text mr={2}>By TJ Bai, </Text>
            <Text mr={2}>
              {post
                ? prettifyDate(new Date(post.createdDate))
                : prettifyDate(new Date())}
              ,
            </Text>
            <Text>
              {post ? post.body?.split(" ").length : body?.split(" ").length}{" "}
              words
            </Text>
          </Flex>
        </Flex>

        <ReactMarkdown
          components={ChakraUIRenderer(previewTheme)}
          children={post ? post.body : body}
          skipHtml
        />
      </Flex>
    </Flex>
  );
};

export default Preview;
