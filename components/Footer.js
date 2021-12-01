

const Footer = () => {

    return (

        <footer>
        <div className="footer-upper pt-100 pb-80 bg-blue">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <div className="footer-content-item">
                            <div className="footer-logo">
                                <a href="index.html"><img src="assets/images/logo-3-white.png" alt="logo" /></a>
                            </div>
                            <div className="footer-details footer-address-info">
                                <div className="footer-address-info-item">
                                    <h4>Call Us</h4>
                                    <p className="footer-contact-number"><a href="tel:001-800-388-80-90">800 388 80 90</a><span>or</span><a href="tel:001-667-234-32-67">667 234 32 67 </a></p>
                                </div>
                                <div className="footer-address-info-item">
                                    <p className="footer-email"><a href="mailto:hello@jexi.com">hello@jexi.com</a></p>
                                </div>
                                <div className="footer-address-info-item">
                                    <p className="footer-availability"><span>9 AM – 5 PM DC</span>, Monday – Friday</p>
                                </div>
                                <div className="footer-address-info-item">
                                    <p className="footer-physical-address">PO Box 567 Hostin st. 433, Los Angeles California, US.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <div className="footer-right pl-80">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="footer-content-list footer-content-item">
                                        <div className="footer-content-title">
                                            <h3>Links</h3>
                                        </div>
                                        <ul className="footer-details footer-list">
                                            <li><a href="start-here.html">Start Here</a></li>
                                            <li><a href="blogs-grid-without-sidebar.html">Blogs</a></li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="contact-us.html">Contact Us</a></li>
                                            <li><a href="career.html">Career</a></li>
                                            <li><a href="courses.html">Courses</a></li>
                                            <li><a href="demo-account.html">Demo Account</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="footer-content-list footer-content-item">
                                        <div className="footer-content-title">
                                            <h3>Information</h3>
                                        </div>
                                        <ul className="footer-details footer-list">
                                            <li><a href="products.html">Products</a></li>
                                            <li><a href="start-here.html">Start Here</a></li>
                                            <li><a href="membership-levels.html">Membership Levels</a></li>
                                            <li><a href="purchase-guide.html">Purchase Guide</a></li>
                                            <li><a href="become-a-teacher.html">Become a Teacher</a></li>
                                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="terms-service.html">Terms of Service</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="footer-content-list footer-content-item desk-pad-left-30">
                                        <div className="footer-content-title">
                                            <h3>Sign Up for Our Newsletter</h3>
                                        </div>
                                        <div className="footer-details">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            <div className="footer-newsletter-form">
                                                <form className="newsletter-form">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input type="text" placeholder="Your e-mail" className="form-control" id="emails" name="EMAIL" required autocomplete="off" />
                                                            <button className="btn main-btn" type="submit">SUBSCRIBE</button>
                                                        </div>
                                                        <div id="validator-newsletter" className="form-result"></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-lower bg-off-white">
            <div className="background-shapes">
                <div className="background-shape-item">
                    <img src="assets/images/shapes/curved-line.png" alt="line" />
                </div>
                <div className="background-shape-item">
                    <img src="assets/images/shapes/half-circle-shape.png" alt="line" />
                </div>
                <div className="background-shape-item">
                    <img src="assets/images/shapes/animate-shape-1.png" alt="line" />
                </div>
            </div>
            <div className="container">
                <div className="footer-lower-grid">
                    <div className="footer-lower-item footer-lower-info">
                        <div className="footer-copyright-text">
                            <p>Copyright ©2021 Design &amp; Developed By <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
                        </div>
                    </div>
                    <div className="footer-lower-item">
                        <ul className="social-list">
                            <li><a href="#"><img src="assets/images/facebook.png" alt="social" /></a></li>
                            <li><a href="#"><img src="assets/images/twitter.png" alt="social" /></a></li>
                            <li><a href="#"><img src="assets/images/linkedin.png" alt="social" /></a></li>
                            <li><a href="#"><img src="assets/images/instagram.png" alt="social" /></a></li>
                            <li><a href="#"><img src="assets/images/youtube.png" alt="social" /></a></li>
                            <li><a href="#"><img src="assets/images/skype.png" alt="social" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer