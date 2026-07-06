import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gallery1 from "../assets/extra-images/gallery-01.jpg";
import gallery2 from "../assets/extra-images/gallery-02.jpg";
import gallery3 from "../assets/extra-images/gallery-03.jpg";
import gallery4 from "../assets/extra-images/gallery-04.jpg";
import gallery5 from "../assets/extra-images/gallery-05.jpg";
import gallery6 from "../assets/extra-images/gallery-06.jpg";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFilterChange = (newFilter) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setFilter(newFilter);
      setIsTransitioning(false);
    }, 250);
  };

  const galleryItems = [
    { id: 1, image: gallery1, title: "Modern Science Lab", category: "campus" },
    { id: 2, image: gallery2, title: "Central Library", category: "campus" },
    { id: 3, image: gallery3, title: "Graduation Day 2026", category: "events" },
    { id: 4, image: gallery4, title: "Computer Engineering Class", category: "classes" },
    { id: 5, image: gallery5, title: "Annual Football Tournament", category: "sports" },
    { id: 6, image: gallery6, title: "Art Design Exhibition", category: "events" }
  ];

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  // Keydown handlers for Lightbox navigation and escape key
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <>
      {/* Banner */}
      <div className="iner_banner">
        <div className="container">
          <h5>Our Gallery</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="iq_content_wrap">
        <section className="iq_gallery_bg" style={{ padding: "60px 0" }}>
          <div className="container">
            {/* Heading */}
            <div className="iq_heading_1 text-center" style={{ marginBottom: "40px" }}>
              <h4>Photo <span>Gallery</span></h4>
              <p>Take a virtual tour of our beautiful campus, student activities, modern classrooms, and athletic fields.</p>
            </div>

            {/* Gallery Category Filter */}
            <div className="iq_gallery_menu" style={{ marginBottom: "35px" }}>
              <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0 }}>
                {["all", "campus", "classes", "events", "sports"].map((cat) => (
                  <li key={cat} style={{ margin: "0 10px" }}>
                    <a
                      className={filter === cat ? "active" : ""}
                      href="#"
                      onClick={(e) => { e.preventDefault(); handleFilterChange(cat); setLightboxIndex(null); }}
                      style={{ textTransform: "capitalize", fontWeight: "bold" }}
                    >
                      {cat === "all" ? "All" : cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Grid */}
            <div className={`row main-gallery gallery-transition-container ${isTransitioning ? 'fade-leave' : 'fade-enter'}`}>
              {filteredItems.map((item, index) => (
                <div key={item.id} className="col-md-4 col-sm-6 filterable-item" style={{ marginBottom: "30px" }}>
                  <div className="thumb" style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid #eee", background: "#fff" }}>
                    <figure style={{ margin: 0, position: "relative" }}>
                      <img src={item.image} alt={item.title} style={{ width: "100%", display: "block" }} />
                      <figcaption className="overlay1" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0, 0, 0, 0.6)", opacity: 0, transition: "opacity 0.3s ease" }}>
                        <div className="link-wrapper" style={{ textAlign: "center", color: "#fff" }}>
                          <a href="#" onClick={(e) => { e.preventDefault(); setLightboxIndex(index); }} style={{ margin: "0 10px", color: "#fff", fontSize: "18px" }}><i className="fa fa-search"></i></a>
                          <a href="#" onClick={(e) => e.preventDefault()} style={{ margin: "0 10px", color: "#fff", fontSize: "18px" }}><i className="fa fa-link"></i></a>
                          <h6 style={{ color: "#fff", marginTop: "10px", fontSize: "16px" }}>{item.title}</h6>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="load-more text-center" style={{ marginTop: "30px" }}>
              <a className="iq_link_1" href="#" onClick={(e) => { e.preventDefault(); alert("Loading more photos..."); }}>LOAD MORE</a>
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
              setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
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
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
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
              {filteredItems[lightboxIndex].title}
            </div>
            <div style={{ color: "#aaa", fontSize: "14px", marginTop: "5px" }}>
              Image {lightboxIndex + 1} of {filteredItems.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
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
