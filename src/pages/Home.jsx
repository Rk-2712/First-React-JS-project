import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import banner1 from "../assets/extra-images/banner-01.jpg";
import banner2 from "../assets/extra-images/banner-02.jpg";
import banner3 from "../assets/extra-images/banner-03.jpg";

import course1 from "../assets/extra-images/featured-course-1.jpg";
import course2 from "../assets/extra-images/featured-course-02.jpg";
import course3 from "../assets/extra-images/featured-course-03.jpg";
import coursePopular1 from "../assets/extra-images/featured-course-01.jpg";

import gallery1 from "../assets/extra-images/gallery-01.jpg";
import gallery2 from "../assets/extra-images/gallery-02.jpg";
import gallery3 from "../assets/extra-images/gallery-03.jpg";
import gallery4 from "../assets/extra-images/gallery-04.jpg";
import gallery5 from "../assets/extra-images/gallery-05.jpg";
import gallery6 from "../assets/extra-images/gallery-06.jpg";

import event1 from "../assets/extra-images/upcomming-event-01.jpg";
import event2 from "../assets/extra-images/upcomming-event-02.jpg";
import event3 from "../assets/extra-images/upcomming-event-03.jpg";
import event4 from "../assets/extra-images/upcomming-event-04.jpg";
import event5 from "../assets/extra-images/upcomming-event-05.jpg";
import event6 from "../assets/extra-images/upcomming-event-06.jpg";
import event7 from "../assets/extra-images/upcomming-event-07.jpg";
import event8 from "../assets/extra-images/upcomming-event-08.jpg";

import teacher1 from "../assets/extra-images/teacher-01.jpg";
import teacher2 from "../assets/extra-images/teacher-02.jpg";
import teacher3 from "../assets/extra-images/teacher-03.jpg";

import blog1 from "../assets/extra-images/center-img.jpg";
import blog2 from "../assets/extra-images/center-img2.jpg";
import blog3 from "../assets/extra-images/center-img3.jpg";

import test1 from "../assets/extra-images/testimonial-nav1.jpg";
import test2 from "../assets/extra-images/testimonial-nav2.jpg";
import test3 from "../assets/extra-images/testimonial-nav3.jpg";

import brand1 from "../assets/extra-images/brand1.png";
import brand2 from "../assets/extra-images/brand2.png";
import brand3 from "../assets/extra-images/brand3.png";
import brand4 from "../assets/extra-images/brand4.png";
import brand5 from "../assets/extra-images/brand5.png";
import brand6 from "../assets/extra-images/brand6.png";

