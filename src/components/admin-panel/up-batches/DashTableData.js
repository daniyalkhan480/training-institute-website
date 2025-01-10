const DashTableData = [
  // Courses Data
  {
    id: "courses",
    title: "Courses",
    thead: ["Title", "Instructor", "Starting_Date", "Duration", "Classes_Days", "Price"],
    data: [
      {
        title: "IT Office",
        instructor: "Nadir Nadeem",
        starting_date: "02 Jan, 25",
        time: "11:30 AM - 01:00 PM",
        duration: "6 Weeks",
        classes_days: "Thu - Fri - Sat",
        price: "PKR 18,000",
        rating: "1.05",
        reviews: "1,196 Reviews",
        link: "/admin-panel/up-batches/it-office"
      },
      {
        title: "Web Designing",
        instructor: "Muhammad Tayyab",
        starting_date: "02 Jan, 25",
        time: "06:30 PM - 08:00 PM",
        duration: "2 M",
        classes_days: "Thu - Fri - Sat",
        price: "PKR 20,000",
        rating: "1.17",
        reviews: "3,018 Reviews",
        link: "/admin-panel/up-batches/web-designing"
      },
      {
        title: "Web Development",
        instructor: "Muhammad Tayyab",
        starting_date: "02 Jan, 25",
        time: "06:30 PM - 08:00 PM",
        duration: "3 M",
        classes_days: "Thu - Fri - Sat",
        price: "PKR 30,000",
        rating: "1.17",
        reviews: "3,056 Reviews",
        link: "/admin-panel/up-batches/web-development"
      },
      {
        title: "Video Editing",
        instructor: "Nadir Nadeem",
        starting_date: "06 Jan, 25",
        time: "11:30 AM - 01:00 PM",
        duration: "5 Weeks",
        classes_days: "Mon - Tue - Wed",
        price: "PKR 15,000",
        rating: "1.01",
        reviews: "1,606 Reviews",
        link: "/admin-panel/up-batches/video-editing"
      },
      {
        title: "Java",
        instructor: "Muhammad Tayyab",
        starting_date: "13 Jan, 25",
        time: "11:00 AM - 12:30 PM",
        duration: "6 weeks",
        classes_days: "Mon - Tue - Wed",
        price: "PKR 15,000",
        rating: "1.04",
        reviews: "789 Reviews",
        link: "/admin-panel/up-batches/java"
      }
    ]
  },
  // Services Data
  {
    id: "services",
    title: "Services",
    thead: ["Service_Name", "Description", "Offered_By", "Duration", "Rating", "Reviews", "Price"],
    data: [
      {
        service_name: "Web Development",
        description: "Custom web solutions tailored for businesses.",
        offered_by: "TechMaster Inc.",
        price: "PKR 50,000",
        duration: "3 Months",
        rating: "4.8",
        reviews: "512 Reviews",
        link: "/services/web-development"
      },
      {
        service_name: "Video Editing",
        description: "Professional video editing for marketing.",
        offered_by: "Visionary Studios",
        price: "PKR 20,000",
        duration: "1 Month",
        rating: "4.7",
        reviews: "315 Reviews",
        link: "/services/video-editing"
      },
      {
        service_name: "SEO Optimization",
        description: "Improve your website's ranking on search engines.",
        offered_by: "SEOGuru",
        price: "PKR 25,000",
        duration: "2 Months",
        rating: "4.6",
        reviews: "650 Reviews",
        link: "/services/seo-optimization"
      },
      {
        service_name: "App Development",
        description: "Mobile application development for Android & iOS.",
        offered_by: "AppWorks",
        price: "PKR 80,000",
        duration: "4 Months",
        rating: "4.9",
        reviews: "204 Reviews",
        link: "/services/app-development"
      },
      {
        service_name: "Digital Marketing",
        description: "Complete online marketing solutions for brands.",
        offered_by: "MarketBoost",
        price: "PKR 40,000",
        duration: "2 Months",
        rating: "4.5",
        reviews: "400 Reviews",
        link: "/services/digital-marketing"
      }
    ]
  },
  // Instructors Data
  {
    id: "instructors",
    title: "Instructors",
    thead: ["Name", "Email", "Phone", "Address", "City",  "Salary"],
    data: [
      {
        name: "Nadir Nadeem",
        email: "nadir@example.com",
        phone: "+92 300 1234567",
        address: "123 Main St, Gulberg",
        city: "Lahore",
        salary: "PKR 10,000",
        imgurl: "",
        course_link: "/admin-panel/up-batches/it-office"
      },
      {
        name: "Muhammad Tayyab",
        email: "muhammad@example.com",
        phone: "+92 300 2345678",
        address: "456 Model Town Rd",
        city: "Lahore",
        salary: "PKR 10,000",
        imgurl: "",
        course_link: "/admin-panel/up-batches/web-designing"
      },
      {
        name: "Muhammad Tayyab",
        email: "muhammad@example.com",
        phone: "+92 300 2345678",
        address: "456 Model Town Rd",
        city: "Lahore",
        salary: "PKR 10,000",
        imgurl: "",
        course_link: "/admin-panel/up-batches/web-development"
      },
      {
        name: "Nadir Nadeem",
        email: "nadir@example.com",
        phone: "+92 300 1234567",
        address: "123 Main St, Gulberg",
        city: "Lahore",
        salary: "PKR 10,000",
        imgurl: "",
        course_link: "/admin-panel/up-batches/video-editing"
      },
      {
        name: "Muhammad Tayyab",
        email: "muhammad@example.com",
        phone: "+92 300 2345678",
        address: "456 Model Town Rd",
        city: "Lahore",
        salary: "PKR 10,000",
        imgurl: "",
        course_link: "/admin-panel/up-batches/java"
      }
    ]
  },
  // Upcoming Batches Data
  {
    id: "upcoming",
    title: "Upcoming Batches",
    thead: ["Course", "Instructor", "Starting_Date", "Duration", "Classes_Days", "Price"],
    data: [
      {
        course: "IT Office",
        instructor: "Nadir Nadeem",
        starting_date: "02 Jan, 25",
        time: "11:30 AM - 01:00 PM",
        duration: "6 Weeks",
        classes_days: "Thu - Fri - Sat",
        price: "PKR 18,000",
        rating: "1.05",
        reviews: "1,196 Reviews",
        link: "/admin-panel/up-batches/it-office"
      },
      {
        course: "Web Designing",
        instructor: "Muhammad Tayyab",
        starting_date: "02 Jan, 25",
        time: "06:30 PM - 08:00 PM",
        duration: "2 M",
        classes_days: "Thu - Fri - Sat",
        price: "PKR 20,000",
        rating: "1.17",
        reviews: "3,018 Reviews",
        link: "/admin-panel/up-batches/web-designing"
      },
      {
        course: "Web Development",
        instructor: "Muhammad Tayyab",
        starting_date: "02 Jan, 25",
        time: "06:30 PM - 08:00 PM",
        duration: "3 M",
        classes_days: "Thu - Fri - Sat",
        price: "PKR 30,000",
        rating: "1.17",
        reviews: "3,056 Reviews",
        link: "/admin-panel/up-batches/web-development"
      },
      {
        course: "Video Editing",
        instructor: "Nadir Nadeem",
        starting_date: "06 Jan, 25",
        time: "11:30 AM - 01:00 PM",
        duration: "5 Weeks",
        classes_days: "Mon - Tue - Wed",
        price: "PKR 15,000",
        rating: "1.01",
        reviews: "1,606 Reviews",
        link: "/admin-panel/up-batches/video-editing"
      },
      {
        course: "Java",
        instructor: "Muhammad Tayyab",
        starting_date: "13 Jan, 25",
        time: "11:00 AM - 12:30 PM",
        duration: "6 weeks",
        classes_days: "Mon - Tue - Wed",
        price: "PKR 15,000",
        rating: "1.04",
        reviews: "789 Reviews",
        link: "/admin-panel/up-batches/java"
      }
    ]
  },
  // Testimonials Data
  {
    id: "testimonials",
    title: "Testimonials",
    thead: ["Name", "Course", "Rating", "Testimonial", "date"],
    data: [
      {
        name: "Ali Khan",
        course: "Web Development",
        rating: "5",
        testimonial: "The web development service was outstanding. The team delivered on time and beyond expectations.",
        date: "25 Dec, 2024",
        link: "/testimonials/ali-khan"
      },
      {
        name: "Sarah Ahmed",
        course: "SEO Optimization",
        rating: "4.5",
        testimonial: "I saw a visible improvement in my website's search engine ranking after availing SEO services.",
        date: "15 Dec, 2024",
        link: "/testimonials/sarah-ahmed"
      },
      {
        name: "Zeeshan Butt",
        course: "App Development",
        rating: "4.9",
        testimonial: "AppWorks developed my mobile app perfectly, and the user interface is so intuitive.",
        date: "10 Dec, 2024",
        link: "/testimonials/zeeshan-butt"
      },
      {
        name: "Ayesha Raza",
        course: "Video Editing",
        rating: "4.7",
        testimonial: "The video editing team turned my raw footage into a masterpiece. Highly recommend their services.",
        date: "2 Dec, 2024",
        link: "/testimonials/ayesha-raza"
      },
      {
        name: "Farhan Ali",
        course: "Digital Marketing",
        rating: "4.8",
        testimonial: "Their digital marketing strategies have significantly improved my brand's online presence and sales.",
        date: "28 Nov, 2024",
        link: "/testimonials/farhan-ali"
      }
    ]
  },
  {
    id: "events",
    title: "Events",
    thead: ["Event", "date", "location", "organizers", "attendees", "Description"],
    data: [
      {
        imageurl: "assets/images/event/grid-type-01.jpg",
        date: "15 Mar, 2025",
        location: "Expo Center, Lahore",
        event: "International Education Fair 2022",
        time: "8:00 am - 5:00 pm",
        organizers: "Global Edu Events",
        attendees: "3,000+",
        description: "A global event for students seeking educational opportunities.",
        getticketlink: "/events/international-education-fair-2022"
      },
      {
        imageurl: "assets/images/event/grid-type-01.jpg",
        date: "12 May, 2025",
        location: "Convention Hall, Karachi",
        event: "TechTalks 2025",
        time: "8:00 am - 5:00 pm",
        organizers: "InnovateTech",
        attendees: "1,200+",
        description: "A conference for tech enthusiasts and professionals.",
        getticketlink: "/events/techtalks-2025"
      },
      {
        imageurl: "assets/images/event/grid-type-01.jpg",
        date: "20 Jul, 2025",
        location: "Digital Hub, Islamabad",
        event: "Digital Marketing Expo",
        time: "8:00 am - 5:00 pm",
        organizers: "Digital Solutions Inc.",
        attendees: "1,000+",
        description: "Workshops and seminars about digital marketing trends.",
        getticketlink: "/events/digital-marketing-expo"
      },
      {
        imageurl: "assets/images/event/grid-type-01.jpg",
        date: "10 Oct, 2025",
        location: "Marriott Hotel, Lahore",
        event: "International Start-Up Conference 2025",
        time: "8:00 am - 5:00 pm",
        organizers: "StartUp Nation",
        attendees: "800+",
        description: "A gathering of global entrepreneurs, investors, and startups.",
        getticketlink: "/events/international-startup-conference-2025"
      },
      {
        imageurl: "assets/images/event/grid-type-01.jpg",
        date: "5 Dec, 2025",
        location: "National Museum, Karachi",
        event: "Creative Arts Exhibition",
        time: "8:00 am - 5:00 pm",
        organizers: "ArtHouse Collective",
        attendees: "500+",
        description: "A showcase of contemporary artwork and performances.",
        getticketlink: "/events/creative-arts-exhibition"
      }
    ]
  },
];

export default DashTableData;