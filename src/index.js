
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import { ChakraProvider, extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  colors: {
    blue: {
     main: "#7bb9e8",
     50: "#e3f2fd",
     100: "#bbdefb",
     200: "#90caf9",
     300: "#64b5f6",
     400: "#42a5f5",
     500: "#2196f3",
     600: "#1e88e5",
     700: "#1976d2",
     800: "#1565c0",
     900: "#0d47a1"
   }
 }
});



ReactDOM.render(
  <ChakraProvider theme={theme}>
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Redirect from={`/`} to="/admin/dashboard" />
    </Switch>
  </HashRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
