import Index from "./views"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetail from "./views/CourseDetail";
import Header from "./components/index/header/Header";
import MobileMenu from "./components/index/mobilemenu/MobileMenu";
import Footer from "./components/index/footer/Footer";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <MobileMenu />


      <Routes>
        {/* Multiple Routes path for same element */}
        {['/', '/home', '/index.html'].map(path => (
          <Route key={path} path={path} element={<Index />} />
        ))}

        <Route path="/course-details" element={<CourseDetail />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App

