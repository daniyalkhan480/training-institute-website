import Index from "./views"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CourseDetail from "./views/CourseDetail";
import Header from "./components/index/header/Header";
import MobileMenu from "./components/index/mobilemenu/MobileMenu";
import Footer from "./components/index/footer/Footer";
import AdminPanel from "./views/AdminPanel";
function App() {
  const location = useLocation();
  const isAdminPanel = location.pathname === "/admin-panel";

  return (
    <>
      {!isAdminPanel && <Header />}
      {!isAdminPanel && <MobileMenu />}

      <Routes>
        {['/', '/home', '/index.html'].map(path => (
          <Route key={path} path={path} element={<Index />} />
        ))}
        <Route path="/course-details" element={<CourseDetail />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>

      {!isAdminPanel && <Footer />}
    </>
  )
}

export default App


