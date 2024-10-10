import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import ProductAll from "./Pages/ProductAll";
import Login from "./Pages/Login";
import ProductDetail from "./Pages/ProductDetail";
import { createGlobalStyle } from "styled-components";
import PrivateRoute from "./routes/PrivateRoute";

const GlobalStyle = createGlobalStyle`
${reset}

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
ul,li{
  text-decoration: none;
}
a{
  color: inherit;
}
`;

const App = () => {
  const [authenticate, setauthenticate] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout authenticate={authenticate} setAuthenticate />,
      children: [
        {
          path: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authenticate={authenticate}
              setauthenticate={setauthenticate}
            />
          ),
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
