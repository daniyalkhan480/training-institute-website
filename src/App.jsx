// import Index from "./views"
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import CourseDetail from "./views/CourseDetail";
// import Header from "./components/index/header/Header";
// import MobileMenu from "./components/index/mobilemenu/MobileMenu";
// import Footer from "./components/index/footer/Footer";
// import AdminPanel from "./views/AdminPanel";
// import UpcomingBatches from "./components/admin-panel/up-batches/UpcomingBatches";
// function App() {
//   const location = useLocation();
//   const isAdminPanel = location.pathname.includes("/admin-panel");

//   return (
//     <>
//       {!isAdminPanel && <Header />}
//       {!isAdminPanel && <MobileMenu />}

//       <Routes>
//         {['/', '/home', '/index.html'].map(path => (
//           <Route key={path} path={path} element={<Index />} />
//         ))}
//         <Route path="/course-details" element={<CourseDetail />} />
//         <Route path="/up-batches" element={<UpcomingBatches />} />
//         <Route path="/admin-panel" element={<AdminPanel />}>
//           <Route path="upcoming-batches" element={<UpcomingBatches />} />
//         </Route>
//       </Routes>

//       {!isAdminPanel && <Footer />}
//     </>
//   )
// }

// export default App


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseDetail from "./views/CourseDetail";
import Header from "./components/index/header/Header";
import MobileMenu from "./components/index/mobilemenu/MobileMenu";
import Footer from "./components/index/footer/Footer";
import AdminPanel from "./views/AdminPanel";
import UpcomingBatches from "./components/admin-panel/up-batches/UpcomingBatches";
import Index from "./views/Index";

const App = () => {
  const isAdminPanel = window.location.pathname.startsWith('/admin-panel');

  return (
    <>
      {!isAdminPanel && <Header />}
      {!isAdminPanel && <MobileMenu />}
      <Routes>
        {['/', '/home', '/index.html'].map(path => (
          <Route key={path} path={path} element={<Index />} />
        ))}
        <Route path="/course-details" element={<CourseDetail />} />
        <Route path="/up-batches" element={<UpcomingBatches />} />
        <Route path="/admin-panel" element={<AdminPanel />}>
          <Route path="upcoming-batches" element={<AdminPanel />} />
          <Route path="courses" element={<AdminPanel />} />
          <Route path="services" element={<AdminPanel />} />
          <Route path="instructors" element={<AdminPanel />} />
          <Route path="testimonials" element={<AdminPanel />} />
          <Route path="events" element={<AdminPanel />} />
        </Route>
      </Routes>
      {!isAdminPanel && <Footer />}
    </>
  );
};


export default App;


        {/* <Route path="/admin-panel" element={<AdminPanel />}>
          <Route path="upcoming-batches" element={<UpcomingBatches />} />
        </Route> */}