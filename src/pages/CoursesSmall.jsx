import { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import course1 from "../assets/extra-images/featured-course-1.jpg";
import course2 from "../assets/extra-images/featured-course-02.jpg";
import course3 from "../assets/extra-images/featured-course-03.jpg";
import coursePopular1 from "../assets/extra-images/featured-course-01.jpg";

export default function CoursesSmall() {
  const [currentPage, setCurrentPage] = useState(1);

  const courseItems = [
    {
      id: 1,
      image: course1,
      title: "Computer & IT Courses",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum",
      reviews: "101 Reviews",
      students: "3.1 k",
      iconClass: "icon-student",
      pathsCount: 19
    },
    {
      id: 2,
      image: course2,
      title: "Business & Finance",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum",
      reviews: "101 Reviews",
      students: "3.1 k",
      iconClass: "icon-lecture",
      pathsCount: 38
    },
    {
      id: 3,
      image: course3,
      title: "Social Courses",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum",
      reviews: "101 Reviews",
      students: "3.1 k",
      iconClass: "icon-molecule",
      pathsCount: 17
    },
    {
      id: 4,
      image: coursePopular1,
      title: "Neuroscience Courses",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum",
      reviews: "101 Reviews",
      students: "3.1 k",
      iconClass: "icon-doctor-2",
      pathsCount: 38
    },
    {
      id: 5,
      image: course2,
      title: "Politics Courses",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum",
      reviews: "101 Reviews",
      students: "3.1 k",
      iconClass: "icon-debate",
      pathsCount: 12
    },
    {
      id: 6,
      image: course3,
      title: "Zoology Courses",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum",
      reviews: "101 Reviews",
      students: "3.1 k",
      iconClass: "icon-medical-3",
      pathsCount: 24
    }
  ];

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner course-single">
        <div className="container">
          <h5>course grid</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses-small">course grid</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* Iqoniq Content Start */}
      <div className="iq_content_wrap">
        {/* Courses Small Start */}
        <section>
          <div className="container">
            <div className="row">
              {courseItems.map((course) => (
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

              <div className="col-md-12">
                {/* Pagination Start */}
                <div className="iqoniq-pagination text-center">
                  {[1, 2, 3].map((page) => (
                    <Link
                      key={page}
                      className={`page-numbers ${currentPage === page ? "current" : ""}`}
                      to="#"
                      onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}
                    >
                      {page}
                    </Link>
                  ))}
                  <span className="page-numbers border_none">...</span>
                  {[18, 19, 20].map((page) => (
                    <Link
                      key={page}
                      className={`page-numbers ${currentPage === page ? "current" : ""}`}
                      to="#"
                      onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}
                    >
                      {page}
                    </Link>
                  ))}
                </div>
                {/* Pagination End */}
              </div>
            </div>
          </div>
        </section>
        {/* Courses GRID 3 END */}
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