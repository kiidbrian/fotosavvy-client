import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import GalleryPage from './pages/gallery';
import ContactPage from './pages/contact';
import Layout from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="gallery" element={<Layout />}>
          <Route index element={<GalleryPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={() => <h1>Route Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
