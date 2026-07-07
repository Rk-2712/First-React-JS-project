import { useState } from "react";
import { Link } from "react-router-dom";

// Image Imports
import blogDetailImg from "../assets/extra-images/blog-detail.jpg";
import commentThumbImg from "../assets/extra-images/comment-thumb.jpg";
import popularThumb1 from "../assets/extra-images/popular-thumb1.jpg";
import popularThumb2 from "../assets/extra-images/popular-thumb2.jpg";
import popularThumb3 from "../assets/extra-images/popular-thumb3.jpg";
import popularThumb5 from "../assets/extra-images/popular-thumb5.jpg";

export default function BlogDetail() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Albrta Doe",
      date: "September 11, 2015",
      message: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
      replies: []
    },
    {
      id: 2,
      name: "Albrta Doe",
      date: "September 11, 2015",
      message: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
      replies: [
        {
          id: 4,
          name: "Albrta Doe",
          date: "September 11, 2015",
          message: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum."
        }
      ]
    },
    {
      id: 3,
      name: "Albrta Doe",
      date: "September 11, 2015",
      message: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
      replies: []
    }
  ]);

  // Form states
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  
  // Sidebar search state
  const [sidebarSearch, setSidebarSearch] = useState("");

  // Reply states
  const [replyToId, setReplyToId] = useState(null);
  const [replyToName, setReplyToName] = useState("");

  const totalComments = comments.reduce((acc, curr) => acc + 1 + (curr.replies ? curr.replies.length : 0), 0);

  const handleReplyClick = (e, commentId, authorName) => {
    e.preventDefault();
    setReplyToId(commentId);
    setReplyToName(authorName);
    
    // Scroll to the comment form
    const formElement = document.getElementById("leave-comment-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cancelReply = () => {
    setReplyToId(null);
    setReplyToName("");
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      name: commentName,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      message: commentText
    };

    if (replyToId) {
      // Add as a reply to selected comment
      setComments(prevComments =>
        prevComments.map(comment => {
          if (comment.id === replyToId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newCommentObj]
            };
          }
          return comment;
        })
      );
      setReplyToId(null);
      setReplyToName("");
    } else {
      // Normal comment
      setComments(prevComments => [
        ...prevComments,
        {
          ...newCommentObj,
          replies: []
        }
      ]);
    }

    setCommentName("");
    setCommentEmail("");
    setCommentText("");
  };

  const handleSidebarSearchSubmit = (e) => {
    e.preventDefault();
    if (sidebarSearch.trim()) {
      alert(`Searching sidebar for: ${sidebarSearch}`);
    }
  };

  return (
    <>
      {/* Banner Wrap Start */}
      <div className="iner_banner">
        <div className="container">
          <h5>Blog - detail</h5>
          <div className="banner_iner_capstion">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog-detail">Blog - detail</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner Wrap End */}

      {/* iqoniq Content Start */}
      <div className="iq_content_wrap">
        {/* blog1_detail START */}
        <section>
          <div className="blog1_detail">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  {/* blog_detail_page START */}
                  <div className="blog_detail_page">
                    <figure>
                      <img src={blogDetailImg} alt="" />
                    </figure>
                    {/* Heading Wrap Start */}
                    <div className="iq_heading_1 text-left">
                      <h4>ASP.NET with <span>C #</span></h4>
                    </div>
                    {/* Heading Wrap End */}
                    <ul className="blog_detail_navi">
                      <li>
                        <Link to="#" onClick={(e) => e.preventDefault()}>September 21, 2015</Link>
                      </li>
                      <li>
                        <Link to="#" onClick={(e) => e.preventDefault()}>In Destination, Education</Link>
                      </li>
                      <li>
                        <Link to="#" onClick={(e) => e.preventDefault()}>By Admin</Link>
                      </li>
                    </ul>
                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </p>
                    <p className="blog_margin">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
                    {/* blog_quotes start */}
                    <div className="blog_quotes">
                      <ul>
                        <li><span>January 09, 2015</span><small>In Quotes</small></li>
                      </ul>
                      <p>“ Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.” </p>
                      <span>-Jonathan Doe</span>
                    </div>
                    {/* blog_quotes end */}
                    {/* blog_quotes_prgh start */}
                    <div className="blog_quotes_prgh">
                      <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae er auctor eu in elit. Class aptent taci ti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                      <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae eraodio. Sed non mauris vitae eraodio. Sed non mauris vitae erat .</p>
                    </div>
                    {/* blog_quotes_prgh end */}
                    <p>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat .</p>
                  </div>
                  {/* blog_detail_area end */}

                  <div className="tags_wrap">
                    {/* Tags Start */}
                    <ul className="iq-tags">
                      <li><Link to="/blog">Sports</Link></li>
                      <li><Link to="/blog">Team</Link></li>
                      <li><Link to="/blog">Champions</Link></li>
                    </ul>
                    {/* Tags End */}
                    <ul className="iq_footer_social">
                      <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"><span className="sr-only">Facebook</span></a></li>
                      <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"><span className="sr-only">Twitter</span></a></li>
                      <li><a href="https://rss.com" target="_blank" rel="noopener noreferrer" className="fa fa-rss"><span className="sr-only">RSS</span></a></li>
                    </ul>
                  </div>

                  {/* commenting aera start */}
                  <div className="blog_commenting">
                    <div className="detail_searh_heading commenting">
                      {/* Heading Wrap Start */}
                      <div className="iq_heading_1 text-left">
                        <h4>Comment : <span>{totalComments}</span></h4>
                      </div>
                      {/* Heading Wrap End */}
                    </div>
                    <ul className="blog_commenting_area">
                      {comments.map((comment) => (
                        <li key={comment.id}>
                          <div className="comment-thumb">
                            <figure>
                              <img src={commentThumbImg} alt="" />
                            </figure>
                            <div className="comment_caption">
                              <div className="comment_caption-2">
                                <span>
                                  <strong>{comment.name} Wrote :</strong>
                                  <small>{comment.date}</small>
                                </span>
                                <Link 
                                  className="comment-reply" 
                                  to="#" 
                                  onClick={(e) => handleReplyClick(e, comment.id, comment.name)}
                                >
                                  Reply
                                </Link>
                              </div>
                              <div className="comment-reply-2">
                                <p>{comment.message}</p>
                              </div>
                            </div>
                          </div>
                          {comment.replies && comment.replies.length > 0 && (
                            <ul>
                              {comment.replies.map((reply) => (
                                <li key={reply.id}>
                                  <div className="comment-thumb">
                                    <figure>
                                      <img src={commentThumbImg} alt="" />
                                    </figure>
                                    <div className="comment_caption">
                                      <div className="comment_caption-2">
                                        <span>
                                          <strong>{reply.name} Wrote :</strong>
                                          <small>{reply.date}</small>
                                        </span>
                                        <Link 
                                          className="comment-reply" 
                                          to="#" 
                                          onClick={(e) => handleReplyClick(e, comment.id, reply.name)}
                                        >
                                          Reply
                                        </Link>
                                      </div>
                                      <div className="comment-reply-2">
                                        <p>{reply.message}</p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* commenting aera end */}

                  {/* search_heading start */}
                  <div className="blog_detail_searh" id="leave-comment-form">
                    <div className="detail_searh_heading">
                      {/* Heading Wrap Start */}
                      <div className="iq_heading_1 text-left">
                        <h4>Leave A <span>Comment</span></h4>
                      </div>
                      {/* Heading Wrap End */}
                    </div>
                    <form onSubmit={handleSubmitComment} className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="iq-input">
                          <input 
                            type="text" 
                            placeholder="Your Name"
                            value={commentName}
                            onChange={(e) => setCommentName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="iq-input">
                          <input 
                            type="email" 
                            placeholder="Your Email"
                            value={commentEmail}
                            onChange={(e) => setCommentEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <div className="iq-input">
                          <textarea 
                            placeholder="Message"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            required
                          ></textarea>
                        </div>
                      </div>
                      {replyToId && (
                        <div className="col-md-12 col-sm-12" style={{ marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f9f9f9", padding: "8px 15px", borderRadius: "4px", borderLeft: "3px solid #29b6f6" }}>
                          <span>Replying to <strong>{replyToName}</strong></span>
                          <button 
                            type="button" 
                            onClick={cancelReply} 
                            style={{ background: "none", border: "none", color: "#f44336", cursor: "pointer", fontWeight: "bold" }}
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                      <div className="col-md-12 col-sm-12">
                        <input className="iq_link_1" type="submit" value="submit" />
                      </div>
                    </form>
                  </div>
                  {/* search_heading end */}
                </div>

                <div className="col-md-4">
                  <div className="aside-bar">
                    {/* course_inrp_side_search START */}
                    <div className="widget widget-search">
                      <form onSubmit={handleSidebarSearchSubmit} className="iq-input">
                        <input 
                          placeholder="Search ..." 
                          type="text"
                          value={sidebarSearch}
                          onChange={(e) => setSidebarSearch(e.target.value)}
                        />
                        <label className="iq-input-icon">
                          <input type="submit" value="" style={{ display: "none" }} />
                        </label>
                      </form>
                    </div>
                    {/* course_inrp_side_search end */}

                    {/* coures_archives start */}
                    <div className="widget widget_archive">
                      {/* Widget Title Start */}
                      <h5 className="widget-title"><span>our</span> Course</h5>
                      {/* Widget Title End */}
                      <ul>
                        <li>
                          <Link to="/courses">Politics & History</Link><span>03</span>
                        </li>
                        <li>
                          <Link to="/courses">Journalism</Link><span>01</span>
                        </li>
                        <li>
                          <Link to="/courses">Medical Sciences</Link><span>03</span>
                        </li>
                        <li>
                          <Link to="/courses">Health</Link><span>01</span>
                        </li>
                        <li>
                          <Link to="/courses">Sports</Link><span>03</span>
                        </li>
                        <li>
                          <Link to="/courses">Atrs</Link><span>02</span>
                        </li>
                        <li>
                          <Link to="/courses">Tourism & Culture</Link><span>06</span>
                        </li>
                      </ul>
                    </div>
                    {/* coures_archives end */}

                    {/* POPULAR START */}
                    <div className="widget widget-popular">
                      {/* Widget Title Start */}
                      <h5 className="widget-title"><span>popular</span>courses</h5>
                      {/* Widget Title End */}
                      
                      {/* POPULAR THUMB START */}
                      <div className="popular_thumb">
                        <figure>
                          <img src={popularThumb1} alt="" />
                        </figure>
                        {/* COURES POPULAR CAPSTION START */}
                        <div className="overflow-text">
                          <h6><Link to="/blog-detail">Neque porro quisquam est qui dolorem dolor</Link></h6>
                          <p>19 Dec, 2015</p>
                        </div>
                        {/* COURES POPULAR CAPSTION END */}
                      </div>
                      {/* POPULAR THUMB END */}

                      {/* POPULAR THUMB START */}
                      <div className="popular_thumb">
                        <figure>
                          <img src={popularThumb2} alt="" />
                        </figure>
                        {/* COURES POPULAR CAPSTION START */}
                        <div className="overflow-text">
                          <h6><Link to="/blog-detail">Neque porro quisquam est qui dolorem dolor</Link></h6>
                          <p>19 Dec, 2015</p>
                        </div>
                        {/* COURES POPULAR CAPSTION END */}
                      </div>
                      {/* POPULAR THUMB END */}

                      {/* POPULAR THUMB START */}
                      <div className="popular_thumb">
                        <figure>
                          <img src={popularThumb3} alt="" />
                        </figure>
                        {/* COURES POPULAR CAPSTION START */}
                        <div className="overflow-text">
                          <h6><Link to="/blog-detail">Neque porro quisquam est qui dolorem dolor</Link></h6>
                          <p>19 Dec, 2015</p>
                        </div>
                        {/* COURES POPULAR CAPSTION END */}
                      </div>
                      {/* POPULAR THUMB END */}
                    </div>
                    {/* POPULAR END */}

                    {/* COURES CATEGORIES START */}
                    <div className="widget widget_time">
                      {/* Widget Title Start */}
                      <h5 className="widget-title"><span>working</span> hours</h5>
                      {/* Widget Title End */}
                      <ul>
                        <li>
                          <span>Monday</span>08:30 am - 05:30 pm
                        </li>
                        <li>
                          <span>Tuesday</span>08:30 am - 05:30 pm
                        </li>
                        <li>
                          <span>Wednesday</span>08:30 am - 05:30 pm
                        </li>
                        <li>
                          <span>Thursday</span>08:30 am - 05:30 pm
                        </li>
                        <li>
                          <span>Friday</span>08:30 am - 05:30 pm
                        </li>
                        <li>
                          <span>Saturday</span>Closed
                        </li>
                        <li>
                          <span>Sunday</span>Closed
                        </li>
                      </ul>
                    </div>
                    {/* COURES CATEGORIES END */}

                    {/* POPULAR START */}
                    <div className="widget widget-popular">
                      {/* Widget Title Start */}
                      <h5 className="widget-title"><span>popular</span>courses</h5>
                      {/* Widget Title End */}

                      {/* POPULAR THUMB START */}
                      <div className="popular_thumb">
                        <figure>
                          <img src={popularThumb5} alt="" />
                        </figure>
                        {/* COURES POPULAR CAPSTION START */}
                        <div className="overflow-text">
                          <h6><Link to="/courses">Professional Teaching Course</Link></h6>
                          {/* RATING AREA START */}
                          <div className="rating-wrap">
                            <div className="rating_down">
                              <div className="rating_up" style={{ width: "100%" }}></div>
                            </div>
                          </div>
                          {/* RATING AREA End */}
                          <p>Anna Doe</p>
                          <span>$99.99</span>
                        </div>
                        {/* COURES POPULAR CAPSTION END */}
                      </div>
                      {/* POPULAR THUMB END */}

                      {/* POPULAR THUMB START */}
                      <div className="popular_thumb">
                        <figure>
                          <img src={popularThumb2} alt="" />
                        </figure>
                        {/* COURES POPULAR CAPSTION START */}
                        <div className="overflow-text">
                          <h6><Link to="/courses">Professional Teaching Course</Link></h6>
                          {/* RATING AREA START */}
                          <div className="rating-wrap">
                            <div className="rating_down">
                              <div className="rating_up" style={{ width: "100%" }}></div>
                            </div>
                          </div>
                          {/* RATING AREA End */}
                          <p>Anna Doe</p>
                          <span>$99.99</span>
                        </div>
                        {/* COURES POPULAR CAPSTION END */}
                      </div>
                      {/* POPULAR THUMB END */}

                      {/* POPULAR THUMB START */}
                      <div className="popular_thumb">
                        <figure>
                          <img src={popularThumb3} alt="" />
                        </figure>
                        {/* COURES POPULAR CAPSTION START */}
                        <div className="overflow-text">
                          <h6><Link to="/courses">Professional Teaching Course</Link></h6>
                          {/* RATING AREA START */}
                          <div className="rating-wrap">
                            <div className="rating_down">
                              <div className="rating_up" style={{ width: "100%" }}></div>
                            </div>
                          </div>
                          {/* RATING AREA End */}
                          <p>Anna Doe</p>
                          <span>$99.99</span>
                        </div>
                        {/* COURES POPULAR CAPSTION END */}
                      </div>
                      {/* POPULAR THUMB END */}
                    </div>
                    {/* POPULAR END */}

                    {/* POPULAR START */}
                    <div className="widget widget-tag">
                      {/* Widget Title Start */}
                      <h5 className="widget-title"><span>tags</span></h5>
                      {/* Widget Title End */}
                      <div className="tag">
                        <Link className="tag-link" to="/blog">Science</Link>
                        <Link className="tag-link" to="/blog">knowledge</Link>
                        <Link className="tag-link" to="/blog">Courage</Link>
                        <Link className="tag-link" to="/blog">Sports</Link>
                        <Link className="tag-link" to="/blog">Impression</Link>
                        <Link className="tag-link" to="/blog">History & Politics</Link>
                        <Link className="tag-link" to="/blog">Admission</Link>
                        <Link className="tag-link" to="/blog">Arts</Link>
                        <Link className="tag-link" to="/blog">Research</Link>
                        <Link className="tag-link" to="/blog">Career</Link>
                        <Link className="tag-link" to="/blog">PHD</Link>
                      </div>
                    </div>
                    {/* POPULAR END */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog1_detail END */}
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