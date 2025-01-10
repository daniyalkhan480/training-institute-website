// import React from 'react'
// import UpcomingBatches from '../components/admin-panel/up-batches/UpcomingBatches'
// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/admin-panel/navbar/Navbar'
// import Main from '../components/admin-panel/main/Main'
// import Header from '../components/admin-panel/header/Header'
// const AdminPanel = () => {
//   return (
//     <>
//       <Header />
//       <div className="container-fluid">
//         <div className="row">
//           <Navbar />
//           <Main />
//           <Outlet />
//         </div>
//       </div>
//     </>
//   )
// }

// export default AdminPanel



import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/admin-panel/navbar/Navbar';
import Main from '../components/admin-panel/main/Main';
import Header from '../components/admin-panel/header/Header';


const AdminPanel = () => {


  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navbar />
            <Main />
          {/* <Outlet /> */}
        </div>
      </div>
    </>
  );
};
export default AdminPanel;