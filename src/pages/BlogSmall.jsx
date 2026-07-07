import { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import blog1 from "../assets/extra-images/blog-small1.jpg";
import blog2 from "../assets/extra-images/blog-small2.jpg";
import blog3 from "../assets/extra-images/blog-small3.jpg";
import blog4 from "../assets/extra-images/blog-small4.jpg";
import blog5 from "../assets/extra-images/blog-small5.jpg";
import blog6 from "../assets/extra-images/blog-small6.jpg";
import blog7 from "../assets/extra-images/blog-small7.jpg";
import blog8 from "../assets/extra-images/blog-small8.jpg";
import blog9 from "../assets/extra-images/blog-small9.jpg";

export default function BlogSmall() {
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      id: 1,
      image: blog1,
      title: "A Brief History of Education",
      author: "Admin",
      date: "Feb 09, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor",
      columnClass: "col-md-4 col-sm-6"
    },
    {
      id: 2,
      image: blog2,
      title: "A Brief History of Education",
      author: "Admin",
      date: "Feb 09, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor",
      columnClass: "col-md-4 col-sm-6"
    },
    {
      id: 3,
      image: blog3,
      title: "A Brief History of Education",
      author: "Admin",
      date: "Feb 09, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor",
      columnClass: "col-md-4 col-sm-6"
    },
    {
      id: 4,
      image: blog4,
      title: "A Brief History of Education",
      author: "Admin",
      date: "Feb 09, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor",
      columnClass: "col-md-4 col-sm-6"
    },
    {
      id: 5,
      image: blog5,
      title: "A Brief History of Education",
      author: "Admin",
      date: "Feb 09, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor",
      columnClass: "col-md-4 col-sm-6"
    },
    {
      id: 6,
      image: blog6,
      title: "A Brief History of Education",
      author: "Admin",
      date: "Feb 09, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor",
      columnClass: "col-md-4 col-sm-6"
    },
    {
      id: 7,
      image: blog7,
      title: "A Brief History of Education",
      author: "Admin",
      date: "Feb 09, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor",
      columnClass: "col-md-4 col-sm-6"
    },
    {
      id: 8,
      image: blog8,
      title: "A Brief History of Education",
      author: "Admin",
      date: "Feb 09, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor",
      columnClass: "col-md-4 col-sm-6"
    },
    {
      id: 9,
      image: blog9,
      title: "A Brief History of Education",
      author: "Admin",
      date: "Feb 09, 2015",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor",
      columnClass: "col-md-4 hidden-sm"
    }
  ];

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner">
        <div className="container">
          <h5>Blog Small</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog-small">Blog Small</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* iqoniq Content Start */}
      <div className="iq_content_wrap">
        {/* blog3_in_page START */}
        <section>
          <div className="container">
            <div className="row">
              {blogPosts.map((post) => (
                <div key={post.id} className={post.columnClass}>
                  {/* BLOG Small START */}
                  <div className="blog-list blog-small border-div">
                    {/* BLOG Small FIGURE START */}
                    <figure>
                      <img src={post.image} alt="" />
                    </figure>
                    {/* BLOG Small FIGURE END */}
                    {/* BLOG Small CAPSTION START */}
                    <div className="blog-caption">
                      <h5 className="blog-title">
                        <Link to="/blog-detail">{post.title}</Link>
                      </h5>
                      <ul className="course_comments">
                        <li>
                          <Link to="#" onClick={(e) => e.preventDefault()}>
                            <i className="fa fa-user"></i>{post.author}
                          </Link>
                        </li>
                        <li>
                          <Link to="#" onClick={(e) => e.preventDefault()}>
                            <i className="fa fa-clock-o"></i>{post.date}
                          </Link>
                        </li>
                      </ul>
                      <p>{post.desc}</p>
                      <Link className="iq_link_1" to="/blog-detail">READ MORE</Link>
                    </div>
                    {/* BLOG Small CAPSTION END */}
                  </div>
                  {/* BLOG Small END */}
                </div>
              ))}

              <div className="col-md-12 col-sm-12">
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
        {/* blog3_in_page end */}
      </div>
      {/* iqoniq Content End */}

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