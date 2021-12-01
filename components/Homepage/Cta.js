

const Cta = () => {

    return (
        <section className="become-section pb-100">
        <div className="container">
            <div className="bg-main become-section-box">
                <div className="become-section-shapes">
                    <div className="become-section-shape-item">
                        <img src="assets/images/shapes/become-section-curve-line.png" alt="shape" />
                    </div>
                </div>
                <div className="become-animate-items">
                    <div className="become-animate-item animation-tab-none">
                        <img src="assets/images/shapes/animate-shape-2.png" alt="shape" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5 pb-50 mobile-pb-30">
                        <div className="section-title section-title-white section-title-left">
                            <h2>Join As Teacher Or Student</h2>
                            <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut henderit in magnam aliquam quaerat voluptatem</p>
                        </div>
                        <div className="section-button-group">
                            <div className="section-button-item">
                                <a href="become-a-teacher.html" className="btn main-btn btn-white">BECOME A TEACHER <i className="flaticon-edit"></i></a>
                            </div>
                            <div className="section-button-item">
                                <a href="become-a-teacher.html" className="btn main-btn btn-white">BECOME A STUDENT <i className="flaticon-edit"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 offset-lg-1 position-relative">
                        <div className="image-position image-position-rb text-center">
                            <img src="assets/images/header-screenshot.png" alt="screenshot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default Cta