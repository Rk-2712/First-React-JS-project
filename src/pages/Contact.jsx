import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <>
      {/* Banner/Title section */}
      <div className="iner_banner">
        <div className="container">
          <h5>Contact Us</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="iq_content_wrap">
        <section style={{ padding: "60px 0" }}>
          <div className="container">
            <div className="row">
              {/* Contact details */}
              <div className="col-md-4">
                <div className="iq_heading_1 text-left" style={{ marginBottom: "30px" }}>
                  <h4>Get in <span>Touch</span></h4>
                </div>
                <p>We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.</p>

                <div style={{ marginTop: "40px" }}>
                  <div style={{ display: "flex", gap: "15px", marginBottom: "25px", alignItems: "flex-start" }}>
                    <i className="fa fa-map-marker" style={{ fontSize: "24px", color: "#29b6f6", width: "30px" }}></i>
                    <div>
                      <h5 style={{ margin: "0 0 5px 0" }}>Our Campus</h5>
                      <p style={{ margin: 0, color: "#666" }}>Abc Street , new town Sydney, Australia</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "15px", marginBottom: "25px", alignItems: "flex-start" }}>
                    <i className="fa fa-phone" style={{ fontSize: "24px", color: "#29b6f6", width: "30px" }}></i>
                    <div>
                      <h5 style={{ margin: "0 0 5px 0" }}>Phone Numbers</h5>
                      <p style={{ margin: 0, color: "#666" }}>+ (0) 123 456 7891<br />+ (0) 123 456 7892</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "15px", marginBottom: "25px", alignItems: "flex-start" }}>
                    <i className="fa fa-envelope" style={{ fontSize: "24px", color: "#29b6f6", width: "30px" }}></i>
                    <div>
                      <h5 style={{ margin: "0 0 5px 0" }}>Email Addresses</h5>
                      <p style={{ margin: 0, color: "#666" }}>info@university.com<br />support@university.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-md-8">
                <div className="iq_heading_1 text-left" style={{ marginBottom: "30px" }}>
                  <h4>Send a <span>Message</span></h4>
                </div>

                {submitted && (
                  <div className="alert alert-success" role="alert" style={{ marginBottom: "25px", backgroundColor: "#d4edda", borderColor: "#c3e6cb", color: "#155724", padding: "15px", borderRadius: "4px" }}>
                    Thank you! Your message has been sent successfully. We will get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ backgroundColor: "#f9f9f9", padding: "35px", borderRadius: "4px" }}>
                  <div className="row">
                    <div className="col-md-6" style={{ marginBottom: "20px" }}>
                      <div className="iq-input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name *"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          style={{ height: "45px", borderRadius: "4px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6" style={{ marginBottom: "20px" }}>
                      <div className="iq-input">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          style={{ height: "45px", borderRadius: "4px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12" style={{ marginBottom: "20px" }}>
                      <div className="iq-input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          style={{ height: "45px", borderRadius: "4px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12" style={{ marginBottom: "20px" }}>
                      <div className="iq-input">
                        <textarea
                          className="form-control"
                          rows="6"
                          placeholder="Your Message *"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          style={{ borderRadius: "4px", padding: "10px 15px", resize: "none" }}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="submit"
                        className="iq_link_1"
                        value="Submit Form"
                        style={{ border: "none", cursor: "pointer", height: "45px", display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "150px" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section style={{ height: "450px", width: "100%", borderTop: "1px solid #eee" }}>
          <iframe
            title="University Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.285406089304!2d151.2069537!3d-33.8688197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ad40!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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