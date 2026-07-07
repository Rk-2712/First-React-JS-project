import { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import teacher1 from "../assets/extra-images/teacher-01.jpg";
import teacher2 from "../assets/extra-images/teacher-02.jpg";
import teacher3 from "../assets/extra-images/teacher-03.jpg";
import teacher4 from "../assets/extra-images/teacher-04.jpg";
import teacher5 from "../assets/extra-images/teacher-05.jpg";
import teacher6 from "../assets/extra-images/teacher-06.jpg";

export default function Staff() {
  const initialStaff = [
    { id: 1, name: "Anna Doe", role: "Language Instructor", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris.", image: teacher1, layout: "image-first" },
    { id: 2, name: "John Doe", role: "Vice President", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris.", image: teacher2, layout: "text-first" },
    { id: 3, name: "Sara Adward", role: "Manager", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris.", image: teacher3, layout: "image-first" },
    { id: 4, name: "Anna Doe", role: "Language Instructor", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris.", image: teacher4, layout: "image-first" },
    { id: 5, name: "John Doe", role: "Vice President", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris.", image: teacher5, layout: "text-first" },
    { id: 6, name: "Sara Adward", role: "Manager", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris.", image: teacher6, layout: "image-first" }
  ];

  const additionalStaff = [
    { id: 7, name: "Emma Watson", role: "Science Professor", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris.", image: teacher3, layout: "image-first" },
    { id: 8, name: "Robert Downey", role: "Dean of Business", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris.", image: teacher5, layout: "text-first" },
    { id: 9, name: "Chris Evans", role: "Athletic Director", desc: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudinris.", image: teacher6, layout: "image-first" }
  ];

  const [staff, setStaff] = useState(initialStaff);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = (e) => {
    e.preventDefault();
    setStaff([...staff, ...additionalStaff]);
    setHasMore(false);
  };

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner">
        <div className="container">
          <h5>Our teachers</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/staff">Our teachers</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* iqoniq Content Start */}
      <div className="iq_content_wrap">
        <section className="our-teachers-page">
          <div className="container">
            {/* Teacher Wrap List Start */}
            <div className="row">
              {staff.map((member) => (
                <div key={member.id} className="col-md-4 col-sm-6">
                  <div className="iq_teacher_style_1">
                    {member.layout === "image-first" ? (
                      <>
                        <figure>
                          <img src={member.image} alt={member.name} />
                        </figure>
                        <div className="text">
                          <h4>
                            <Link to="/staff">{member.name}</Link>
                          </h4>
                          <h6>{member.role}</h6>
                          <p>{member.desc}</p>
                          <ul className="iq_footer_social">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><span className="sr-only">Facebook</span></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i><span className="sr-only">Twitter</span></a></li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-skype"></i><span className="sr-only">Skype</span></Link></li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest</span></Link></li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text">
                          <h4>
                            <Link to="/staff">{member.name}</Link>
                          </h4>
                          <h6>{member.role}</h6>
                          <p>{member.desc}</p>
                          <ul className="iq_footer_social">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i><span className="sr-only">Facebook</span></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i><span className="sr-only">Twitter</span></a></li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-skype"></i><span className="sr-only">Skype</span></Link></li>
                            <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-pinterest"></i><span className="sr-only">Pinterest</span></Link></li>
                          </ul>
                        </div>
                        <figure>
                          <img src={member.image} alt={member.name} />
                        </figure>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Teacher Wrap List End */}

            {hasMore && (
              <div className="load-more">
                <Link className="iq_link_1" to="#" onClick={handleLoadMore}>
                  LOAD MORE
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
      {/* iqoniq Content End */}

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
      {/* Contact Info Wrap End */}
    </>
  );
}
