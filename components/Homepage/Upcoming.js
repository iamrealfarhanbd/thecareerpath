

const Upcoming = () => {

    return (
        <section className="course-section pt-100 pb-70">
            <div className="container">
                <div className="section-title-group">
                    <div className="section-title section-title-shapeless">
                        <h2>Our Upcoming Education Events <span>Online Courses</span></h2>
                    </div>
                    <a href="events.html" className="btn main-btn">VIEW ALL EVENTS <i className="flaticon-edit"></i></a>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 pb-30">
                        <div className="course-flat-card">
                            <div className="course-card-thumb">
                                <a href="event-details.html"><img src="assets/images/events/event-course-1.jpg" alt="course" /></a>
                            </div>
                            <div className="course-card-content">
                                <ul className="course-location">
                                    <li><i className="flaticon-placeholder"></i> United States</li>
                                </ul>
                                <h3>USA Coordinates & Participates in a Variety of Fairs</h3>
                                <p><a href="event-details.html" className="redirect-link">Learn More <i className="flaticon-right-arrow"></i></a></p>
                            </div>
                            <ul className="course-filter-list">
                                <li className="course-filter-danger">13 January</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 pb-30">
                        <div className="course-flat-card">
                            <div className="course-card-thumb">
                                <a href="event-details.html"><img src="assets/images/events/event-course-2.jpg" alt="course" /></a>
                            </div>
                            <div className="course-card-content">
                                <ul className="course-location">
                                    <li><i className="flaticon-placeholder"></i> Brokenlain, USA</li>
                                </ul>
                                <h3>Education for Foreign Students & Institution’s Teachers</h3>
                                <p><a href="event-details.html" className="redirect-link">Learn More <i className="flaticon-right-arrow"></i></a></p>
                            </div>
                            <ul className="course-filter-list">
                                <li className="course-filter-danger">29 January</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0 pb-30">
                        <div className="course-flat-card">
                            <div className="course-card-thumb">
                                <a href="event-details.html"><img src="assets/images/events/event-course-3.jpg" alt="course" /></a>
                            </div>
                            <div className="course-card-content">
                                <ul className="course-location">
                                    <li><i className="flaticon-placeholder"></i> Kelowna, British Columbia</li>
                                </ul>
                                <h3>An Annual Survey Produced by the International Education</h3>
                                <p><a href="event-details.html" className="redirect-link">Learn More <i className="flaticon-right-arrow"></i></a></p>
                            </div>
                            <ul className="course-filter-list">
                                <li className="course-filter-danger">28 February</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upcoming