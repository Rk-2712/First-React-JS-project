import { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import eventPg from "../assets/extra-images/event-pg.jpg";
import eventThumb from "../assets/extra-images/event-thumb.jpg";
import featured02 from "../assets/extra-images/featured-course-02.jpg";
import featured01 from "../assets/extra-images/featured-course-1.jpg";
import popular1 from "../assets/extra-images/popular-thumb1.jpg";
import popular2 from "../assets/extra-images/popular-thumb2.jpg";
import popular3 from "../assets/extra-images/popular-thumb3.jpg";
import popular5 from "../assets/extra-images/popular-thumb5.jpg";

export default function EventDetail() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for event/course: ${searchQuery}`);
    }
  };

  const thumbs = [
    { id: 1, image: eventThumb, title: "Working" },
    { id: 2, image: eventThumb, title: "Working" },
    { id: 3, image: eventThumb, title: "Working" },
    { id: 4, image: eventThumb, title: "Working" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      image: featured02,
      title: "Business & Finance",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum",
      reviews: "101 Reviews",
      students: "3.1 k",
      iconClass: "icon-student",
      pathsCount: 19
    },
    {
      id: 2,
      image: featured01,
      title: "Computer & IT Courses",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum",
      reviews: "101 Reviews",
      students: "3.1 k",
      iconClass: "icon-student",
      pathsCount: 19
    }
  ];

  const newsPopular = [
    { id: 1, image: popular1, title: "Neque porro quisquam est qui dolorem dolor", date: "19 Dec, 2015" },
    { id: 2, image: popular2, title: "Neque porro quisquam est qui dolorem dolor", date: "19 Dec, 2015" },
    { id: 3, image: popular3, title: "Neque porro quisquam est qui dolorem dolor", date: "19 Dec, 2015" }
  ];

  const coursesPopular = [
    { id: 1, image: popular5, title: "Professional Teaching Course", author: "Anna Doe", price: "$99.99" },
    { id: 2, image: popular2, title: "Professional Teaching Course", author: "Anna Doe", price: "$99.99" },
    { id: 3, image: popular3, title: "Professional Teaching Course", author: "Anna Doe", price: "$99.99" }
  ];

  const tags = ["Science", "knowledge", "Courage", "Sports", "Impression", "History & Politics", "Admission", "Arts", "Research", "Career", "PHD"];

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner ent_detail">
        <div className="container">
          <h5>event - Detail</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Event - Detail</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* iqoniq Content Start */}
      <div className="iq_content_wrap">
        <section>
          <div className="event-page">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="event_pg_blog">
                    <figure>
                      <img src={eventPg} alt="" />
                    </figure>
                    <div className="fig_caption link">
                      <span><strong>jan</strong> 09</span>
                      <Link to="#" onClick={(e) => e.preventDefault()}>
                        <i className="fa fa-user"></i>by admin
                      </Link>
                    </div>

                    {/* Heading Wrap Start */}
                    <div className="iq_heading_1 text-left">
                      <h4>Student Meeting to <span>Events</span></h4>
                    </div>
                    {/* Heading Wrap End */}

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

                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh cursus sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>

                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <ul className="categries-list">
                          <li><Link to="/about">Our Mission and Philosophy</Link></li>
                          <li><Link to="/courses">Our Departments and Programms</Link></li>
                          <li><Link to="/about">Why We Are Best</Link></li>
                          <li><Link to="/about">Great Career Outcomes</Link></li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <ul className="categries-list">
                          <li><Link to="/about">Our Mission and Philosophy</Link></li>
                          <li><Link to="/courses">Our Departments and Programms</Link></li>
                          <li><Link to="/about">Why We Are Best</Link></li>
                          <li><Link to="/about">Great Career Outcomes</Link></li>
                        </ul>
                      </div>
                    </div>

                    <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. </p>

                    <div className="row">
                      {thumbs.map((item, idx) => (
                        <div key={idx} className="col-md-3 col-sm-6">
                          <div className="event_thumb_area">
                            <figure>
                              <img src={item.image} alt="" />
                            </figure>
                            <div className="event_pg_tcapstion">
                              <h5><Link to="#" onClick={(e) => e.preventDefault()}>{item.title}</Link></h5>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p> Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>

                    {/* upcoming events area */}
                    <div className="edu_upmg_area">
                      {/* Heading Wrap Start */}
                      <div className="iq_heading_1 text-left">
                        <h4>Upcoming <span>Events</span></h4>
                      </div>
                      <div className="row">
                        {upcomingEvents.map((event) => (
                          <div key={event.id} className="col-md-6 col-sm-6">
                            <div className="iq_course_list">
                              <figure>
                                <img src={event.image} alt="" />
                              </figure>
                              <div className="iq_course_list_des">
                                <div className="iq_course_icon">
                                  <span className={event.iconClass}>
                                    {Array.from({ length: event.pathsCount }, (_, i) => (
                                      <span key={i} className={`path${i + 1}`}></span>
                                    ))}
                                  </span>
                                </div>
                                <h5>
                                  <Link to="/course-detail">{event.title}</Link>
                                </h5>
                                <p>{event.desc}</p>
                                <ul>
                                  <li>
                                    {/* RATING AREA START */}
                                    <div className="rating_down">
                                      <div className="rating_up" style={{ width: "100%" }}></div>
                                    </div>
                                    {/* RATING AREA End */}
                                  </li>
                                  <li>{event.reviews}</li>
                                  <li>
                                    <i className="fa fa-user"></i>
                                    {event.students}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="aside-bar">
                    {/* course_inrp_side_search START */}
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

                    {/* coures_archives start */}
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

                    {/* POPULAR START */}
                    <div className="widget widget-popular">
                      <h5 className="widget-title"><span>popular</span>courses</h5>
                      {newsPopular.map((news) => (
                        <div key={news.id} className="popular_thumb">
                          <figure>
                            <img src={news.image} alt="" />
                          </figure>
                          <div className="overflow-text">
                            <h6><Link to="/blog-detail">{news.title}</Link></h6>
                            <p>{news.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* COURES CATEGORIES START */}
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
                      {coursesPopular.map((course) => (
                        <div key={course.id} className="popular_thumb">
                          <figure>
                            <img src={course.image} alt="" />
                          </figure>
                          <div className="overflow-text">
                            <h6><Link to="/course-detail">{course.title}</Link></h6>
                            <div className="rating-wrap">
                              <div className="rating_down">
                                <div className="rating_up" style={{ width: "100%" }}></div>
                              </div>
                            </div>
                            <p>{course.author}</p>
                            <span>{course.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* TAGS START */}
                    <div className="widget widget-tag">
                      <h5 className="widget-title"><span>tags</span></h5>
                      <div className="tag">
                        {tags.map((tag, idx) => (
                          <Link key={idx} className="tag-link" to="/courses">
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
    </>
  );
}
