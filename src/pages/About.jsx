import React from "react";
import { Link } from "react-router-dom";
import aboutUsImg from "../assets/extra-images/about_us.jpg";
import teacher1 from "../assets/extra-images/teacher-01.jpg";
import teacher2 from "../assets/extra-images/teacher-02.jpg";
import teacher3 from "../assets/extra-images/teacher-03.jpg";

export default function About() {
  return (
    <>
      {/* Banner/Title section */}
      <div className="iner_banner">
        <div className="container">
          <h5>About Us</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="iq_content_wrap">
        {/* Welcome Section */}
        <section className="about-us-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="text">
                  <div className="iq_heading_1 text-left">
                    <h4>Welcome to <span>Education University</span></h4>
                  </div>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                    Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    Nam nec tellus a odio tincidunt auctor a ornare odio.
                  </p>
                  <ul className="categries-list">
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Our Mission and Philosophy</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Our Departments and Programs</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Why We Are Best</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Great Career Outcomes</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="thumb">
                  <img src={aboutUsImg} alt="About Us" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Knowledge Banner */}
        <section className="iq_best_knowledge_bg">
          <div className="col-md-6 col-sm-offset-6 col-md-offset-6">
            <div className="iq_knowledge_des">
              <div className="iq_heading_1 text-left">
                <h4>Get The <span>Best knowledge</span><br />From Us</h4>
              </div>
              <h5>Have the Courage to have Convictions</h5>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit</p>
              <Link className="iq_link_1" to="/courses">Join Us</Link>
            </div>
          </div>
        </section>

        {/* Course Progress Section */}
        <section style={{ padding: "60px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="text progress-caption">
                  <div className="iq_heading_1 text-left">
                    <h4>Our Courses <span>Progress</span></h4>
                  </div>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                    Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                  </p>
                  <Link className="iq_link_1" to="/courses">Learn More</Link>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                {/* Progress bar 1 */}
                <div className="iq-progress">
                  <h6 className="progressText"> Business & Finance </h6>
                  <div className="progress" style={{ height: "12px", background: "#eee", borderRadius: "6px", overflow: "hidden" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: "40%", background: "#29b6f6", height: "100%" }}>
                    </div>
                  </div>
                </div>
                
                {/* Progress bar 2 */}
                <div className="iq-progress" style={{ marginTop: "20px" }}>
                  <h6 className="progressText"> Social Courses </h6>
                  <div className="progress" style={{ height: "12px", background: "#eee", borderRadius: "6px", overflow: "hidden" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: "50%", background: "#29b6f6", height: "100%" }}>
                    </div>
                  </div>
                </div>

                {/* Progress bar 3 */}
                <div className="iq-progress" style={{ marginTop: "20px" }}>
                  <h6 className="progressText"> Computer & IT Courses </h6>
                  <div className="progress" style={{ height: "12px", background: "#eee", borderRadius: "6px", overflow: "hidden" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: "75%", background: "#29b6f6", height: "100%" }}>
                    </div>
                  </div>
                </div>

                {/* Progress bar 4 */}
                <div className="iq-progress" style={{ marginTop: "20px" }}>
                  <h6 className="progressText"> Language Courses </h6>
                  <div className="progress" style={{ height: "12px", background: "#eee", borderRadius: "6px", overflow: "hidden" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: "100%", background: "#29b6f6", height: "100%" }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Wrapper (Call to Action) */}
        <section className="video-wrap" style={{ textAlign: "center", padding: "80px 0", color: "#fff" }}>
          <div className="container">
            <h1 style={{ color: "#fff" }}>Start Learning New Things</h1>
            <h5 style={{ color: "#fff", marginBottom: "35px" }}>We are the best online course professionals</h5>
            <a href="#" className="play-track" onClick={(e) => { e.preventDefault(); alert("Playing introductory video..."); }} style={{ color: "#fff", fontSize: "20px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <i className="fa fa-play-circle-o" style={{ fontSize: "40px" }}></i>Watch Video
            </a>
          </div>
        </section>

        {/* Teachers Section */}
        <section style={{ padding: "60px 0" }}>
          <div className="container">
            <div className="iq_heading_1 text-center">
              <h4>Our <span>Teachers</span></h4>
              <p>Our dedicated educators are here to guide your pathway to academic excellence.</p>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="iq_teacher_style_1">
                  <figure><img src={teacher1} alt="Anna Doe" /></figure>
                  <div className="text">
                    <h4><Link to="/staff">Anna Doe</Link></h4>
                    <h6>Language Instructor</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul className="iq_footer_social" style={{ display: "flex", gap: "10px", padding: 0 }}>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-skype"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="iq_teacher_style_1">
                  <div className="text">
                    <h4><Link to="/staff">John Doe</Link></h4>
                    <h6>Vice President</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul className="iq_footer_social" style={{ display: "flex", gap: "10px", padding: 0 }}>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-skype"></i></a></li>
                    </ul>
                  </div>
                  <figure><img src={teacher2} alt="John Doe" /></figure>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="iq_teacher_style_1">
                  <figure><img src={teacher3} alt="Sara Adward" /></figure>
                  <div className="text">
                    <h4><Link to="/staff">Sara Adward</Link></h4>
                    <h6>Manager</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul className="iq_footer_social" style={{ display: "flex", gap: "10px", padding: 0 }}>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-skype"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
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