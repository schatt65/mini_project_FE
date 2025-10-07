import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseGoal from "./components/CourseGoal.tsx";
import Features from "./components/ImageLayer/Features.tsx";
import Card from "./components/Cards/Card.tsx";
import BillExplainer from "./components/BillExplainer/BillExplainer.tsx";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "course-goal", element: <CourseGoal /> },
      { path: "Features", element: <Features /> },
      { path: "cards", element: <Card /> },
      { path: "bill", element: <BillExplainer /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>

  // </StrictMode>
);
