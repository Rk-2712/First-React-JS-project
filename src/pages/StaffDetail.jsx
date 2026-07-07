import { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import teacherImg from "../assets/extra-images/teacher.jpg";
import course1 from "../assets/extra-images/featured-course-1.jpg";
import course2 from "../assets/extra-images/featured-course-2.jpg";
import course3 from "../assets/extra-images/featured-course-3.jpg";
import course4 from "../assets/extra-images/featured-course-4.jpg";
import sSlider from "../assets/extra-images/s-slider.jpg";
import sSlider2 from "../assets/extra-images/s-slider2.jpg";

export default function StaffDetail() {
  const [activeTab, setActiveTab] = useState("Biography");

  const bioItems = [
    "Temporibus autem quibusdam et aut officiis debitis",
    "At vero eos et accusamus et iusto odio",
    "Et harum quidem rerum facilis est et expedita distinctio",
    "Itaque earum rerum hic tenetur a sapiente",
    "Ut enim ad minima veniam",
    "Duis aute irure dolor in reprehenderit in voluptate"
  ];

  const teacherCourses = [
    { id: 1, image: course1, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 2, image: course2, title: "Photography lectures", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 3, image: course3, title: "Developing Mobile Apps", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 4, image: course4, title: "Business & Finance", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" },
    { id: 5, image: course1, title: "Computer & IT Courses", map: "Education University", desc: "This is Photoshop's version of Lorem Ipsum. Proin nibh vel velit auctor aliquet.", level: "Undergraduate", type: "Full Time", duration: "3 Years", reviews: "13 +", price: "$ 69, 00" }
  ];

  const expertSliders = [
    { id: 1, image: sSlider, name: "Joana Magi", role: "IT EXPERT", desc: "Enean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh." },
    { id: 2, image: sSlider2, name: "Joana Magi", role: "IT EXPERT", desc: "Enean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh." },
    { id: 3, image: sSlider, name: "Joana Magi", role: "IT EXPERT", desc: "Enean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh." }
  ];

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner">
        <div className="container">
          <h5>Staff Detail</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/staff-detail">Staff Detail</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* Iqoniq Content Start */}
      <div className="iq_content_wrap">
        {/* container_page START */}
        <section>
          <div className="container">
            <div className="row">
              {/* OUR TEACHER CONTACT START */}
              <div className="our_teacher_page">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <img src={teacherImg} alt="" />
                        {/* TEACHER SOCIAL START */}
                        <ul className="o_teacher_social">
                          <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><span className="sr-only">Facebook</span></a>
                          </li>
                          <li>
                            <Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-google-plus"></i><span className="sr-only">Google Plus</span></Link>
                          </li>
                          <li>
                            <Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-skype"></i><span className="sr-only">Skype</span></Link>
                          </li>
                          <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i><span className="sr-only">Twitter</span></a>
                          </li>
                        </ul>
                        {/* TEACHER SOCIAL END */}
                        <Link to="/courses">Mathematics</Link>
                      </figure>
                    </div>
                    <div className="col-md-8">
                      {/* TEACHER CONTACT START */}
                      <ul className="c_teacher_contct">
                        <li>
                          <h6><i className="fa fa-map-marker"></i>Postal Address</h6>
                          <p>PO Box 995864 Park 2 Street, Westen Park <span>London</span></p>
                        </li>
                        <li>
                          <h6><i className="fa fa-phone"></i>Phone</h6>
                          <p>0 (900) 123 456 78992</p>
                        </li>
                        <li>
                          <h6><i className="fa fa-envelope"></i>Email</h6>
                          <p>Info@info.com</p>
                        </li>
                        <li>
                          <h6><i className="fa fa-globe"></i>Website</h6>
                          <p>www.info.com</p>
                        </li>
                      </ul>
                      {/* TEACHER SOCIAL END */}
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  {/* TEACHER DETAIL START */}
                  <div className="o_teacher_details">
                    <div className="teacher_heading">
                      <h5 className="border_effcet">Elena Davis</h5>
                      <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <ul className="categries-list">
                            {bioItems.map((item, idx) => (
                              <li key={idx}>
                                <Link to="#" onClick={(e) => e.preventDefault()}>{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <ul className="categries-list">
                            {bioItems.map((item, idx) => (
                              <li key={idx}>
                                <Link to="#" onClick={(e) => e.preventDefault()}>{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="teacher_biography">
                      {/* Nav tabs */}
                      <div className="iq_tab_menu">
                        <ul className="iq_tab_menu" role="tablist">
                          <li role="presentation" className={activeTab === "Biography" ? "active" : ""}>
                            <Link
                              to="#"
                              role="tab"
                              onClick={(e) => { e.preventDefault(); setActiveTab("Biography"); }}
                            >
                              Biography
                            </Link>
                          </li>
                          <li role="presentation" className={activeTab === "Skills" ? "active" : ""}>
                            <Link
                              to="#"
                              role="tab"
                              onClick={(e) => { e.preventDefault(); setActiveTab("Skills"); }}
                            >
                              Skills
                            </Link>
                          </li>
                          <li role="presentation" className={activeTab === "Details" ? "active" : ""}>
                            <Link
                              to="#"
                              role="tab"
                              onClick={(e) => { e.preventDefault(); setActiveTab("Details"); }}
                            >
                              Prof.Details
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Tab panes */}
                      <div className="tab-content">
                        <div role="tabpanel" className={`tab-pane fade ${activeTab === "Biography" ? "in active" : ""}`} id="Biography">
                          {/* TEACHER BIO AREA START */}
                          <div className="teacher_bio_area">
                            <div className="teacher_heading">
                              <h5 className="border_effcet">Elena Davis</h5>
                              <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
                              <div className="row">
                                <div className="col-md-6 col-sm-6">
                                  <ul className="categries-list">
                                    {bioItems.map((item, idx) => (
                                      <li key={idx}>
                                        <Link to="#" onClick={(e) => e.preventDefault()}>{item}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                  <ul className="categries-list">
                                    {bioItems.map((item, idx) => (
                                      <li key={idx}>
                                        <Link to="#" onClick={(e) => e.preventDefault()}>{item}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* TEACHER BIO AREA END */}
                        </div>

                        <div role="tabpanel" className={`tab-pane fade ${activeTab === "Skills" ? "in active" : ""}`} id="Skills">
                          {/* TEACHER BIO AREA START */}
                          <div className="teacher_bio_area">
                            <h5>Unordered List</h5>
                            <ul className="categries-list">
                              <li>
                                <Link to="#" onClick={(e) => e.preventDefault()}>Temporibus autem quibusdam et aut officiis debitis</Link>
                              </li>
                              <li>
                                <Link to="#" onClick={(e) => e.preventDefault()}>At vero eos et accusamus et iusto odio</Link>
                              </li>
                              <li>
                                <Link to="#" onClick={(e) => e.preventDefault()}>Et harum quidem rerum facilis est et expedita distinctio</Link>
                              </li>
                            </ul>
                            <h5>Ordered List</h5>
                            <ul className="categries-list">
                              <li>
                                <Link to="#" onClick={(e) => e.preventDefault()}>Temporibus autem quibusdam et aut officiis debitis</Link>
                              </li>
                              <li>
                                <Link to="#" onClick={(e) => e.preventDefault()}>At vero eos et accusamus et iusto odio</Link>
                              </li>
                              <li>
                                <Link to="#" onClick={(e) => e.preventDefault()}>Et harum quidem rerum facilis est et expedita distinctio</Link>
                              </li>
                            </ul>
                          </div>
                          {/* TEACHER BIO AREA END */}
                        </div>

                        <div role="tabpanel" className={`tab-pane fade ${activeTab === "Details" ? "in active" : ""}`} id="Details">
                          {/* TEACHER BIO AREA START */}
                          <div className="teacher_bio_area">
                            <div className="teacher_heading">
                              <h5 className="border_effcet">Elena Davis</h5>
                              <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
                              <div className="row">
                                <div className="col-md-6 col-sm-6">
                                  <ul className="categries-list">
                                    {bioItems.map((item, idx) => (
                                      <li key={idx}>
                                        <Link to="#" onClick={(e) => e.preventDefault()}>{item}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                  <ul className="categries-list">
                                    {bioItems.map((item, idx) => (
                                      <li key={idx}>
                                        <Link to="#" onClick={(e) => e.preventDefault()}>{item}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* TEACHER BIO AREA END */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* TEACHER Details END */}
                </div>
              </div>
              {/* OUR TEACHER CONTACT END */}
            </div>
          </div>
        </section>

        {/* Number Counter Wrap Start */}
        <section className="iq_number_count_bg">
          <div className="container">
            <div className="row">
              {/* Number Counter Start */}
              <div className="col-md-3 col-sm-6">
                <div className="iq_counter">
                  <i className="fa fa-graduation-cap"></i>
                  <span className="counter">3746</span>
                  <h6>Total Lectures</h6>
                </div>
              </div>
              {/* Number Counter End */}
              {/* Number Counter Start */}
              <div className="col-md-3 col-sm-6">
                <div className="iq_counter">
                  <i className="fa fa-facebook"></i>
                  <span className="counter">1921</span>
                  <h6>Total Courses</h6>
                </div>
              </div>
              {/* Number Counter End */}
              {/* Number Counter Start */}
              <div className="col-md-3 col-sm-6">
                <div className="iq_counter">
                  <i className="fa fa-file-archive-o"></i>
                  <span className="counter">183</span>
                  <h6>Total Tests</h6>
                </div>
              </div>
              {/* Number Counter End */}
              {/* Number Counter Start */}
              <div className="col-md-3 col-sm-6">
                <div className="iq_counter">
                  <i className="fa fa-book"></i>
                  <span className="counter">1635</span>
                  <h6>Total Classes</h6>
                </div>
              </div>
              {/* Number Counter End */}
            </div>
          </div>
        </section>
        {/* Number Counter Wrap End */}

        <section>
          <div className="teacher_page_slider">
            <div className="container">
              {/* Heading Wrap Start */}
              <div className="iq_heading_1 text-left">
                <h4>Elena Davis <span>Courses</span></h4>
              </div>
              {/* Heading Wrap End */}
              
              {/* Courses Slider Start */}
              <div className="courses-slider row">
                {teacherCourses.map((course) => (
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

              {/* Heading Wrap Start */}
              <div className="iq_heading_1 text-left">
                <h4>Elena Davis <span>Courses</span></h4>
              </div>
              {/* Heading Wrap End */}
              
              <div className="testimonial-slider row">
                {expertSliders.map((slide) => (
                  <div key={slide.id} className="col-md-4 col-sm-6" style={{ marginBottom: "30px" }}>
                    {/* courses popular thumb start */}
                    <div className="teacher_s2_thumb">
                      <figure>
                        <img alt="" src={slide.image} />
                        <ul className="s-social">
                          <li>
                            <a className="facebook-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><span className="sr-only">Facebook</span></a>
                          </li>
                          <li>
                            <Link className="linkedin-2" to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-linkedin"></i><span className="sr-only">LinkedIn</span></Link>
                          </li>
                          <li>
                            <Link className="skype-2" to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-skype"></i><span className="sr-only">Skype</span></Link>
                          </li>
                          <li>
                            <a className="youtube-2" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i><span className="sr-only">YouTube</span></a>
                          </li>
                        </ul>
                      </figure>
                      {/* s2_capstion_thumb start */}
                      <div className="s2_capstion_thumb">
                        {/* popular caption start */}
                        <div className="s2_heading">
                          <h5>{slide.name}</h5>
                          <span>{slide.role}</span>
                        </div>
                        <div className="s2_details">
                          <p>{slide.desc}</p>
                        </div>
                      </div>
                      {/* s2_capstion_thumb end */}
                    </div>
                    {/* courses popular thumb end */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Iqoniq Content End */}

      {/* Contact Info Wrap Start */}
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
      {/* Contact Info Wrap End */}
    </>
  );
}
