import { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import course1 from "../assets/extra-images/featured-course-1.jpg";
import course2 from "../assets/extra-images/featured-course-02.jpg";
import course3 from "../assets/extra-images/featured-course-03.jpg";
import course4 from "../assets/extra-images/featured-course-04.jpg";
import course5 from "../assets/extra-images/featured-course-05.jpg";
import course6 from "../assets/extra-images/featured-course-06.jpg";

export default function OurCoursesList() {
  const [activeTab, setActiveTab] = useState("Popular");
  const [filterLetter, setFilterLetter] = useState("0");

  const popularCourses = [
    { id: 1, image: course1, title: "Computer & IT Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "101 Reviews", students: "3.1 k", iconClass: "icon-student", pathsCount: 19 },
    { id: 2, image: course2, title: "Business & Finance", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "101 Reviews", students: "3.1 k", iconClass: "icon-lecture", pathsCount: 38 },
    { id: 3, image: course3, title: "Social Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "101 Reviews", students: "3.1 k", iconClass: "icon-molecule", pathsCount: 17 },
    { id: 4, image: course4, title: "Neuroscience Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "101 Reviews", students: "3.1 k", iconClass: "icon-doctor-2", pathsCount: 38 },
    { id: 5, image: course5, title: "Politics Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "101 Reviews", students: "3.1 k", iconClass: "icon-debate", pathsCount: 12 },
    { id: 6, image: course6, title: "Zoology Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "101 Reviews", students: "3.1 k", iconClass: "icon-medical-3", pathsCount: 24 }
  ];

  const recommendedCourses = [
    { id: 1, image: course3, title: "Social Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "89 Reviews", students: "2.5 k", iconClass: "icon-molecule", pathsCount: 17 },
    { id: 2, image: course1, title: "Computer & IT Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "120 Reviews", students: "4.2 k", iconClass: "icon-student", pathsCount: 19 },
    { id: 3, image: course5, title: "Politics Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "75 Reviews", students: "1.8 k", iconClass: "icon-debate", pathsCount: 12 },
    { id: 4, image: course2, title: "Business & Finance", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "94 Reviews", students: "2.9 k", iconClass: "icon-lecture", pathsCount: 38 }
  ];

  const newCourses = [
    { id: 1, image: course4, title: "Neuroscience Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "45 Reviews", students: "1.1 k", iconClass: "icon-doctor-2", pathsCount: 38 },
    { id: 2, image: course6, title: "Zoology Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "32 Reviews", students: "0.8 k", iconClass: "icon-medical-3", pathsCount: 24 },
    { id: 3, image: course1, title: "Computer & IT Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "12 Reviews", students: "0.3 k", iconClass: "icon-student", pathsCount: 19 }
  ];

  const lastCallCourses = [
    { id: 1, image: course2, title: "Business & Finance", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "210 Reviews", students: "6.5 k", iconClass: "icon-lecture", pathsCount: 38 },
    { id: 2, image: course5, title: "Politics Courses", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum", reviews: "135 Reviews", students: "3.8 k", iconClass: "icon-debate", pathsCount: 12 }
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

  const filteredCourses = activeCoursesList.filter((course) => {
    if (filterLetter === "0") return true;
    return course.title.toLowerCase().startsWith(filterLetter.toLowerCase());
  });

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner Courses-list">
        <div className="container">
          <h5>Courses list</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/our-courses-list">Courses List</Link></li>
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
            <div className="courses_tabs">
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

                {/* Input Start */}
                <div className="iq-input">
                  <select
                    name="Sort by name"
                    value={filterLetter}
                    onChange={(e) => setFilterLetter(e.target.value)}
                  >
                    <option value="0">Sort by name</option>
                    {"abcdefghijklmnopqrstuvwxyz".split("").map((char) => (
                      <option key={char} value={char}>
                        {char.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Input End */}
              </div>

              {/* Tab Content Start */}
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id={activeTab}>
                  <div className="row">
                    {filteredCourses.length > 0 ? (
                      filteredCourses.map((course) => (
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
                      ))
                    ) : (
                      <div className="col-xs-12 text-center" style={{ padding: "40px 0" }}>
                        <h4>No courses found matching the selected letter.</h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* OUR CORSES INPNER PAGE END */}
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
              <i className="fa fa-envelope"></i>
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