import BlogCatagory from "../components/index/blog-catagory/BlogCatagory"
import CourseCatagory from "../components/index/course-catagory/CourseCatagory"
import EventCatagory from "../components/index/event-catagory/EventCatagory"
import Footer from "../components/index/footer/Footer"
import PopularCourses from "../components/index/popular-course/PopularCourses"
import Banner from "../components/index/startbanner/Banner"
import TeamCatagory from "../components/index/team-catagory/TeamCatagory"
import Testimonials from "../components/index/testimonial-catagory/Testimonials"
import Brochure from "../components/index/brochure/Brocher"
import SuccessGuide from "../components/index/startbanner/SuccessGuide"




const Index = () => {
  return (
    <>
          
            <div style={{ paddingTop :"100px"}}>
                <Banner />
            </div>
    
            <SuccessGuide />
            <PopularCourses />
            <CourseCatagory />
            <Brochure />
            {/* <TeamCatagory /> */}
            <Testimonials />
            <EventCatagory />
            {/* <BlogCatagory /> */}
            {/* <Footer /> */}
    </>
  )
}

export default Index
