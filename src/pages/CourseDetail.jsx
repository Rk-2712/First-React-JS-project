import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Image Imports
import lessons1 from "../assets/extra-images/lessons1.jpg";
import lessons2 from "../assets/extra-images/lessons2.jpg";
import lessons3 from "../assets/extra-images/lessons3.jpg";
import adminImg from "../assets/extra-images/admin.jpg";
import teacher03 from "../assets/extra-images/teacher-03.jpg";
import teacher04 from "../assets/extra-images/teacher-04.jpg";
import teacher05 from "../assets/extra-images/teacher-05.jpg";
import teacher06 from "../assets/extra-images/teacher-06.jpg";
import sThumb from "../assets/extra-images/s_thumb.jpg";
import instractorImg from "../assets/extra-images/instractor.jpg";
import popularThumb5 from "../assets/extra-images/popular-thumb5.jpg";
import popularThumb2 from "../assets/extra-images/popular-thumb2.jpg";
import popularThumb3 from "../assets/extra-images/popular-thumb3.jpg";

export default function CourseDetail() {
  const [activeTab, setActiveTab] = useState("description");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const slides = [lessons1, lessons2, lessons3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const instructors = [
    {
      id: 1,
      name: "Sara Adward",
      role: "Manager",
      image: teacher03,
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris."
    },
    {
      id: 2,
      name: "Anna Doe",
      role: "Language Instructor",
      image: teacher04,
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris."
    },
    {
      id: 3,
      name: "John Doe",
      role: "Vice President",
      image: teacher05,
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris."
    },
    {
      id: 4,
      name: "Sara Adward",
      role: "Manager",
      image: teacher06,
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris."
    }
  ];

  const feedbacks = [
    { id: 1, name: "Anna Doe Says :", text: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum." },
    { id: 2, name: "Anna Doe Says :", text: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum." },
    { id: 3, name: "Anna Doe Says :", text: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum." },
    { id: 4, name: "Anna Doe Says :", text: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum." },
    { id: 5, name: "Anna Doe Says :", text: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum." }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for course: ${searchQuery}`);
    }
  };

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner course-single">
        <div className="container">
          <h5>course detail</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">course detail</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* Iqoniq Content Wrap Start */}
      <div className="iq_content_wrap">
        {/* coures_single_page START */}
        <section className="coures_single_page">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                {/* course_single_heading START */}
                <div className="course_single_heading">
                  {/* Heading Wrap Start */}
                  <div className="iq_heading_1 text-left">
                    <h4>ASP.NET with <span>C #</span></h4>
                  </div>
                  {/* Heading Wrap End */}
                  {/* courses_socil START */}
                  <ul className="iq_footer_social">
                    <li>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><span className="sr-only">Facebook</span></a>
                    </li>
                    <li>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i><span className="sr-only">Twitter</span></a>
                    </li>
                    <li>
                      <a href="mailto:info@info.com"><i className="fa fa-envelope"></i><span className="sr-only">Email</span></a>
                    </li>
                  </ul>
                  {/* courses_socil end */}
                  {/* course_comments START */}
                  <ul className="course_comments">
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-clock-o"></i>Nov 2015</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-user"></i>Nov 2015</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-comments-o"></i>Nov 2015</Link>
                    </li>
                  </ul>
                  {/* course_comments end */}
                </div>
                {/* course_single_heading end */}

                {/* about_courses START */}
                <div className="about_courses">
                  {/* about_courses_thumb START */}
                  <div className="about_courses_thumb">
                    {/* Premium Auto-rotating Lessons Slider */}
                    <div className="lessons-slider" style={{ position: "relative", overflow: "hidden", minHeight: "350px", marginBottom: "20px" }}>
                      {slides.map((slide, idx) => (
                        <div
                          key={idx}
                          style={{
                            position: idx === 0 ? "relative" : "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: idx === currentSlide ? 1 : 0,
                            visibility: idx === currentSlide ? "visible" : "hidden",
                            transition: "opacity 0.6s ease-in-out, visibility 0.6s ease-in-out",
                            zIndex: idx === currentSlide ? 2 : 1
                          }}
                        >
                          <img src={slide} alt="" style={{ width: "100%", display: "block" }} />
                        </div>
                      ))}
                    </div>

                    <div className="iq-course-info">
                      <div className="course-info">
                        <figure>
                          <img src={adminImg} alt="" />
                        </figure>
                        <div className="text-overflow">
                          <h6><span>By</span> admin</h6>
                        </div>
                      </div>
                      <div className="course-info">
                        <span>
                          <i className="fa fa-tags"></i>
                        </span>
                        <div className="text-overflow">
                          <h6><span>CATEGORIES</span> computer group</h6>
                        </div>
                      </div>
                      <div className="course-info">
                        <span>
                          <i className="fa fa-thumbs-o-up"></i>
                        </span>
                        <div className="text-overflow">
                          <h6>Review</h6>
                          <div className="rating_down">
                            <div className="rating_up" style={{ width: "100%" }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="course-info">
                        <span>
                          <i className="fa fa-dollar"></i>
                        </span>
                        <div className="text-overflow">
                          <h6><span>Course Fee</span> $20 per-month</h6>
                        </div>
                      </div>
                    </div>

                    {/* Tab Menu Wrap Start */}
                    <div className="iq_tab_menu">
                      <ul id="tabs" data-tabs="tabs">
                        <li className={activeTab === "description" ? "active" : ""}>
                          <Link to="#" onClick={(e) => { e.preventDefault(); setActiveTab("description"); }}>Description</Link>
                        </li>
                        <li className={activeTab === "curriculum" ? "active" : ""}>
                          <Link to="#" onClick={(e) => { e.preventDefault(); setActiveTab("curriculum"); }}>Curriculum</Link>
                        </li>
                        <li className={activeTab === "instructor" ? "active" : ""}>
                          <Link to="#" onClick={(e) => { e.preventDefault(); setActiveTab("instructor"); }}>Instructor</Link>
                        </li>
                      </ul>
                    </div>
                    {/* Tab Menu Wrap End */}

                    <div id="my-tab-content" className="tab-content">
                      {/* Description Pane */}
                      <div className={`tab-pane ${activeTab === "description" ? "active" : ""}`} id="description">
                        <div className="about_courses_thumb_capstion">
                          {/* Heading Wrap Start */}
                          <div className="iq_heading_1 iq_heading_2 text-left">
                            <h4>About The <span>Course</span></h4>
                          </div>
                          {/* Heading Wrap End */}
                          <p>
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                          </p>
                          <p>
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit.
                          </p>
                          <div className="border-div"></div>
                          {/* Heading Wrap Start */}
                          <div className="iq_heading_1 iq_heading_2 text-left">
                            <h4>Key <span>Features</span></h4>
                          </div>
                          {/* Heading Wrap End */}
                          <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </p>
                        </div>

                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <ul className="categries-list">
                              <li><Link to="/courses">Updated Installations</Link></li>
                              <li><Link to="/courses">Mega Database Provided</Link></li>
                              <li><Link to="/courses">MaurisIn EratJusto</Link></li>
                              <li><Link to="/courses">Ut Enim Ad Minima Veniam</Link></li>
                              <li><Link to="/courses">MaurisIn EratJusto</Link></li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <ul className="categries-list">
                              <li><Link to="/courses">Introduction of The Course</Link></li>
                              <li><Link to="/courses">Mega Database Provided</Link></li>
                              <li><Link to="/courses">MaurisIn EratJusto</Link></li>
                              <li><Link to="/courses">Ut Enim Ad Minima Veniam</Link></li>
                              <li><Link to="/courses">Ut Enim Ad Minima Veniam</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="border-div"></div>
                        
                        {/* course_lesson START */}
                        <ul className="categries-list">
                          <li>
                            <Link to="/courses">Introduction of The Course</Link><span>Duration : 3 Hours</span>
                          </li>
                          <li>
                            <Link to="/courses">Updated Installations</Link><span>Duration : 3 Hours</span>
                          </li>
                          <li>
                            <Link to="/courses">Introduction of The Course</Link><span>Duration : 3 Hours</span>
                          </li>
                          <li>
                            <Link to="/courses">Updated Installations</Link><span>Duration : 3 Hours</span>
                          </li>
                        </ul>
                        <Link className="iq_link_1" to="/courses">View More lessons</Link>
                      </div>

                      {/* Curriculum Pane */}
                      <div className={`tab-pane ${activeTab === "curriculum" ? "active" : ""}`} id="curriculum">
                        <div className="curriculum-table iqoniq-table">
                          <ul className="table-row table-header">
                            <li><div>Review Code</div></li>
                            <li className="course-name"><div>Review Courses Name</div></li>
                            <li><div>Review Credit</div></li>
                          </ul>
                          
                          <ul className="table-row">
                            <li><div></div></li>
                            <li className="course-name"><div>1st Semester</div></li>
                            <li><div></div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS21</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Geometry and Linear Algebra</Link></div>
                            </li>
                            <li><div>50</div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS22</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Foundations of data Analysis</Link></div>
                            </li>
                            <li><div>45</div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS23</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Intorducation to Algebra I</Link></div>
                            </li>
                            <li><div>40</div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS24</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Data Analysis I</Link></div>
                            </li>
                            <li><div>35</div></li>
                          </ul>

                          <ul className="table-row">
                            <li><div></div></li>
                            <li className="course-name"><div>2nd Semester</div></li>
                            <li><div></div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS25</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Machine Learning</Link></div>
                            </li>
                            <li><div>30</div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS26</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Data Mines</Link></div>
                            </li>
                            <li><div>12</div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS27</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Intorducation to data Analysis II</Link></div>
                            </li>
                            <li><div>25</div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS28</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Intorducation to Algebra II</Link></div>
                            </li>
                            <li><div>20</div></li>
                          </ul>

                          <ul className="table-row">
                            <li><div></div></li>
                            <li className="course-name"><div>3rd Semester</div></li>
                            <li><div></div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS29</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Machine Learning</Link></div>
                            </li>
                            <li><div>15</div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS30</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Data Mines</Link></div>
                            </li>
                            <li><div>12</div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS31</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Intorducation to data Analysis II</Link></div>
                            </li>
                            <li><div>10</div></li>
                          </ul>
                          <ul className="table-row">
                            <li><div>IQS32</div></li>
                            <li className="course-name">
                              <div><Link to="/courses">Intorducation to Algebra II</Link></div>
                            </li>
                            <li><div>5</div></li>
                          </ul>
                        </div>
                      </div>

                      {/* Instructor Pane */}
                      <div className={`tab-pane ${activeTab === "instructor" ? "active" : ""}`} id="instructor">
                        <div className="teacher-wrap-list">
                          {instructors.map((teacher) => (
                            <div key={teacher.id} className="iq_teacher_style_1">
                              <figure>
                                <img src={teacher.image} alt={teacher.name} />
                              </figure>
                              <div className="text">
                                <h4><Link to="/staff">{teacher.name}</Link></h4>
                                <h6>{teacher.role}</h6>
                                <p>{teacher.desc}</p>
                                <ul className="iq_footer_social">
                                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><span className="sr-only">Facebook</span></a></li>
                                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i><span className="sr-only">Twitter</span></a></li>
                                  <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-skype"></i><span className="sr-only">Skype</span></Link></li>
                                  <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest</span></Link></li>
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* course-rating-outer */}
                <div className="course-rating-outer">
                  <div className="iq_heading_1 iq_heading_2 text-left">
                    <h4>Course <span>Rating</span></h4>
                  </div>
                  <div className="course-rating">
                    <div className="course-rating-head">
                      <span><b>4.4/5.0</b></span>
                      <span>360 ratings</span>
                      <div className="rating_down">
                        <div className="rating_up" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    <div className="text">
                      <div className="course-progress">
                        <span className="pull-left">5 Stars</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                            <span className="sr-only">70% Complete</span>
                          </div>
                        </div>
                        <span className="pull-right">15</span>
                      </div>
                      <div className="course-progress">
                        <span className="pull-left">4 Stars</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                            <span className="sr-only">50% Complete</span>
                          </div>
                        </div>
                        <span className="pull-right">09</span>
                      </div>
                      <div className="course-progress">
                        <span className="pull-left">3 Stars</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                            <span className="sr-only">40% Complete</span>
                          </div>
                        </div>
                        <span className="pull-right">03</span>
                      </div>
                      <div className="course-progress">
                        <span className="pull-left">2 Stars</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: "30%" }}>
                            <span className="sr-only">30% Complete</span>
                          </div>
                        </div>
                        <span className="pull-right">05</span>
                      </div>
                      <div className="course-progress">
                        <span className="pull-left">1 Stars</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                            <span className="sr-only">20% Complete</span>
                          </div>
                        </div>
                        <span className="pull-right">0</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feed Back Slider */}
                <div className="feedback-outer">
                  <div className="iq_heading_1 iq_heading_2 text-left">
                    <h4>Students’ s <span>Feedback</span></h4>
                  </div>
                  <div className="feedback-wrap row">
                    {feedbacks.map((fb) => (
                      <div key={fb.id} className="col-sm-6" style={{ marginBottom: "20px" }}>
                        <div className="feedback">
                          <div className="feedback-capstion">
                            <figure>
                              <img src={sThumb} alt="" />
                            </figure>
                            <h6>{fb.name}</h6>
                            <p>{fb.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="aside-bar">
                  {/* course_inrp_side_search */}
                  <div className="widget widget-search">
                    <form onSubmit={handleSearchSubmit} className="iq-input">
                      <input 
                        placeholder="Search ..." 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <label className="iq-input-icon">
                        <input type="submit" value="" style={{ display: "none" }} />
                      </label>
                    </form>
                  </div>

                  {/* course_inrp_side_description */}
                  <div className="widget course-description">
                    <h5 className="widget-title"><span>university</span> DESCRIPTION</h5>
                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                    <ul className="course-lesson-list">
                      <li>
                        <Link to="#" onClick={(e) => e.preventDefault()}>
                          <span className="icon-level-up-arrow"></span>
                          Level
                        </Link>
                        Intermediate
                      </li>
                      <li>
                        <Link to="#" onClick={(e) => e.preventDefault()}>
                          <span className="icon-signs">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                            <span className="path6"></span>
                            <span className="path7"></span>
                            <span className="path8"></span>
                            <span className="path9"></span>
                            <span className="path10"></span>
                            <span className="path11"></span>
                            <span className="path12"></span>
                            <span className="path13"></span>
                            <span className="path14"></span>
                            <span className="path15"></span>
                          </span>
                          Length
                        </Link>
                        9 Weeks
                      </li>
                      <li>
                        <Link to="#" onClick={(e) => e.preventDefault()}>
                          <span className="icon-translate">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                          </span>
                          Language
                        </Link>
                        English
                      </li>
                      <li>
                        <Link to="#" onClick={(e) => e.preventDefault()}>
                          <span className="icon-home">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                          </span>
                          Institution
                        </Link>
                        lorem Ipsum
                      </li>
                    </ul>
                  </div>

                  {/* coures_instractor_area */}
                  <div className="widget coures_instractor_area">
                    <div className="instractor_heading">
                      <h5><Link to="/courses">Enroll This Course</Link></h5>
                    </div>
                    <h5><Link to="/courses">INSTRUCTORS</Link></h5>
                    <div className="coures_instractor_thumb">
                      <figure>
                        <img src={instractorImg} alt="" />
                      </figure>
                      <div className="thumb_capstion">
                        <h5><Link to="/staff">Jonatahan James</Link></h5>
                        <p>Teacher of Computer</p>
                      </div>
                    </div>
                  </div>

                  {/* coures_archives */}
                  <div className="widget widget_archive">
                    <h5 className="widget-title"><span>our</span> Course</h5>
                    <ul>
                      <li>
                        <Link to="/courses">Politics & History</Link><span>03</span>
                      </li>
                      <li>
                        <Link to="/courses">Journalism</Link><span>01</span>
                      </li>
                      <li>
                        <Link to="/courses">Medical Sciences</Link><span>03</span>
                      </li>
                      <li>
                        <Link to="/courses">Health</Link><span>01</span>
                      </li>
                      <li>
                        <Link to="/courses">Sports</Link><span>03</span>
                      </li>
                      <li>
                        <Link to="/courses">Atrs</Link><span>02</span>
                      </li>
                      <li>
                        <Link to="/courses">Tourism & Culture</Link><span>06</span>
                      </li>
                    </ul>
                  </div>

                  {/* COURES CATEGORIES */}
                  <div className="widget widget_time">
                    <h5 className="widget-title"><span>working</span> hours</h5>
                    <ul>
                      <li>
                        <span>Monday</span>08:30 am - 05:30 pm
                      </li>
                      <li>
                        <span>Tuesday</span>08:30 am - 05:30 pm
                      </li>
                      <li>
                        <span>Wednesday</span>08:30 am - 05:30 pm
                      </li>
                      <li>
                        <span>Thursday</span>08:30 am - 05:30 pm
                      </li>
                      <li>
                        <span>Friday</span>08:30 am - 05:30 pm
                      </li>
                      <li>
                        <span>Saturday</span>Closed
                      </li>
                      <li>
                        <span>Sunday</span>Closed
                      </li>
                    </ul>
                  </div>

                  {/* POPULAR START */}
                  <div className="widget widget-popular">
                    <h5 className="widget-title"><span>popular</span>courses</h5>
                    
                    <div className="popular_thumb">
                      <figure>
                        <img src={popularThumb5} alt="" />
                      </figure>
                      <div className="overflow-text">
                        <h6><Link to="/courses">Professional Teaching Course</Link></h6>
                        <div className="rating-wrap">
                          <div className="rating_down">
                            <div className="rating_up" style={{ width: "100%" }}></div>
                          </div>
                        </div>
                        <p>Anna Doe</p>
                        <span>$99.99</span>
                      </div>
                    </div>

                    <div className="popular_thumb">
                      <figure>
                        <img src={popularThumb2} alt="" />
                      </figure>
                      <div className="overflow-text">
                        <h6><Link to="/courses">Professional Teaching Course</Link></h6>
                        <div className="rating-wrap">
                          <div className="rating_down">
                            <div className="rating_up" style={{ width: "100%" }}></div>
                          </div>
                        </div>
                        <p>Anna Doe</p>
                        <span>$99.99</span>
                      </div>
                    </div>

                    <div className="popular_thumb">
                      <figure>
                        <img src={popularThumb3} alt="" />
                      </figure>
                      <div className="overflow-text">
                        <h6><Link to="/courses">Professional Teaching Course</Link></h6>
                        <div className="rating-wrap">
                          <div className="rating_down">
                            <div className="rating_up" style={{ width: "100%" }}></div>
                          </div>
                        </div>
                        <p>Anna Doe</p>
                        <span>$99.99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Info Wrap */}
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
    </>
  );
}