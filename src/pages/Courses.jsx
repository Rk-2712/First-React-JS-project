import React, { useState } from "react";
import { Link } from "react-router-dom";
import course07 from "../assets/extra-images/featured-course-07.jpg";
import course2 from "../assets/extra-images/featured-course-2.jpg";
import course08 from "../assets/extra-images/featured-course-08.jpg";
import course1 from "../assets/extra-images/featured-course-1.jpg";
import course3 from "../assets/extra-images/featured-course-03.jpg";
import course4 from "../assets/extra-images/featured-course-4.jpg";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("Popular");

  const coursesData = {
    Popular: [
      { id: 1, image: course07, title: "Computer & IT Courses", price: "$ 69.00", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +" },
      { id: 2, image: course2, title: "Photography Lectures", price: "$ 59.00", level: "Undergraduate", type: "Part Time", duration: "1 Year", reviews: "21 +" },
      { id: 3, image: course08, title: "Developing Mobile Apps", price: "$ 79.00", level: "Postgraduate", type: "Full Time", duration: "2 Years", reviews: "45 +" }
    ],
    recommended: [
      { id: 4, image: course1, title: "Business & Finance", price: "$ 89.00", level: "Postgraduate", type: "Full Time", duration: "2 Years", reviews: "52 +" },
      { id: 5, image: course3, title: "Social Sciences", price: "$ 49.00", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "19 +" }
    ],
    newcourses: [
      { id: 6, image: course4, title: "Machine Learning Intro", price: "$ 99.00", level: "Postgraduate", type: "Part Time", duration: "6 Months", reviews: "5 +" },
      { id: 7, image: course2, title: "Creative Web Design", price: "$ 69.00", level: "Undergraduate", type: "Full Time", duration: "1 Year", reviews: "12 +" }
    ],
    lastcall: [
      { id: 8, image: course08, title: "Advanced Zoology Lab", price: "$ 120.00", level: "Doctorate", type: "Full Time", duration: "4 Years", reviews: "8 +" }
    ]
  };

  return (
    <>
      {/* Banner */}
      <div className="iner_banner">
        <div className="container">
          <h5>Our Courses</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="iq_content_wrap">
        <section className="iqoniq1_our_courses_inpg" style={{ padding: "60px 0" }}>
          <div className="container">
            {/* Tabs List */}
            <div className="list_setting" style={{ marginBottom: "35px" }}>
              <ul className="iqoniq-tabs" style={{ display: "flex", gap: "20px", listStyle: "none", padding: 0 }}>
                {Object.keys(coursesData).map((tab) => (
                  <li key={tab} className={activeTab === tab ? "active" : ""}>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); setActiveTab(tab); }}
                      style={{ textTransform: "capitalize", fontWeight: "bold" }}
                    >
                      {tab === "newcourses" ? "New Courses" : tab === "lastcall" ? "Last Call" : tab}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses Display grid */}
            <div className="row">
              {coursesData[activeTab].map((course) => (
                <div key={course.id} className="col-md-4 col-sm-6" style={{ marginBottom: "30px" }}>
                  <div className="coureses_Popular_thumb" style={{ border: "1px solid #eee", background: "#fff", borderRadius: "4px", overflow: "hidden" }}>
                    <figure style={{ position: "relative", margin: 0 }}>
                      <img alt={course.title} src={course.image} style={{ width: "100%" }} />
                      <a className="iq_link_1" href="#" onClick={(e) => e.preventDefault()} style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                        View Detail
                      </a>
                    </figure>
                    <div className="Popular_capstion_thumb" style={{ padding: "20px" }}>
                      <div className="popular_capstion">
                        <h5 style={{ margin: "0 0 10px 0" }}><a href="#" onClick={(e) => e.preventDefault()}>{course.title}</a></h5>
                        <div className="map_icon" style={{ fontSize: "12px", color: "#888", marginBottom: "10px" }}>
                          <i className="fa fa-map-marker" style={{ marginRight: "5px" }}></i>Education University
                        </div>
                        <div className="rating_down" style={{ marginBottom: "15px" }}>
                          <div className="rating_up" style={{ width: "100%" }}></div>
                        </div>
                        <p style={{ color: "#666", fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh vel velit auctor aliquet.</p>
                      </div>

                      <ul className="popular_capstion_bottom text-center" style={{ display: "flex", justifyContent: "space-between", listStyle: "none", padding: "15px 0", margin: "15px 0 0 0", borderTop: "1px solid #eee", fontSize: "13px", color: "#555" }}>
                        <li>
                          <span style={{ display: "block", fontWeight: "bold" }}>{course.level}</span>
                          <span className="right" style={{ color: "#888" }}>{course.type}</span>
                        </li>
                        <li>
                          <span style={{ display: "block", fontWeight: "bold" }}>{course.duration}</span>
                          <span className="right" style={{ color: "#888" }}>{course.reviews} Reviews</span>
                        </li>
                      </ul>
                      
                      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span className="price" style={{ fontSize: "16px", color: "#333" }}>
                          <strong style={{ fontSize: "20px", color: "#29b6f6" }}>{course.price}</strong> / year
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* Address Strip */}
      <div className="iq_contact_info" style={{ backgroundColor: "#222", color: "#fff", padding: "50px 0" }}>
        <div className="container">
          <div className="row" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div className="col-md-4 col-sm-6" style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <i className="fa fa-map-marker" style={{ fontSize: "30px", color: "#29b6f6" }}></i>
              <div className="iq_info_wrap">
                <h5 style={{ color: "#fff", margin: "0 0 5px 0" }}>University Address</h5>
                <p style={{ margin: 0, color: "#aaa" }}>Abc Street , new town <span>Sydney</span></p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6" style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <i className="fa fa-phone" style={{ fontSize: "30px", color: "#29b6f6" }}></i>
              <div className="iq_info_wrap">
                <h5 style={{ color: "#fff", margin: "0 0 5px 0" }}>Contact Number</h5>
                <span style={{ display: "block", color: "#aaa" }}>+ (0) 123 456 7891</span>
                <span style={{ display: "block", color: "#aaa" }}>+ (0) 123 456 7892</span>
              </div>
            </div>

            <div className="col-md-4 col-sm-6" style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <i className="fa fa-envelope" style={{ fontSize: "30px", color: "#29b6f6" }}></i>
              <div className="iq_info_wrap">
                <h5 style={{ color: "#fff", margin: "0 0 5px 0" }}>Email</h5>
                <a href="mailto:Info@info.com" style={{ display: "block", color: "#aaa" }}>Info@info.com</a>
                <a href="mailto:Support@support.com" style={{ display: "block", color: "#aaa" }}>Support@support.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
