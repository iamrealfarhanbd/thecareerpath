

const Recentpost = () => {

    return (
        <div className="sidebar-item mb-40">
        <div className="sidebar-title">
            <h3>Recent Posts</h3>
        </div>
        <div className="blog-recent-content">
            <div className="blog-recent-content-item">
                <div className="blog-recent-content-image">
                    <a href="blog-details.html">
                        <img src="assets/images/recent-blog-1.jpg" alt="recent" />
                    </a>
                </div>
                <div className="blog-recent-content-details">
                    <ul className="course-entry-list">
                        <li><i className="flaticon-online-learning-1"></i> 29 January, 2021</li>
                    </ul>
                    <h3><a href="blog-details.html">The Challenge of Global Learning </a></h3>
                </div>
            </div>
            <div className="blog-recent-content-item">
                <div className="blog-recent-content-image">
                    <a href="blog-details.html">
                        <img src="assets/images/recent-blog-2.jpg" alt="recent" /> 
                    </a>
                </div>
                <div className="blog-recent-content-details">
                    <ul className="course-entry-list">
                        <li><i class="flaticon-online-learning-1"></i> 27 January, 2021</li>
                    </ul>
                    <h3><a href="blog-details.html">The Lessons of Online Learning</a></h3>
                </div>
            </div>
            <div className="blog-recent-content-item">
                <div className="blog-recent-content-image">
                    <a href="blog-details.html">
                        <img src="assets/images/recent-blog-3.jpg" alt="recent" />
                    </a>
                </div>
                <div className="blog-recent-content-details">
                    <ul className="course-entry-list">
                        <li><i className="flaticon-online-learning-1"></i> 26 January, 2021</li>
                    </ul>
                    <h3><a href="blog-details.html">Is Poor Internet the Real Culprit?</a></h3>
                </div>
            </div>
            <div className="blog-recent-content-item">
                <div className="blog-recent-content-image">
                    <a href="blog-details.html">
                        <img src="assets/images/recent-blog-4.jpg" alt="recent" />
                    </a>
                </div>
                <div className="blog-recent-content-details">
                    <ul className="course-entry-list">
                        <li><i className="flaticon-online-learning-1"></i> 20 January, 2021</li>
                    </ul>
                    <h3><a href="blog-details.html">Has the Quality of Classes Dropped? </a></h3>
                </div>
            </div>
        </div>
    </div>
      
    )
}

export default Recentpost