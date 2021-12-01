

const Sidebar = () => {

    return (
        <div className="col-12 col-lg-4 pb-30 order-lg-2">
            <div className="summery-details-item sidebar-to-header">
                <div className="summery-box">
                    <div className="summery-iframe">
                        <iframe src="https://www.youtube.com/embed/thjVvXl8vwI"></iframe>
                    </div>
                    <div className="summery-inner">
                        <div className="summery-list">
                            <div className="summery-list-item">
                                <div className="summery-label"><i className="flaticon-equalizer"></i>Level</div>
                                <div className="summery-option">Beginner</div>
                            </div>
                            <div className="summery-list-item">
                                <div className="summery-label"><i className="flaticon-instructor"></i>Instructor</div>
                                <div className="summery-option">Owen Christ</div>
                            </div>
                            <div className="summery-list-item">
                                <div className="summery-label"><i className="flaticon-online-learning-1"></i>Lessons</div>
                                <div className="summery-option">10</div>
                            </div>
                            <div className="summery-list-item">
                                <div className="summery-label"><i className="flaticon-reading-book-1"></i>Enrolled</div>
                                <div className="summery-option">340 Student</div>
                            </div>
                            <div className="summery-list-item">
                                <div className="summery-label"><i className="flaticon-key"></i>Access</div>
                                <div className="summery-option">Lifetime</div>
                            </div>
                            <div className="summery-list-item">
                                <div className="summery-label"><i className="flaticon-globe"></i>Language</div>
                                <div className="summery-option">English</div>
                            </div>
                        </div>
                        <div className="summery-material-list">
                            <h4>Material Includes</h4>
                            <ul>
                                <li><span>-</span> Booklets</li>
                                <li><span>-</span> Videos</li>
                            </ul>
                        </div>
                        <div className="summery-buttons">
                            <a href="#" className="btn main-btn">ADD TO CART</a>
                        </div>
                        <div className="summery-social-share">
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
        </div>
    )
}

export default Sidebar