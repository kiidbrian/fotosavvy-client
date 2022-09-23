import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import GalleryPage from "./pages/gallery";
import ContactPage from "./pages/contact";
import Layout from "./components/layout";
import PrivateRoute from "./privateRoute";
import Callback from "./components/callback";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact children={<LoginPage />} />
        <Route path="/callback" exact children={<Callback />} />
        <Layout>
          <PrivateRoute children={<GalleryPage />} path="/" exact />
          <PrivateRoute children={<HomePage />} path="/home" exact />
          <PrivateRoute children={<ContactPage />} path="/contact" exact />
        </Layout>
        {/* <Route path="*" children={() => <h1>Route Not Found</h1>} /> */}
      </Switch>
    </Router>
  );
}

export default App;
