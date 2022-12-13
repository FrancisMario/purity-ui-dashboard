
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import { ChakraProvider, extendTheme } from '@chakra-ui/react';


const theme = extendTheme({

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
