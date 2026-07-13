import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEnvelope, FaUser, FaRegCommentAlt, FaSearch, FaRegCalendarAlt } from "react-icons/fa";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteSuccess, setDeleteSuccess] = useState("");

  // Fetch contact submissions on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/api/contacts");
      const data = await response.json();
      if (response.ok && data.success) {
        setContacts(data.data);
      } else {
        setError(data.message || "Failed to retrieve messages.");
      }
    } catch (err) {
      setError("Unable to connect to the backend server. Please verify it is running on port 5000.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete the message from "${name}"?`)) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/contacts/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setContacts(contacts.filter((contact) => contact._id !== id));
        setDeleteSuccess("Message deleted successfully!");
        setTimeout(() => setDeleteSuccess(""), 4000);
      } else {
        alert(data.message || "Failed to delete the message.");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred while deleting the message.");
    }
  };

  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) => {
    const query = searchQuery.toLowerCase();
    return (
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      (contact.subject && contact.subject.toLowerCase().includes(query)) ||
      contact.message.toLowerCase().includes(query)
    );
  });

  // Get letter avatar color based on name first letter
  const getAvatarColor = (name) => {
    const char = name.trim().charAt(0).toUpperCase();
    const colors = [
      "#800020", // Burgundy / Maroon (Theme)
      "#1a365d", // Navy Blue (Theme)
      "#2b6cb0", // Blue
      "#319795", // Teal
      "#38a169", // Green
      "#d69e2e", // Gold
      "#4a5568", // Gray
      "#805ad5", // Purple
    ];
    const code = char.charCodeAt(0) || 0;
    return colors[code % colors.length];
  };

  return (
    <>
      {/* Banner/Title section */}
      <div className="iner_banner">
        <div className="container">
          <h5>Contact List</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact-list">Contact Submissions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="iq_content_wrap" style={{ backgroundColor: "#fbfbfb", padding: "60px 0" }}>
        <div className="container">
          <div className="row" style={{ marginBottom: "30px", alignItems: "center" }}>
            <div className="col-md-6 col-sm-12">
              <div className="iq_heading_1 text-left" style={{ marginBottom: "15px" }}>
                <h4>Contact <span>Submissions</span></h4>
              </div>
              <p style={{ color: "#666" }}>
                Browse, search, and manage all contact requests stored in the MongoDB database.
              </p>
            </div>
            
            {/* Search Input Box */}
            <div className="col-md-6 col-sm-12" style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "350px", marginTop: "10px" }}>
                <input
                  type="text"
                  placeholder="Search submissions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 15px",
                    borderRadius: "25px",
                    border: "1px solid #ddd",
                    outline: "none",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                    transition: "border-color 0.3s ease",
                  }}
                />
                <FaSearch style={{ position: "absolute", right: "15px", top: "15px", color: "#888" }} />
              </div>
            </div>
          </div>

          {/* Success Alerts */}
          {deleteSuccess && (
            <div className="alert alert-success" style={{ backgroundColor: "#d4edda", borderColor: "#c3e6cb", color: "#155724", padding: "15px", borderRadius: "4px", marginBottom: "25px" }}>
              {deleteSuccess}
            </div>
          )}

          {/* Error and Loading States */}
          {loading ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div className="spinner-border" role="status" style={{ width: "3rem", height: "3rem", color: "#800020", display: "inline-block", border: ".25em solid currentColor", borderRightColor: "transparent", borderRadius: "50%", animation: "spinner-border .75s linear infinite" }}>
                <span className="sr-only">Loading...</span>
              </div>
              <p style={{ marginTop: "15px", color: "#666", fontWeight: "500" }}>Fetching messages from database...</p>
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes spinner-border {
                  to { transform: rotate(360deg); }
                }
              `}} />
            </div>
          ) : error ? (
            <div className="alert alert-danger" style={{ backgroundColor: "#f8d7da", borderColor: "#f5c6cb", color: "#721c24", padding: "25px", borderRadius: "8px", borderLeft: "5px solid #dc3545" }}>
              <h5 style={{ marginTop: 0, fontWeight: "bold" }}>Database Connection Offline</h5>
              <p style={{ margin: "10px 0 15px 0" }}>{error}</p>
              <button onClick={fetchContacts} className="iq_link_1" style={{ border: "none", cursor: "pointer", padding: "10px 20px", display: "inline-flex", alignItems: "center", fontSize: "14px", height: "38px" }}>
                Retry Connection
              </button>
            </div>
          ) : filteredContacts.length === 0 ? (
            <div style={{ textAlign: "center", backgroundColor: "#fff", padding: "60px 20px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", border: "1px solid #eee" }}>
              <FaEnvelope style={{ fontSize: "50px", color: "#bbb", marginBottom: "20px" }} />
              <h3>No Submissions Found</h3>
              <p style={{ color: "#666", maxWidth: "450px", margin: "10px auto 0 auto" }}>
                {searchQuery ? "No messages match your search criteria. Try a different query." : "There are currently no messages saved in the contact list database."}
              </p>
            </div>
          ) : (
            /* Submissions Grid */
            <div className="row" style={{ display: "flex", flexWrap: "wrap", rowGap: "30px" }}>
              {filteredContacts.map((contact) => (
                <div key={contact._id} className="col-md-6 col-sm-12" style={{ display: "flex" }}>
                  <div style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                    border: "1px solid #eee",
                    padding: "25px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
                  }}
                  >
                    {/* Card Top Action Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
                      
                      {/* Left: User Info Block */}
                      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                        <div style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          backgroundColor: getAvatarColor(contact.name),
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          fontSize: "18px",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        }}>
                          {contact.name.trim().charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h5 style={{ margin: "0 0 2px 0", fontWeight: "600", fontSize: "16px", color: "#333", display: "flex", alignItems: "center", gap: "5px" }}>
                            <FaUser style={{ fontSize: "12px", color: "#888" }} /> {contact.name}
                          </h5>
                          <span style={{ fontSize: "13px", color: "#666", display: "flex", alignItems: "center", gap: "5px" }}>
                            <FaEnvelope style={{ fontSize: "12px", color: "#888" }} /> {contact.email}
                          </span>
                        </div>
                      </div>

                      {/* Right: Delete Action */}
                      <button
                        onClick={() => handleDelete(contact._id, contact.name)}
                        title="Delete Message"
                        style={{
                          background: "#fff5f5",
                          border: "1px solid #fed7d7",
                          borderRadius: "50%",
                          width: "32px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          color: "#e53e3e",
                          transition: "all 0.2s ease",
                          outline: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#e53e3e";
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.borderColor = "#e53e3e";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#fff5f5";
                          e.currentTarget.style.color = "#e53e3e";
                          e.currentTarget.style.borderColor = "#fed7d7";
                        }}
                      >
                        <FaTrash style={{ fontSize: "12px" }} />
                      </button>
                    </div>

                    <hr style={{ border: 0, borderTop: "1px solid #f0f0f0", margin: "0 0 15px 0" }} />

                    {/* Card Body: Subject & Message */}
                    <div style={{ flexGrow: 1, marginBottom: "15px" }}>
                      <div style={{ display: "flex", gap: "8px", alignItems: "baseline", marginBottom: "8px" }}>
                        <FaRegCommentAlt style={{ color: "#800020", fontSize: "12px", flexShrink: 0 }} />
                        <h6 style={{ margin: 0, fontWeight: "700", fontSize: "14px", color: "#444" }}>
                          Subject: {contact.subject || "(No Subject)"}
                        </h6>
                      </div>
                      
                      <div style={{
                        backgroundColor: "#fcfcfc",
                        borderLeft: "3px solid #800020",
                        padding: "10px 15px",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        color: "#555",
                        borderRadius: "0 4px 4px 0",
                        whiteSpace: "pre-line",
                        maxHeight: "120px",
                        overflowY: "auto",
                      }}>
                        {contact.message}
                      </div>
                    </div>

                    {/* Card Footer: Timestamp */}
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", fontSize: "11px", color: "#999", gap: "5px" }}>
                      <FaRegCalendarAlt />
                      <span>{new Date(contact.createdAt).toLocaleString()}</span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
