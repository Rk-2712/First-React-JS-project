import { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import blog1 from "../assets/extra-images/blog-2colum1.jpg";
import blog2 from "../assets/extra-images/blog-2colum2.jpg";
import blog3 from "../assets/extra-images/blog-2colum3.jpg";
import blog4 from "../assets/extra-images/blog-2colum4.jpg";
import blog5 from "../assets/extra-images/blog-2colum5.jpg";
import blog6 from "../assets/extra-images/blog-2colum6.jpg";

export default function BlogMedium() {
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      id: 1,
      image: blog1,
      iconClass: "fa fa-camera",
      title: "Nemo enim ipsam voluptatem quia",
      date: "Posted Aug 19, 2015",
      author: "Anna Doe",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit . Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."
    },
    {
      id: 2,
      image: blog2,
      iconClass: "fa fa-video-camera",
      title: "Nemo enim ipsam voluptatem quia",
      date: "Posted Aug 19, 2015",
      author: "Anna Doe",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit . Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."
    },
    {
      id: 3,
      image: blog3,
      iconClass: "fa fa-camera",
      title: "Nemo enim ipsam voluptatem quia",
      date: "Posted Aug 19, 2015",
      author: "Anna Doe",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit . Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."
    },
    {
      id: 4,
      image: blog4,
      iconClass: "fa fa-video-camera",
      title: "Nemo enim ipsam voluptatem quia",
      date: "Posted Aug 19, 2015",
      author: "Anna Doe",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit . Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."
    },
    {
      id: 5,
      image: blog5,
      iconClass: "fa fa-camera",
      title: "Nemo enim ipsam voluptatem quia",
      date: "Posted Aug 19, 2015",
      author: "Anna Doe",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit . Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."
    },
    {
      id: 6,
      image: blog6,
      iconClass: "fa fa-video-camera",
      title: "Nemo enim ipsam voluptatem quia",
      date: "Posted Aug 19, 2015",
      author: "Anna Doe",
      desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit . Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."
    }
  ];

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner">
        <div className="container">
          <h5>Blog Medium</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog-medium">Blog Medium</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* Iqoniq Content Start */}
      <div className="iq_content_wrap">
        <section>
          {/* BLOG Medium PAGE START */}
          <div className="container">
            <div className="row">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-md-6 col-sm-6">
                  {/* blog-medium START */}
                  <div className="blog-medium">
                    <figure>
                      <img src={post.image} alt="" />
                    </figure>
                    {/* blog-medium CAPSTION START */}
                    <div className="blog-medium-caption">
                      <Link to="/blog-detail"><i className={post.iconClass}></i></Link>
                      <h5><Link to="/blog-detail">{post.title}</Link></h5>
                      <ul>
                        <li>
                          <Link to="#" onClick={(e) => e.preventDefault()}>{post.date}</Link>
                        </li>
                        <li>
                          <Link to="#" onClick={(e) => e.preventDefault()}>by <span>{post.author}</span></Link>
                        </li>
                      </ul>
                      <p>{post.desc}</p>
                    </div>
                    {/* blog-medium CAPSTION END */}
                  </div>
                  {/* blog-medium END */}
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
          {/* BLOG Medium PAGE END */}
        </section>
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