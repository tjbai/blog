import { Flex, Input, Textarea } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useHome } from "../HomeProvider/HomeProvider";
import { usePostContext } from "./CreatePage";

const Editor = () => {
  const { title, setTitle, body, setBody } = usePostContext();
  const { menuOpen } = useHome();

  // BODY MACROS
  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.slice(-2) === "$b") {
      setBody(val.substring(0, val.length - 2) + "<br></br>");
    } else if (val.slice(-2) === "$p") {
      setBody(val.substring(0, val.length - 2) + "<br></br>\n<br></br>");
    } else if (val.slice(-2) === "$8") {
      setBody(
        val.substring(0, val.length - 2) +
          "<br></br>\n<br></br>\n<br></br>\n<br></br>\n"
      );
    } else {
      setBody(val);
    }
  };

  return (
    <Flex
      flex={1}
      direction="column"
      maxW={{ base: "100%", md: "45%" }}
      display={{ base: menuOpen ? "flex" : "none", md: "flex" }}
    >
      <Input
        autoFocus
        focusBorderColor="grey"
        fontWeight="bold"
        borderRadius="0px"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <Textarea
        focusBorderColor="grey"
        pb="100px"
        value={body}
        borderRadius="0px"
        onChange={handleBodyChange}
        placeholder="body"
        height="100%"
      />
    </Flex>
  );
};

export default Editor;
