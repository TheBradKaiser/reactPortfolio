
// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/FouroFour";
import ContactPage from "./pages/ContactPage";
import ShowCasePage from './pages/ShowCasePage';
import BlogPage from './pages/BlogPage';
import ImagePage from './pages/ImagePage';



function App() {
  const sideBar = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Projects & Skills', url: '/about' },
    { id: 3, title: 'AI Image Portfolio', url: '/ai-images'},
    { id: 4, title: 'Showcase', url: '/showcase'},
    { id: 5, title: 'Blog', url: '/blog'},
    { id: 6, title: 'Contact', url: '/contact' },
    // { id: 5, title: "Cookie Clicker", url:"/cookieclicker"}
  ];

  return (
    <div className="App">

      <BrowserRouter>
      <Sidebar items={sideBar} />

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>} />

          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/showcase" element={<ShowCasePage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/ai-images" element={<ImagePage/>}/>
          {/* <Route path="/cookieclicker" element={<CookieClickerPage/>}/> */}
          {/* {/* <Route path="*.png"/> */}
          <Route path="*" element={<NotFoundPage/>} /> 
          
        </Routes>

    </BrowserRouter>

    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
