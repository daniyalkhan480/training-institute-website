import React from 'react'
import MainContent from './MainContent';
import { useLocation} from 'react-router-dom';
import DashTable from '../up-batches/DashTable';
import DashTableData from '../up-batches/DashTableData'

const Main = () => {
    const location = useLocation();
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/* Panel Cards */}
            <h1 className="h2">Dashboard</h1>
            {/* {location.pathname === '/admin-panel' ? <MainContent />: <DashTable />} */}
            {location.pathname === '/admin-panel' && <MainContent />}
            {location.pathname === '/admin-panel/courses' && <DashTable sectionData={DashTableData.find(section => section.id === 'courses')}   />}
            {location.pathname === '/admin-panel/services' && <DashTable sectionData={DashTableData.find(section => section.id === 'services')} />}
            {location.pathname === '/admin-panel/instructors' && <DashTable sectionData={DashTableData.find(section => section.id === 'instructors')} />}
            {location.pathname === '/admin-panel/upcoming-batches' && <DashTable sectionData={DashTableData.find(section => section.id === 'upcoming')} />}
            {location.pathname === '/admin-panel/testimonials' && <DashTable sectionData={DashTableData.find(section => section.id === 'testimonials')} />}
            {location.pathname === '/admin-panel/events' && <DashTable sectionData={DashTableData.find(section => section.id === 'events')} />}

        </main>
    )
}

export default Main
