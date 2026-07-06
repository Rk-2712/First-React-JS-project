import React, { useState } from "react";
import { Link } from "react-router-dom";
import eventImg1 from "../assets/extra-images/upcomming-event-01.jpg";
import eventImg2 from "../assets/extra-images/upcomming-event-02.jpg";
import eventImg3 from "../assets/extra-images/upcomming-event-03.jpg";
import eventImg4 from "../assets/extra-images/upcomming-event-04.jpg";
import eventImg5 from "../assets/extra-images/upcomming-event-05.jpg";
import eventImg6 from "../assets/extra-images/upcomming-event-06.jpg";
import eventImg7 from "../assets/extra-images/upcomming-event-07.jpg";
import eventImg8 from "../assets/extra-images/upcomming-event-08.jpg";

export default function Events() {
  const [selectedMonth, setSelectedMonth] = useState("all");

  const eventsData = [
    { id: 1, image: eventImg1, title: "Global Learning Event", month: "august", date: "21 Aug", time: "10:00 am", desc: "A gather for the beginning of the student orientation session, explaining options." },
    { id: 2, image: eventImg2, title: "Alumni Meetup Day", month: "august", date: "25 Aug", time: "11:00 am", desc: "Join our former graduates for an evening of networking and career counseling." },
    { id: 3, image: eventImg3, title: "Creative Art Showcase", month: "september", date: "02 Sep", time: "09:30 am", desc: "An exhibition featuring original artworks, sculptures, and models designed by staff." },
    { id: 4, image: eventImg4, title: "Tech Conference 2026", month: "september", date: "10 Sep", time: "01:00 pm", desc: "Discussions on artificial intelligence, tech development, and cyber-security challenges." },
    { id: 5, image: eventImg5, title: "Business Networking", month: "september", date: "15 Sep", time: "03:00 pm", desc: "Connect with local businesses and learn more about intern recruitment processes." },
    { id: 6, image: eventImg6, title: "Research Paper Review", month: "october", date: "18 Oct", time: "10:00 am", desc: "Graduate research reviews and debates concerning global environment topics." },
    { id: 7, image: eventImg7, title: "Science Lab Launch", month: "october", date: "24 Oct", time: "02:00 pm", desc: "Opening ceremony of our state of the art biology and neuroscience testing laboratories." },
    { id: 8, image: eventImg8, title: "Annual Sports Meet", month: "october", date: "30 Oct", time: "08:00 am", desc: "A full day of inter-department football, basketball, and athletic tournaments." }
  ];

  const filteredEvents = selectedMonth === "all"
    ? eventsData
    : eventsData.filter(event => event.month === selectedMonth);

  return (
    <>
      {/* Banner */}
      <div className="iner_banner">
        <div className="container">
          <h5>Our Events</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="iq_content_wrap">
        <section style={{ padding: "60px 0" }}>
          <div className="container">
            {/* Heading */}
            <div className="iq_heading_1 text-center" style={{ marginBottom: "40px" }}>
              <h4>Up Coming <span>Events</span></h4>
              <p>Explore the list of major academic, social, and professional events scheduled at our university.</p>
            </div>

            {/* Month filter tabs */}
            <div className="iq_gallery_menu" style={{ marginBottom: "35px" }}>
              <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0 }}>
                {["all", "august", "september", "october"].map((month) => (
                  <li key={month} style={{ margin: "0 10px" }}>
                    <a
                      className={selectedMonth === month ? "active" : ""}
                      href="#"
                      onClick={(e) => { e.preventDefault(); setSelectedMonth(month); }}
                      style={{ textTransform: "capitalize", fontWeight: "bold" }}
                    >
                      {month === "all" ? "All Months" : month}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Events grid */}
            <div className="row">
              {filteredEvents.map((ev) => (
                <div key={ev.id} className="col-md-3 col-sm-6" style={{ marginBottom: "30px" }}>
                  <div className="iq_upcomming_event" style={{ border: "1px solid #eee", background: "#fff", borderRadius: "4px", overflow: "hidden", minHeight: "380px" }}>
                    <figure style={{ margin: 0 }}>
                      <img src={ev.image} alt={ev.title} style={{ width: "100%" }} />
                    </figure>
                    <div className="iq_upcomming_des" style={{ padding: "20px" }}>
                      <span style={{ display: "inline-block", background: "#29b6f6", color: "#fff", padding: "3px 10px", borderRadius: "3px", fontSize: "12px", fontWeight: "bold", marginBottom: "10px" }}>
                        {ev.date}
                      </span>
                      <p style={{ margin: "0 0 10px 0", fontSize: "13px", color: "#888" }}>
                        <i className="fa fa-clock-o" style={{ marginRight: "5px" }}></i>{ev.time}
                      </p>
                      <h5 style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
                        <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#333", fontWeight: "bold" }}>{ev.title}</a>
                      </h5>
                      <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.5" }}>{ev.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
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
