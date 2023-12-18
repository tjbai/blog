import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface PostType {
  title: string;
  body: string;
  createdDate: string;
  key: string;
  state: "published" | "draft";
  labels?: string[];
}

interface SelectedPostInterface {
  selectedPost: PostType | null;
  setSelectedPost: (val: PostType | null) => void;
  verboseDates: boolean;
  setVerboseDates: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  labelsOn: boolean;
  setLabelsOn: Dispatch<SetStateAction<boolean>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const SelectedPostContext = createContext({} as SelectedPostInterface);

const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  const [verboseDates, setVerboseDates] = useState(false);
  const [labelsOn, setLabelsOn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("");

  return (
    <SelectedPostContext.Provider
      value={{
        selectedPost,
        setSelectedPost,
        verboseDates,
        setVerboseDates,
        menuOpen,
        setMenuOpen,
        labelsOn,
        setLabelsOn,
        filter,
        setFilter,
      }}
    >
      {children}
    </SelectedPostContext.Provider>
  );
};

const useHome = () => useContext(SelectedPostContext);

export default HomeProvider;
export { useHome };
