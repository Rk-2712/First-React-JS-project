import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Image Imports
import gallery1 from "../assets/extra-images/gallery-01.jpg";
import gallery2 from "../assets/extra-images/gallery-02.jpg";
import gallery3 from "../assets/extra-images/gallery-03.jpg";
import gallery4 from "../assets/extra-images/gallery-04.jpg";
import gallery5 from "../assets/extra-images/gallery-05.jpg";
import gallery6 from "../assets/extra-images/gallery-06.jpg";

export default function GalleryMedium() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    { id: 1, image: gallery1, title: "Lorem Ipsum" },
    { id: 2, image: gallery2, title: "Lorem Ipsum" },
    { id: 3, image: gallery3, title: "Lorem Ipsum" },
    { id: 4, image: gallery4, title: "Lorem Ipsum" },
    { id: 5, image: gallery5, title: "Lorem Ipsum" },
    { id: 6, image: gallery6, title: "Lorem Ipsum" },
    { id: 7, image: gallery3, title: "Lorem Ipsum" },
    { id: 8, image: gallery1, title: "Lorem Ipsum" },
    { id: 9, image: gallery4, title: "Lorem Ipsum" }
  ];

  const displayedItems = galleryItems.slice(0, visibleCount);

  const handleLoadMore = (e) => {
    e.preventDefault();
    setVisibleCount((prev) => prev + 3);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + displayedItems.length) % displayedItems.length);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % displayedItems.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, displayedItems.length]);

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner ent_detail">
        <div className="container">
          <h5>Gallery Medium</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery-medium">Gallery Medium</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* Iqoniq Content Start */}
      <div className="iq_content_wrap">
        {/* Our Gallery Wrap Start */}
        <section className="iq_gallery_bg">
          <div className="container">
            <div className="main-gallery row">
              {displayedItems.map((item, index) => (
                <div key={item.id} className="col-md-4 col-sm-6">
                  <div className="thumb" style={{ marginBottom: "30px" }}>
                    <figure>
                      <img src={item.image} alt={item.title} />
                      <figcaption className="overlay1">
                        <div className="link-wrapper">
                          <Link
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setLightboxIndex(index);
                            }}
                          >
                            <i className="fa fa-search"></i>
                          </Link>
                          <Link to="/gallery-medium">
                            <i className="fa fa-link"></i>
                          </Link>
                          <h6>{item.title}</h6>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < galleryItems.length && (
              <div className="load-more">
                <Link className="iq_link_1" to="#" onClick={handleLoadMore}>
                  LOAD MORE
                </Link>
              </div>
            )}
          </div>
        </section>
        {/* Our Gallery Wrap End */}
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
              setLightboxIndex((prev) => (prev - 1 + displayedItems.length) % displayedItems.length);
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
              src={displayedItems[lightboxIndex].image}
              alt={displayedItems[lightboxIndex].title}
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
              {displayedItems[lightboxIndex].title}
            </div>
            <div style={{ color: "#aaa", fontSize: "14px", marginTop: "5px" }}>
              Image {lightboxIndex + 1} of {displayedItems.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % displayedItems.length);
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
