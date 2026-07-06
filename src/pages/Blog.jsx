import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/extra-images/blog1.jpg";
import blog2 from "../assets/extra-images/blog2.jpg";
import blog3 from "../assets/extra-images/blog3.jpg";
import popularThumb1 from "../assets/extra-images/popular-thumb1.jpg";
import popularThumb2 from "../assets/extra-images/popular-thumb2.jpg";
import popularThumb3 from "../assets/extra-images/popular-thumb3.jpg";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      title: "Students Seek Lack of Communication",
      author: "Admin",
      date: "Feb 09, 2016",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
    },
    {
      id: 2,
      image: blog2,
      title: "Modern Classrooms and Student Learning",
      author: "Admin",
      date: "Jan 24, 2016",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
    },
    {
      id: 3,
      image: blog3,
      title: "Developing Strong Global Relationships",
      author: "Editor",
      date: "Dec 18, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
    }
  ];

  return (
    <>
      {/* Banner */}
      <div className="iner_banner">
        <div className="container">
          <h5>Our Blog</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="iq_content_wrap">
        <section style={{ padding: "60px 0" }}>
          <div className="container">
            <div className="row">
              {/* Blog Posts list */}
              <div className="col-md-8">
                {blogPosts.map((post) => (
                  <div key={post.id} style={{ marginBottom: "50px" }}>
                    <div className="blog-list" style={{ border: "1px solid #eee", background: "#fff", borderRadius: "4px", overflow: "hidden" }}>
                      <figure style={{ margin: 0 }}>
                        <img src={post.image} alt={post.title} style={{ width: "100%" }} />
                      </figure>
                      <div className="blog-caption" style={{ padding: "30px" }}>
                        <span className="iq_course_icon">
                          <i className="fa fa-pencil" style={{ color: "#fff", fontSize: "20px" }}></i>
                        </span>
                        <h5 className="blog-title" style={{ margin: "15px 0 10px 0", fontSize: "22px" }}>
                          <a href="#" onClick={(e) => e.preventDefault()}>{post.title}</a>
                        </h5>
                        
                        <ul className="course_comments" style={{ display: "flex", gap: "20px", listStyle: "none", padding: 0, margin: "0 0 20px 0", fontSize: "13px", color: "#888" }}>
                          <li><i className="fa fa-user" style={{ marginRight: "5px" }}></i>{post.author}</li>
                          <li><i className="fa fa-clock-o" style={{ marginRight: "5px" }}></i>{post.date}</li>
                        </ul>

                        <p style={{ color: "#666", lineHeight: "1.6" }}>{post.desc}</p>
                        <a className="iq_link_1" href="#" onClick={(e) => e.preventDefault()} style={{ marginTop: "15px" }}>READ MORE</a>
                      </div>
                    </div>
                    <div className="border-div" style={{ height: "1px", background: "#eee", margin: "40px 0" }}></div>
                  </div>
                ))}

                {/* Pagination */}
                <div className="iqoniq-pagination text-center" style={{ display: "flex", justifyContent: "center", gap: "5px", marginTop: "20px" }}>
                  <span className="page-numbers current">1</span>
                  <a className="page-numbers" href="#" onClick={(e) => e.preventDefault()}>2</a>
                  <a className="page-numbers" href="#" onClick={(e) => e.preventDefault()}>3</a>
                  <span className="page-numbers border_none">...</span>
                  <a className="page-numbers" href="#" onClick={(e) => e.preventDefault()}>10</a>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-md-4">
                <div className="aside-bar">
                  
                  {/* Search widget */}
                  <div className="widget widget-search" style={{ marginBottom: "35px" }}>
                    <form className="iq-input" onSubmit={(e) => e.preventDefault()}>
                      <input placeholder="Search ..." type="text" style={{ paddingRight: "40px" }} />
                      <label className="iq-input-icon"><input type="submit" style={{ opacity: 0, position: "absolute", width: "100%", height: "100%" }} /></label>
                    </form>
                  </div>

                  {/* Course Archive widget */}
                  <div className="widget widget_archive" style={{ marginBottom: "35px", padding: "30px", border: "1px solid #eee", background: "#fff", borderRadius: "4px" }}>
                    <h5 className="widget-title" style={{ borderBottom: "2px solid #29b6f6", paddingBottom: "10px", marginBottom: "20px" }}>
                      <span>our</span> Course Categories
                    </h5>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {[
                        { name: "Politics & History", count: "03" },
                        { name: "Journalism", count: "01" },
                        { name: "Medical Sciences", count: "03" },
                        { name: "Health & Fitness", count: "01" },
                        { name: "Sports Coaching", count: "03" },
                        { name: "Arts & Design", count: "02" }
                      ].map((cat, idx) => (
                        <li key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f5f5f5" }}>
                          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#666" }}>{cat.name}</a>
                          <span style={{ color: "#aaa" }}>({cat.count})</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular Courses widget */}
                  <div className="widget widget-popular" style={{ marginBottom: "35px", padding: "30px", border: "1px solid #eee", background: "#fff", borderRadius: "4px" }}>
                    <h5 className="widget-title" style={{ borderBottom: "2px solid #29b6f6", paddingBottom: "10px", marginBottom: "20px" }}>
                      <span>popular</span> courses
                    </h5>
                    {[
                      { img: popularThumb1, title: "Neque porro quisquam est qui", date: "19 Dec, 2015" },
                      { img: popularThumb2, title: "Quisquam est qui dolorem ipsum", date: "12 Dec, 2015" },
                      { img: popularThumb3, title: "Dolorem ipsum quia dolor sit", date: "05 Dec, 2015" }
                    ].map((course, idx) => (
                      <div key={idx} className="popular_thumb" style={{ display: "flex", gap: "15px", marginBottom: "20px", alignItems: "center" }}>
                        <figure style={{ margin: 0, width: "65px", flexShrink: 0 }}>
                          <img src={course.img} alt={course.title} style={{ width: "100%", borderRadius: "4px" }} />
                        </figure>
                        <div>
                          <h6 style={{ margin: "0 0 5px 0", fontSize: "14px", lineHeight: "1.4" }}>
                            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#333" }}>{course.title}</a>
                          </h6>
                          <p style={{ margin: 0, fontSize: "11px", color: "#888" }}>{course.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Working Hours widget */}
                  <div className="widget widget_time" style={{ padding: "30px", border: "1px solid #eee", background: "#fff", borderRadius: "4px" }}>
                    <h5 className="widget-title" style={{ borderBottom: "2px solid #29b6f6", paddingBottom: "10px", marginBottom: "20px" }}>
                      <span>working</span> hours
                    </h5>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {[
                        { day: "Monday", hours: "08:30 am - 05:30 pm" },
                        { day: "Tuesday", hours: "08:30 am - 05:30 pm" },
                        { day: "Wednesday", hours: "08:30 am - 05:30 pm" },
                        { day: "Thursday", hours: "08:30 am - 05:30 pm" },
                        { day: "Friday", hours: "08:30 am - 05:30 pm" },
                        { day: "Saturday", hours: "Closed" },
                        { day: "Sunday", hours: "Closed" }
                      ].map((item, idx) => (
                        <li key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f5f5f5", fontSize: "14px" }}>
                          <span style={{ fontWeight: "bold" }}>{item.day}</span>
                          <span style={{ color: "#666" }}>{item.hours}</span>
                        </li>
                      ))}
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
