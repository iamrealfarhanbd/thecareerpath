

const Service = () => {

    return (
        <div className="about-section bg-off-white pt-100 pb-70 position-relative overflow-hidden">
            <div className="background-shapes">
                <div className="background-shape-item">
                    <img src="assets/images/shapes/curved-line.png" alt="line" />
                </div>
                <div className="background-shape-item">
                    <img src="assets/images/shapes/half-circle-shape.png" alt="line" />
                </div>
            </div>
            <div className="animate-shapes">
                <div className="animate-shape animation-tab-none">
                    <img src="assets/images/shapes/animate-shape-1.png" alt="shape" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-3 pb-30">
                        <div className="about-item-card">
                            <img src="assets/images/shapes/about-grid-icon.png" className="about-card-image" alt="icon" />
                            <div className="about-card-icon">
                                <i className="flaticon-book-of-black-cover-closed"></i> 
                                <i className="flaticon-mortarboard"></i>  
                            </div>
                            <div className="about-card-text">
                                <h3><span className="counter">1500</span></h3>
                                <h4>More Happy Students</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 pb-30">
                        <div className="about-item-card">
                            <img src="assets/images/shapes/about-grid-icon.png" className="about-card-image" alt="icon" />
                            <div className="about-card-icon">
                                <i className="flaticon-laptop"></i> 
                                <i className="flaticon-web"></i>  
                            </div>
                            <div className="about-card-text">
                                <h3><span className="counter">23,085</span></h3>
                                <h4>More Online Courses</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 pb-30">
                        <div className="about-item-card">
                            <img src="assets/images/shapes/about-grid-icon.png" className="about-card-image" alt="icon" />
                            <div className="about-card-icon">
                                <i className="flaticon-pencil"></i> 
                                <i className="flaticon-agenda"></i>  
                            </div>
                            <div className="about-card-text">
                                <h3><span className="counter">100</span>%</h3>
                                <h4>Success in Life</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 pb-30">
                        <div className="about-item-card">
                            <img src="assets/images/shapes/about-grid-icon.png" className="about-card-image" alt="icon" />
                            <div className="about-card-icon">
                                <i className="flaticon-monitor"></i> 
                                <i className="flaticon-address-book"></i> 
                            </div>
                            <div className="about-card-text">
                                <h3><span className="counter">1500</span></h3>
                                <h4>24/7 Real Time Support</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service