import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./layouts/Header";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import { PrivateRoute, UnPrivateRoute } from "./services/MiddlewareRoute";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/inbox" element={<Inbox />} />
          </Route>
          <Route path="/" element={<UnPrivateRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
