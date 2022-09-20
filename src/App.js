import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import GalleryPage from "./pages/gallery";
import ContactPage from "./pages/contact";
import Layout from "./components/layout";
import { PrivateRoute } from "./privateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LoginPage />} />
        <Route path="gallery" element={<Layout />}>
          <Route
            index
            element={<PrivateRoute roles={[]} component={GalleryPage} />}
          />
          <Route
            path="home"
            element={<PrivateRoute roles={[]} component={HomePage} />}
          />
          <Route
            path="contact"
            element={<PrivateRoute roles={[]} component={ContactPage} />}
          />
        </Route>
        <Route path="*" element={() => <h1>Route Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
