import { Flex } from "@chakra-ui/react";
import { ref } from "firebase/database";
import { useListVals } from "react-firebase-hooks/database";
import { db } from "../../firestore/clientApp";
import { PostType, useHome } from "../HomeProvider/HomeProvider";
import Login from "./Login";
import Section from "./Section";
import { useAuth } from "../AuthProvider/AuthProvider";

const Menu = () => {
  const { menuOpen, filter } = useHome();
  const { loggedIn } = useAuth();

  const [publishedSnapshots, publishedLoading, publishedError] =
    useListVals<PostType>(ref(db, "published_posts"), {
      keyField: "key",
    });

  const [draftSnapshots, draftLoading, draftError] = useListVals<PostType>(
    ref(db, "drafts"),
    {
      keyField: "key",
    }
  );

  return (
    <Flex
      bg="white"
      direction="column"
      flex={1}
      maxW={{ base: "100%", md: "30%" }}
      maxH="100vh"
      overflow="scroll"
      display={{ base: menuOpen ? "flex" : "none", md: "flex" }}
    >
      <Login />
      {filter ? (
        <Flex
          px={3}
          py={1}
          fontWeight="600"
          bg="darkbg"
          color="bg"
          fontSize={{ base: "10px", lg: "15px" }}
        >
          Filter active: {filter}
        </Flex>
      ) : (
        <></>
      )}
      {loggedIn ? (
        <Section
          title="Drafts"
          error={draftError}
          loading={draftLoading}
          posts={draftSnapshots}
        />
      ) : (
        <></>
      )}
      <Section
        title="Published Posts"
        error={publishedError}
        loading={publishedLoading}
        posts={publishedSnapshots}
      />
    </Flex>
  );
};

export default Menu;
