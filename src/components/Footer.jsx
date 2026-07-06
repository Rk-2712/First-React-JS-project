import { Link } from 'react-router-dom'
import flickr1 from '../assets/extra-images/flickr1.jpg'
import flickr2 from '../assets/extra-images/flickr2.jpg'
import flickr3 from '../assets/extra-images/flickr3.jpg'
import flickr4 from '../assets/extra-images/flickr4.jpg'
import flickr5 from '../assets/extra-images/flickr5.jpg'
import flickr6 from '../assets/extra-images/flickr6.jpg'

export default function Footer() {
  return(
    <>
      <footer className="iq_footer_bg">
            	<div className="container">
            		<div className="row">
            			<div className="col-md-3 col-sm-6">
            				<div className="iq_uni_title">
            					<h4>university of <span>education</span></h4>
            					<p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore .</p>
            					<ul>
            						<li><span>Moday - Friday</span> 08:00- 05:00</li>
            						<li><span>Saturday</span> Closed</li>
            						<li><span>Sunday</span> Closed</li>
            					</ul>
            				</div>
            			</div>
            			<div className="col-md-3 col-sm-6">
                            <div className="widget widget_archive">
                                <h5 className="widget-title"><span>Our</span> Services</h5>
                                <ul>
                                    <li>
                                        <Link to='#'>Safety & Risk Management</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Facilities Services</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>University Police</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Campus Planning</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Mail Services</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Facilities IT</Link>
                                    </li>
                                </ul>
                            </div>
            			</div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget widget-flickr">
                                <h5 className="widget-title"><span>Our</span> Photo</h5>
                                <div className="flickr-wrap">
                                    <Link to="#" className="flickrbadges"><img src={flickr1} alt="" /></Link>
                                    <Link to="#" className="flickrbadges"><img src={flickr2} alt=""/></Link>
                                    <Link to="#" className="flickrbadges"><img src={flickr3} alt=""/></Link>
                                    <Link to="#" className="flickrbadges"><img src={flickr4} alt=""/></Link>
                                    <Link to="#" className="flickrbadges"><img src={flickr5} alt=""/></Link>
                                    <Link to="#" className="flickrbadges"><img src={flickr6} alt=""/></Link>
                                    <Link to="#" className="flickrbadges"><img src={flickr4} alt=""/></Link>
                                    <Link to="#" className="flickrbadges"><img src={flickr5} alt=""/></Link>
                                    <Link to="#" className="flickrbadges"><img src={flickr6} alt=""/></Link>
                                </div>
                            </div>
                        </div>
            			<div className="col-md-3 col-sm-6">
            				<div className="widget iq_footer_newsletter">
                                <h5 className="widget-title"><span>Our</span> Newsletter</h5>
            					<p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore .</p>
                                <form className="iq-input">
                                    <input placeholder="Search ..." type="text"/>
                                    <label className="iq-input-icon"><input type="submit"/></label>
                                </form>
            					<h5 className="widget-title border-none"><span>Our</span> Connected</h5>
            					<ul className="iq_footer_social">
            						<li>
            							<Link to="#"><i className="fa fa-facebook"></i></Link>
            						</li>
            						<li>
            							<Link to="#"><i className="fa fa-twitter"></i></Link>
            						</li>
            						<li>
            							<Link to="#"><i className="fa fa-facebook"></i></Link>
            						</li>
            						<li>
            							<Link to="#"><i className="fa fa-pinterest"></i></Link>
            						</li>
            					</ul>
            				</div>
            			</div>
            		</div>
            	</div>
            </footer>
			<div className="footer_strip">
				<h5><a target="_blank" rel="noopener noreferrer" href="https://www.templateshub.net">Templates Hub</a></h5>
			</div>
			<div className="modal fade" id="search-box" role="dialog">
      			<button type="button" className="close" data-dismiss="modal">&times;</button>
				<div className="modal-dialog">
					<div className="iqoniq_courses_search">
						<div className="container">
			            	<div className="iq_heading_1 text-center">
			                    <h4>Search For<span>Our Courses</span></h4>
			                    <p>Fill The Below Form and Star Searching</p>
			                </div>
							<div className="row">
								<div className="col-md-3 col-sm-6">
									<div className="iq-input">
										<input className="first_input" type="text" placeholder="Search Words"/>
									</div>
								</div>
								<div className="col-md-3 col-sm-6">
									<div className="iq-input">
			                            <select name="Category">
			                                <option value="0">Category</option>
			                                <option value="9">Publishing Date</option>
			                                <option value="2">Publishing Date</option>
			                                <option value="3">Publishing Date</option>
			                            </select>
									</div>
								</div>
								<div className="col-md-3 col-sm-6">
									<div className="iq-input">
			                            <select name="Category">
			                                <option value="0">Category</option>
			                                <option value="9">Publishing Date</option>
			                                <option value="2">Publishing Date</option>
			                                <option value="3">Publishing Date</option>
			                            </select>
									</div>
								</div> 
								<div className="col-md-3 col-sm-6">
									<div className="iq-input">
			                            <input className="iq_link_1" type="submit" value="Start Search"/>
									</div>
								</div>    
							</div> 
						</div>
					</div>
				</div>
			</div>
    </>
  );
}