function AnimatedCounter({ targetValue, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  const cleanNumber = parseInt(targetValue.toString().replace(/,/g, ""), 10) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * cleanNumber));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [cleanNumber, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

function ScrollReveal({ children, className = "" }) {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal-on-scroll ${isRevealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [courseTab, setCourseTab] = useState("featured");
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [discipline, setDiscipline] = useState("0");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isGalleryTransitioning, setIsGalleryTransitioning] = useState(false);

  const handleGalleryFilterChange = (newFilter) => {
    setIsGalleryTransitioning(true);
    setTimeout(() => {
      setGalleryFilter(newFilter);
      setIsGalleryTransitioning(false);
    }, 250);
  };

  const banners = [
    {
      id: 1,
      image: banner1,
      align: "text-left",
      title: "The Best Learning Institution",
      subtitle: "welcome to our university",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      id: 2,
      image: banner2,
      align: "text-center",
      title: "Excellent Educational Facilities",
      subtitle: "empowering student minds",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      id: 3,
      image: banner3,
      align: "text-right",
      title: "Shape Your Future Profession",
      subtitle: "join our global campus",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
  ];

  // Rotate banner every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const galleryItems = [
    { id: 1, image: gallery1, title: "Modern Science Lab", categories: ["1", "2", "3"] },
    { id: 2, image: gallery2, title: "Central Library", categories: ["1", "5"] },
    { id: 3, image: gallery3, title: "Graduation Day 2026", categories: ["1", "2", "5"] },
    { id: 4, image: gallery4, title: "Computer Engineering Class", categories: ["2", "4"] },
    { id: 5, image: gallery5, title: "Annual Football Tournament", categories: ["1", "2"] },
    { id: 6, image: gallery6, title: "Art Design Exhibition", categories: ["1", "3"] },
  ];

  const filteredGallery = galleryFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.categories.includes(galleryFilter));

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching courses for discipline: ${discipline}`);
  };

  // Keydown handlers for Lightbox navigation and escape key
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  return (
    <>
      {/* Banner Section */}
      <div className="iq_banner" style={{ position: "relative", overflow: "hidden" }}>
        <ul className="slider" style={{ listStyle: "none", padding: 0, margin: 0, position: "relative", width: "100%" }}>
          {banners.map((banner, index) => (
            <li
              key={banner.id}
              style={{
                position: index === 0 ? "relative" : "absolute",
                top: 0,
                left: 0,
                width: "100%",
                opacity: index === currentBanner ? 1 : 0,
                visibility: index === currentBanner ? "visible" : "hidden",
                transition: "opacity 0.8s ease-in-out, visibility 0.8s ease-in-out",
                zIndex: index === currentBanner ? 1 : 0
              }}
            >
              <Link to="#" onClick={(e) => e.preventDefault()}>
                <img src={banner.image} alt={banner.title} style={{ width: "100%", display: "block" }} />
                <div className={`iq-caption-wrapper ${banner.align}`}>
                  <div className="iq_banner_caption container">
                    <div className="iq-caption">
                      <div className="iq-caption-title">{banner.title}</div>
                      <div className="iq-caption-text">{banner.subtitle}</div>
                      <div className="iq-caption-contant">{banner.content}</div>
                      <div className="iq_link_1">Read More</div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Prev Arrow */}
        <button
          onClick={(e) => { e.preventDefault(); setCurrentBanner(prev => (prev - 1 + banners.length) % banners.length); }}
          style={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "#fff",
            border: "none",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 10,
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "#29b6f6"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.4)"}
        >
          <i className="fa fa-angle-left"></i>
        </button>

        {/* Next Arrow */}
        <button
          onClick={(e) => { e.preventDefault(); setCurrentBanner(prev => (prev + 1) % banners.length); }}
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "#fff",
            border: "none",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 10,
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "#29b6f6"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.4)"}
        >
          <i className="fa fa-angle-right"></i>
        </button>

        {/* Dots Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 10
          }}
        >
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                border: "none",
                background: idx === currentBanner ? "#29b6f6" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "background 0.3s",
                outline: "none"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="iq_content_wrap">
        
        {/* We Are Professional & Search Courses */}
        <ScrollReveal className="we_professional_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <section>
                  <div className="iq_heading_1 text-left">
                    <h4>We Are <span>Professional</span></h4>
                    <p>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                      <br />lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="iq_professional_services">
                        <span className="icon-lecture">
                          <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span><span className="path21"></span><span className="path22"></span><span className="path23"></span><span className="path24"></span><span className="path25"></span><span className="path26"></span><span className="path27"></span><span className="path28"></span><span className="path29"></span><span className="path30"></span><span className="path31"></span><span className="path32"></span><span className="path33"></span><span className="path34"></span><span className="path35"></span><span className="path36"></span><span className="path37"></span><span className="path38"></span>
                        </span>
                        <h5><Link to="#">Business</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum nec sagittis.</p>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                      <div className="iq_professional_services">
                        <span className="icon-doctor-2">
                          <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span><span className="path21"></span><span className="path22"></span><span className="path23"></span><span className="path24"></span><span className="path25"></span><span className="path26"></span><span className="path27"></span><span className="path28"></span><span className="path29"></span><span className="path30"></span><span className="path31"></span><span className="path32"></span><span className="path33"></span><span className="path34"></span><span className="path35"></span><span className="path36"></span><span className="path37"></span><span className="path38"></span>
                        </span>
                        <h5><Link to="#">Neuroscience</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum nec sagittis.</p>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                      <div className="iq_professional_services">
                        <span className="icon-medical-3">
                          <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span><span className="path21"></span><span className="path22"></span><span className="path23"></span><span className="path24"></span>
                        </span>
                        <h5><Link to="#">Zoology</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum nec sagittis.</p>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                      <div className="iq_professional_services">
                        <span className="icon-debate">
                          <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span>
                        </span>
                        <h5><Link to="#">Politics</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum nec sagittis.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Course Search Form */}
              <div className="col-md-4">
                <div className="iq_search_courses">
                  <h4>Search Courses</h4>
                  <form onSubmit={handleSearchSubmit}>
                    <div className="iq-input">
                      <input
                        type="text"
                        placeholder="Name"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                      />
                    </div>
                    <div className="iq-input">
                      <input
                        type="email"
                        placeholder="E-mail"
                        value={searchEmail}
                        onChange={(e) => setSearchEmail(e.target.value)}
                      />
                    </div>
                    <div className="iq-input">
                      <select
                        name="Discipline"
                        value={discipline}
                        onChange={(e) => setDiscipline(e.target.value)}
                      >
                        <option value="0">Discipline</option>
                        <option value="9">Science</option>
                        <option value="2">Humanities</option>
                        <option value="3">Business</option>
                      </select>
                    </div>
                    <div className="iq-input">
                      <select name="Course_Length">
                        <option value="0">Course Length</option>
                        <option value="9">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                      </select>
                    </div>
                    <div className="iq-input">
                      <select name="Study_Level">
                        <option value="0">Study Level</option>
                        <option value="9">Undergraduate</option>
                        <option value="2">Postgraduate</option>
                        <option value="3">Doctorate</option>
                      </select>
                    </div>
                    <div className="iq-input">
                      <input className="iq_link_1" type="submit" value="Search" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Best Knowledge Section */}
        <ScrollReveal>
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
      </ScrollReveal>

        {/* Featured Courses Section */}
        <ScrollReveal>
          <section>
            <div className="container">
            <div className="iq_heading_1 text-center">
              <h4>Our Featured <span>Courses</span></h4>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                <br />lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="iq_tab_menu">
              <ul id="tabs" style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0 }}>
                <li className={courseTab === "featured" ? "active" : ""} style={{ margin: "0 10px" }}>
                  <Link to="#" onClick={(e) => { e.preventDefault(); setCourseTab("featured"); }}>Featured</Link>
                </li>
                <li className={courseTab === "popular" ? "active" : ""} style={{ margin: "0 10px" }}>
                  <Link to="#" onClick={(e) => { e.preventDefault(); setCourseTab("popular"); }}>Popular</Link>
                </li>
              </ul>
            </div>

            {/* Tab Contents */}
            <div className="tab-content">
              {courseTab === "featured" ? (
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="iq_course_list">
                      <figure><img src={course1} alt="Course 1" /></figure>
                      <div className="iq_course_list_des">
                        <h5><Link to="/courses">Computer & IT Courses</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="iq_course_list">
                      <figure><img src={course2} alt="Course 2" /></figure>
                      <div className="iq_course_list_des">
                        <h5><Link to="/courses">Business & Finance</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="iq_course_list">
                      <figure><img src={course3} alt="Course 3" /></figure>
                      <div className="iq_course_list_des">
                        <h5><Link to="/courses">Social Courses</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="iq_course_list">
                      <figure><img src={coursePopular1} alt="Course Popular 1" /></figure>
                      <div className="iq_course_list_des">
                        <h5><Link to="/courses">Neuroscience Courses</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="iq_course_list">
                      <figure><img src={course2} alt="Course Popular 2" /></figure>
                      <div className="iq_course_list_des">
                        <h5><Link to="/courses">Politics Courses</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="iq_course_list">
                      <figure><img src={course3} alt="Course Popular 3" /></figure>
                      <div className="iq_course_list_des">
                        <h5><Link to="/courses">Zoology Courses</Link></h5>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Gallery Section */}
        <ScrollReveal>
          <section className="iq_gallery_bg">
          <div className="container">
            <div className="iq_heading_1 text-center">
              <h4>Our <span>Gallery</span></h4>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
            </div>

            {/* Gallery Category Filter */}
            <div className="iq_gallery_menu">
              <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0 }}>
                {["all", "1", "2", "3", "4", "5"].map((category) => (
                  <li key={category} style={{ margin: "0 10px" }}>
                    <Link
                      className={galleryFilter === category ? "active" : ""}
                      to="#"
                      onClick={(e) => { e.preventDefault(); handleGalleryFilterChange(category); }}
                    >
                      {category === "all" ? "All" : category === "1" ? "Accounting" : category === "2" ? "Economics" : category === "3" ? "Finance" : category === "4" ? "Technologies" : "Management"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Holder */}
            <div className={`row main-gallery gallery-transition-container ${isGalleryTransitioning ? 'fade-leave' : 'fade-enter'}`}>
              {filteredGallery.map((item, index) => (
                <div key={item.id} className="col-md-4 col-sm-6 filterable-item" style={{ marginBottom: "30px" }}>
                  <div className="thumb">
                    <figure>
                      <img src={item.image} alt="Gallery item" style={{ width: "100%" }} />
                      <figcaption className="overlay1">
                        <div className="link-wrapper">
                          <Link to="#" onClick={(e) => { e.preventDefault(); setLightboxIndex(index); }}><i className="fa fa-search"></i></Link>
                          <Link to="#" onClick={(e) => e.preventDefault()}><i className="fa fa-link"></i></Link>
                          <h6>{item.title}</h6>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Upcoming Events */}
        <ScrollReveal>
          <section className="iq_upcomming_bg">
          <div className="container">
            <div className="iq_heading_1 text-center">
              <h4>Up Coming <span>Events</span></h4>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
            </div>

            <div className="row">
              {[
                { id: 1, image: event1, title: "Day of Event One", date: "21 Aug", time: "10:00 am" },
                { id: 2, image: event2, title: "Alumni Meetup Day", date: "25 Aug", time: "11:00 am" },
                { id: 3, image: event3, title: "Creative Art Showcase", date: "02 Sep", time: "09:30 am" },
                { id: 4, image: event4, title: "Tech Conference 2026", date: "10 Sep", time: "01:00 pm" },
                { id: 5, image: event5, title: "Business Networking", date: "15 Sep", time: "03:00 pm" },
                { id: 6, image: event6, title: "Research Paper Review", date: "18 Sep", time: "10:00 am" },
                { id: 7, image: event7, title: "Science Lab Launch", date: "24 Sep", time: "02:00 pm" },
                { id: 8, image: event8, title: "Annual Sports Meet", date: "30 Sep", time: "08:00 am" }
              ].map((ev) => (
                <div key={ev.id} className="col-md-3 col-sm-6" style={{ marginBottom: "20px" }}>
                  <div className="iq_upcomming_event">
                    <figure><img src={ev.image} alt={ev.title} style={{ width: "100%" }} /></figure>
                    <div className="iq_upcomming_des">
                      <span>{ev.date}</span>
                      <p>{ev.time}</p>
                      <h5><Link to="/events">{ev.title}</Link></h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Counter Stats Section */}
        <ScrollReveal>
          <section className="iq_number_count_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <div className="iq_counter">
                  <i className="icon-lecture"></i>
                  <span className="counter"><AnimatedCounter targetValue="2,021" /></span>
                  <h6>Total Lectures</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="iq_counter">
                  <i className="icon-books"></i>
                  <span className="counter"><AnimatedCounter targetValue="1,411" /></span>
                  <h6>Total Courses</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="iq_counter">
                  <i className="icon-drawing"></i>
                  <span className="counter"><AnimatedCounter targetValue="1,591" /></span>
                  <h6>Total Tests</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="iq_counter">
                  <i className="icon-diploma-1"></i>
                  <span className="counter"><AnimatedCounter targetValue="9,921" /></span>
                  <h6>Total Classes</h6>
                </div>
              </div>
            </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Teachers Section */}
        <ScrollReveal>
          <section>
          <div className="container">
            <div className="iq_heading_1 text-center">
              <h4>Our <span>Teachers</span></h4>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
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
                      <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                      <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                      <li><Link to="#"><i className="fa fa-skype"></i></Link></li>
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
                      <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                      <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                      <li><Link to="#"><i className="fa fa-skype"></i></Link></li>
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
                      <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                      <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                      <li><Link to="#"><i className="fa fa-skype"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Blog Slider Section */}
        <ScrollReveal>
          <section className="center-slider-wrap">
          <div className="container">
            <div className="iq_heading_1 text-center">
              <h4>Latest From <span>Our Blog</span></h4>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
            </div>

            <div className="row">
              {[
                { id: 1, image: blog1, title: "Aperiam unde omnis iste natus error sit voluptatem" },
                { id: 2, image: blog2, title: "Unde omnis iste natus error sit voluptatem" },
                { id: 3, image: blog3, title: "Sed ut perspiciatis unde omnis iste natus error" }
              ].map((post) => (
                <div key={post.id} className="col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
                  <div className="center-dec" style={{ border: "1px solid #eee", padding: "15px" }}>
                    <figure><img src={post.image} alt={post.title} style={{ width: "100%" }} /></figure>
                    <div className="text" style={{ padding: 0, border: "none", marginTop: "15px" }}>
                      <h5><Link to="/blog">{post.title}</Link></h5>
                      <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit.</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", marginTop: "15px", clear: "both", width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <Link to="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #d6d6d6", color: "#a8a8a8", fontSize: "12px", transition: "all 0.3s" }}>
                              <i className="fa fa-pencil"></i>
                            </Link>
                            <span style={{ fontSize: "13px", color: "#777", fontWeight: 500 }}>Admin</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <Link to="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #d6d6d6", color: "#a8a8a8", fontSize: "12px", transition: "all 0.3s" }}>
                              <i className="fa fa-comments-o"></i>
                            </Link>
                            <span style={{ fontSize: "13px", color: "#777", fontWeight: 500 }}>5</span>
                          </div>
                        </div>
                        <Link to="/blog" className="iq_link_1" style={{ minWidth: "120px", padding: "8px 20px", fontSize: "14px", lineHeight: "normal" }}>Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal>
          <section style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
          <div className="container">
            <div className="iq_heading_1 text-center">
              <h4>former student <span>testimonial</span></h4>
              <p>Hear what our graduates have to say about their LMS experience.</p>
            </div>

            <div className="row">
              {[
                { id: 1, image: test1, name: "Jonathan James", comment: "Education WP Theme is a comprehensive LMS solution for WordPress Theme. This beautiful theme based on LearnPress will bring you the best eLearning features." },
                { id: 2, image: test2, name: "Sarah Connor", comment: "Education WP Theme is a comprehensive LMS solution for WordPress Theme. This beautiful theme based on LearnPress will bring you the best eLearning features." },
                { id: 3, image: test3, name: "David Miller", comment: "Education WP Theme is a comprehensive LMS solution for WordPress Theme. This beautiful theme based on LearnPress will bring you the best eLearning features." }
              ].map((test) => (
                <div key={test.id} className="col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
                  <div className="testimonial" style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "4px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                    <p style={{ fontStyle: "italic" }}>“ {test.comment} ”</p>
                    <div className="coures_instractor_thumb" style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                      <figure style={{ margin: "0 15px 0 0" }}><img src={test.image} alt={test.name} style={{ borderRadius: "50%", width: "50px", height: "50px" }} /></figure>
                      <div className="thumb_capstion">
                        <h5 style={{ margin: 0 }}>{test.name}</h5>
                        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Former Student</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Brands Logo Strip */}
        <div className="brnd-slider-wrap" style={{ padding: "40px 0", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
              {[brand1, brand2, brand3, brand4, brand5, brand6].map((brand, idx) => (
                <div key={idx} style={{ margin: "10px" }}>
                  <img src={brand} alt={`Brand logo ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Contact Block */}
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

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            userSelect: "none"
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: "absolute",
              top: "30px",
              right: "40px",
              color: "#fff",
              fontSize: "45px",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 100000,
              outline: "none"
            }}
          >
            &times;
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
            }}
            style={{
              position: "absolute",
              left: "40px",
              color: "#fff",
              fontSize: "55px",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 100000,
              outline: "none"
            }}
          >
            &#8249;
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "80%",
              maxHeight: "85%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              style={{
                maxWidth: "100%",
                maxHeight: "75vh",
                borderRadius: "8px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
                border: "4px solid #fff",
                objectFit: "contain"
              }}
            />
            <div
              style={{
                marginTop: "20px",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "1px 1px 4px rgba(0,0,0,0.6)"
              }}
            >
              {filteredGallery[lightboxIndex].title}
            </div>
            <div style={{ color: "#aaa", fontSize: "14px", marginTop: "5px" }}>
              Image {lightboxIndex + 1} of {filteredGallery.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
            }}
            style={{
              position: "absolute",
              right: "40px",
              color: "#fff",
              fontSize: "55px",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 100000,
              outline: "none"
            }}
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}