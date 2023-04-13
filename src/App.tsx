import { ChakraProvider } from "@chakra-ui/react";
import theme from "./chakra/theme";
import "@fontsource/azeret-mono/400.css";

import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import CreatePage from "./components/CreatePage";
import HomePage from "./components/HomePage";
import ModalProvider from "./components/ModalProvider";
import Root from "./components/Root";
import HomeProvider from "./components/HomeProvider";
import SubscribePage from "./components/SubscribePage";
import IndividualPostPage from "./components/IndividualPostPage";
import NewPage from "./components/NewPage";
import { loader as newPageLoader } from "./components/NewPage/NewPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="create" element={<CreatePage />} />
      <Route path=":postID" element={<IndividualPostPage />} />
      <Route path="subscribe" element={<SubscribePage />} />
      <Route path="new" element={<NewPage />} loader={newPageLoader} />
    </Route>
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalProvider>
          <HomeProvider>
            <RouterProvider router={router} />
          </HomeProvider>
        </ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ChakraProvider>
);
