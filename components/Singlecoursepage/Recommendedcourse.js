

const Recommendedcourse = () => {

    return (
        <section className="course-section p-tb-100 bg-off-white">
            <div className="container">
                <div className="section-title-group">
                    <div className="section-title section-title-shapeless">
                        <h2>Courses You <span>Might Like</span></h2>
                    </div>
                </div>
                <div className="course-carousel swiper-container">
                    <div className="swiper-wrapper">
                        <div className="course-carousel-item swiper-slide">
                            <div className="course-card">
                                <div className="course-card-thumb">
                                    <a href="single-course.html"><img src="assets/images/courses/course-image-1.jpg" alt="course" /></a>
                                </div>
                                <div className="course-card-content bg-gray">
                                    <ul className="course-info-list">
                                        <li><i className="flaticon-reading"></i> 23 Students</li>
                                        <li><i className="flaticon-online-learning-1"></i> 30 Lessons</li>
                                    </ul>
                                    <h3><a href="single-course.html">Listening Skills the Ultimate Soft Skills for Beginners</a></h3>
                                    <h4 className="course-price">$56.00</h4>
                                </div>
                                <ul className="course-filter-list">
                                    <li className="course-filter-danger">Featured</li>
                                    <li className="course-filter-success">Free</li>
                                </ul>
                            </div>
                        </div>
                        <div className="course-carousel-item swiper-slide">
                            <div className="course-card">
                                <div className="course-card-thumb">
                                    <a href="single-course.html"><img src="assets/images/courses/course-image-2.jpg" alt="course" /></a>
                                </div>
                                <div className="course-card-content bg-gray">
                                    <ul className="course-info-list">
                                        <li><i className="flaticon-reading"></i> 16 Students</li>
                                        <li><i className="flaticon-online-learning-1"></i> 45 Lessons</li>
                                    </ul>
                                    <h3><a href="single-course.html">Yoga Medicine’s Guide to Therapeutic Man &amp; Woman</a></h3>
                                    <h4 className="course-price">$100.00</h4>
                                </div>
                                <ul className="course-filter-list">
                                    <li className="course-filter-danger">Featured</li>
                                    <li className="course-filter-success">Free</li>
                                </ul>
                            </div>
                        </div>
                        <div className="course-carousel-item swiper-slide">
                            <div className="course-card">
                                <div className="course-card-thumb">
                                    <a href="single-course.html"><img src="assets/images/courses/course-image-3.jpg" alt="course" /></a>
                                </div>
                                <div className="course-card-content bg-gray">
                                    <ul className="course-info-list">
                                        <li><i className="flaticon-reading"></i> 16 Students</li>
                                        <li><i className="flaticon-online-learning-1"></i> 45 Lessons</li>
                                    </ul>
                                    <h3><a href="single-course.html">Excel Crash Course: Master Excel for Financial Analysis</a></h3>
                                    <h4 className="course-price">$78.00</h4>
                                </div>
                                <ul className="course-filter-list">
                                    <li className="course-filter-danger">Featured</li>
                                    <li className="course-filter-success">-50%</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-carousel-control">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommendedcourse