import React from "react";
import { Link } from "react-router-dom";
import teacher1 from "../assets/extra-images/teacher-01.jpg";
import teacher2 from "../assets/extra-images/teacher-02.jpg";
import teacher3 from "../assets/extra-images/teacher-03.jpg";
import teacher4 from "../assets/extra-images/teacher-04.jpg";
import teacher5 from "../assets/extra-images/teacher-05.jpg";
import teacher6 from "../assets/extra-images/teacher-06.jpg";

export default function Staff() {
  const staffMembers = [
    { id: 1, image: teacher1, name: "Anna Doe", role: "Language Instructor", layout: "image-first" },
    { id: 2, image: teacher2, name: "John Doe", role: "Vice President", layout: "text-first" },
    { id: 3, image: teacher3, name: "Sara Adward", role: "Manager", layout: "image-first" },
    { id: 4, image: teacher4, name: "Emma Watson", role: "Science Professor", layout: "image-first" },
    { id: 5, image: teacher5, name: "Robert Downey", role: "Dean of Business", layout: "text-first" },
    { id: 6, image: teacher6, name: "Chris Evans", role: "Athletic Director", layout: "image-first" }
  ];

  return (
    <>
      {/* Banner */}
      <div className="iner_banner">
        <div className="container">
          <h5>Our Staff</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/staff">Staff</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="iq_content_wrap">
        <section className="our-teachers-page" style={{ padding: "60px 0" }}>
          <div className="container">
            {/* Heading */}
            <div className="iq_heading_1 text-center" style={{ marginBottom: "40px" }}>
              <h4>Meet Our <span>Educators & Staff</span></h4>
              <p>Our experienced administrators and faculty members dedicated to cultivating academic achievement.</p>
            </div>

            {/* Staff list grid */}
            <div className="row">
              {staffMembers.map((member) => (
                <div key={member.id} className="col-md-4 col-sm-6" style={{ marginBottom: "40px" }}>
                  <div className="iq_teacher_style_1" style={{ border: "1px solid #eee", background: "#fff", borderRadius: "4px", overflow: "hidden" }}>
                    
                    {member.layout === "image-first" ? (
                      <>
                        <figure style={{ margin: 0 }}>
                          <img src={member.image} alt={member.name} style={{ width: "100%" }} />
                        </figure>
                        <div className="text" style={{ padding: "20px" }}>
                          <h4 style={{ margin: "0 0 5px 0" }}>{member.name}</h4>
                          <h6 style={{ margin: "0 0 10px 0", color: "#29b6f6" }}>{member.role}</h6>
                          <p style={{ color: "#666", fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nibh vel velit auctor aliquet.</p>
                          <ul className="iq_footer_social" style={{ display: "flex", gap: "10px", padding: 0, margin: "15px 0 0 0" }}>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-skype"></i></Link></li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text" style={{ padding: "20px" }}>
                          <h4 style={{ margin: "0 0 5px 0" }}>{member.name}</h4>
                          <h6 style={{ margin: "0 0 10px 0", color: "#29b6f6" }}>{member.role}</h6>
                          <p style={{ color: "#666", fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nibh vel velit auctor aliquet.</p>
                          <ul className="iq_footer_social" style={{ display: "flex", gap: "10px", padding: 0, margin: "15px 0 0 0" }}>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-skype"></i></Link></li>
                          </ul>
                        </div>
                        <figure style={{ margin: 0 }}>
                          <img src={member.image} alt={member.name} style={{ width: "100%" }} />
                        </figure>
                      </>
                    )}

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
