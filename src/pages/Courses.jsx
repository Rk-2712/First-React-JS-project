import { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import course07 from "../assets/extra-images/featured-course-07.jpg";
import course2 from "../assets/extra-images/featured-course-2.jpg";
import course08 from "../assets/extra-images/featured-course-08.jpg";
import course4 from "../assets/extra-images/featured-course-4.jpg";
import course02 from "../assets/extra-images/featured-course-02.jpg";
import course03 from "../assets/extra-images/featured-course-03.jpg";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("Popular");

  const popularCourses = [
    { id: 1, image: course07, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 2, image: course2, title: "Photography lectures", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 3, image: course08, title: "Developing Mobile Apps", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 4, image: course4, title: "Business & Finance", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 5, image: course07, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" }
  ];

  const recommendedCourses = [
    { id: 1, image: course07, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 2, image: course2, title: "Photography lectures", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 3, image: course08, title: "Developing Mobile Apps", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 4, image: course4, title: "Business & Finance", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 5, image: course07, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 6, image: course2, title: "Photography lectures", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" }
  ];

  const newCourses = [
    { id: 1, image: course07, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 2, image: course2, title: "Photography lectures", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 3, image: course08, title: "Developing Mobile Apps", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 4, image: course4, title: "Business & Finance", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 5, image: course2, title: "Photography lectures", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 6, image: course07, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" }
  ];

  const lastCallCourses = [
    { id: 1, image: course07, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 2, image: course2, title: "Photography lectures", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 3, image: course08, title: "Developing Mobile Apps", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 4, image: course4, title: "Business & Finance", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 5, image: course2, title: "Photography lectures", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 6, image: course07, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" }
  ];

  const relatedCourses = [
    { id: 1, image: course07, title: "Computer & IT Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "101 Reviews", students: "3.1 k", iconClass: "icon-student", pathsCount: 19 },
    { id: 2, image: course02, title: "Business & Finance", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "101 Reviews", students: "3.1 k", iconClass: "icon-lecture", pathsCount: 38 },
    { id: 3, image: course03, title: "Social Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "101 Reviews", students: "3.1 k", iconClass: "icon-molecule", pathsCount: 17 }
  ];

  const getCoursesForTab = () => {
    switch (activeTab) {
      case "Popular": return popularCourses;
      case "recommended": return recommendedCourses;
      case "newcourses": return newCourses;
      case "lastcall": return lastCallCourses;
      default: return popularCourses;
    }
  };

  const activeCoursesList = getCoursesForTab();

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner">
        <div className="container">
          <h5>Our Courses</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Our Courses</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* Iqoniq Content Start */}
      <div className="iq_content_wrap">
        {/* OUR CORSES INPNER PAGE Start */}
        <section className="iqoniq1_our_courses_inpg">
          <div className="container">
            {/* Courses Tabs */}
            <div className="list_setting">
              {/* Courses Tabs Nav Start */}
              <ul className="iqoniq-tabs" role="tablist">
                <li role="presentation" className={activeTab === "Popular" ? "active" : ""}>
                  <Link
                    to="#"
                    role="tab"
                    onClick={(e) => { e.preventDefault(); setActiveTab("Popular"); }}
                  >
                    Popular
                  </Link>
                </li>
                <li role="presentation" className={activeTab === "recommended" ? "active" : ""}>
                  <Link
                    to="#"
                    role="tab"
                    onClick={(e) => { e.preventDefault(); setActiveTab("recommended"); }}
                  >
                    Recommended
                  </Link>
                </li>
                <li role="presentation" className={activeTab === "newcourses" ? "active" : ""}>
                  <Link
                    to="#"
                    role="tab"
                    onClick={(e) => { e.preventDefault(); setActiveTab("newcourses"); }}
                  >
                    New Courses
                  </Link>
                </li>
                <li role="presentation" className={activeTab === "lastcall" ? "active" : ""}>
                  <Link
                    to="#"
                    role="tab"
                    onClick={(e) => { e.preventDefault(); setActiveTab("lastcall"); }}
                  >
                    Last Call
                  </Link>
                </li>
              </ul>
              {/* Courses Tabs Nav End */}
            </div>

            {/* Courses Tabs */}
            <div className="courses_tabs">
              {/* Tab panes */}
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id={activeTab}>
                  {/* Courses Slider Start */}
                  <div className="courses-slider row">
                    {activeCoursesList.map((course) => (
                      <div key={course.id} className="col-md-4 col-sm-6" style={{ marginBottom: "30px" }}>
                        {/* courses popular thumb start */}
                        <div className="coureses_Popular_thumb">
                          <figure>
                            <img alt="" src={course.image} />
                            <Link className="iq_link_1" to="/course-detail">view detail</Link>
                          </figure>
                          {/* popular thumb start */}
                          <div className="Popular_capstion_thumb">
                            {/* popular caption start */}
                            <div className="popular_capstion">
                              <h5>
                                <Link to="/course-detail">{course.title}</Link>
                              </h5>
                              <div className="map_icon">
                                <i className="fa fa-map-marker"></i>
                                {course.map}
                              </div>
                              {/* RATING AREA START */}
                              <div className="rating_down">
                                <div className="rating_up" style={{ width: "100%" }}></div>
                              </div>
                              {/* RATING AREA End */}
                              <p>{course.desc}</p>
                            </div>
                            {/* popular caption end */}
                            
                            {/* popular caption bottom start */}
                            <ul className="popular_capstion_bottom">
                              <li>
                                <span>{course.level}</span>
                                <span className="right">{course.type}</span>
                              </li>
                              <li>
                                <span>{course.duration}</span>
                                <span className="right">{course.reviews}</span>
                              </li>
                            </ul>
                            {/* popular caption bottom end */}
                            <span className="price">
                              <strong>{course.price}</strong> per year
                            </span>
                          </div>
                          {/* popular thumb end */}
                        </div>
                        {/* courses popular thumb end */}
                      </div>
                    ))}
                  </div>
                  {/* Courses Slider End */}
                </div>
              </div>
              {/* Tab panes */}
            </div>
            {/* Courses Tabs */}
          </div>
        </section>

        <section style={{ paddingBottom: "60px" }}>
          <div className="container">
            {/* Heading 1 Start */}
            <div className="iq_heading_1 text-center">
              <h4>related<span> courses</span></h4>
            </div>
            {/* Heading 1 End */}
            <div className="related-slider row">
              {relatedCourses.map((course) => (
                <div key={course.id} className="col-md-4 col-sm-6">
                  {/* Courses List Start */}
                  <div className="iq_course_list">
                    <figure>
                      <img src={course.image} alt="" />
                    </figure>
                    <div className="iq_course_list_des">
                      <div className="iq_course_icon">
                        <span className={course.iconClass}>
                          {Array.from({ length: course.pathsCount }, (_, i) => (
                            <span key={i} className={`path${i + 1}`}></span>
                          ))}
                        </span>
                      </div>
                      <h5>
                        <Link to="/course-detail">{course.title}</Link>
                      </h5>
                      <p>{course.desc}</p>
                      <ul>
                        <li>
                          {/* RATING AREA START */}
                          <div className="rating_down">
                            <div className="rating_up" style={{ width: "100%" }}></div>
                          </div>
                          {/* RATING AREA End */}
                        </li>
                        <li>{course.reviews}</li>
                        <li>
                          <i className="fa fa-user"></i>
                          {course.students}
                        </li>
                      </ul>
                    </div>
                    <Link className="iq_link_1" to="/course-detail">apply now</Link>
                  </div>
                  {/* Courses List End */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Iqoniq Content End */}

      {/* Footer Contact Info Wrap Start */}
      <div className="iq_contact_info">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-map-marker"></i>
              <div className="iq_info_wrap">
                <h5>University Address</h5>
                <p>Abc Street , new town <span>Sydney</span></p>
              </div>
            </li>
            <li>
              <i className="fa fa-phone"></i>
              <div className="iq_info_wrap">
                <h5>Contact Number</h5>
                <span>+ (0) 123 456 7891</span>
                <span>+ (0) 123 456 7891</span>
              </div>
            </li>
            <li>
              <i className="fa fa-phone"></i>
              <div className="iq_info_wrap">
                <h5>Email;</h5>
                <a href="mailto:Info@info.com">Info@info.com</a>
                <a href="mailto:Support@support.com">Support@support.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Contact Info Wrap End */}
    </>
  );
}
