import { Flex, Text } from "@chakra-ui/react";
import { Val } from "react-firebase-hooks/database/dist/database/types";
import { PostType, useHome } from "../HomeProvider/HomeProvider";
import Post from "./Post";

const Section = ({
  posts,
  error,
  loading,
  title,
}: {
  posts: Val<PostType, "", "">[] | undefined;
  error: Error | undefined;
  loading: boolean;
  title: string;
}) => {
  if (error) {
    return <Flex flex={1}>Error fetching posts...{error.toString()}</Flex>;
  }

  if (loading) {
    return <Flex flex={1}>Loading posts...</Flex>;
  }

  return (
    <Flex direction="column" justify="flex-start">
      <Flex direction="column-reverse">
        {posts?.map((post) => {
          return <Post key={post.key} post={post} />;
        })}
      </Flex>
    </Flex>
  );
};

export default Section;
