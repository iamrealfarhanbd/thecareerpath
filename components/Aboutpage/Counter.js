
const Counter = () => {

    return (
        <div className="about-section bg-maincolor-light pt-100 pb-70 position-relative">
            <div className="record-animate-shapes">
                <div className="record-animate-shape animation-tab-none">
                    <img src="assets/images/shapes/shape-10.png" alt="shape" />
                </div>
                <div className="record-animate-shape animation-tab-none">
                    <img src="assets/images/shapes/shape-11.png" alt="shape" />
                </div>
            </div>
            <div className="container position-relative">
                <div className="record-grid">
                    <div className="record-grid-item">
                        <div className="record-grid-item-inner">
                            <div className="record-item-number">
                                <div className="counter">200</div>
                                <span>+</span>
                            </div>
                            <div className="record-item-text">
                                <p>Projects Finished</p>
                            </div>
                        </div>
                    </div>
                    <div className="record-grid-item">
                        <div className="record-grid-item-inner">
                            <div className="record-item-number">
                                <div className="counter">199</div>
                                <span>+</span>
                            </div>
                            <div className="record-item-text">
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="record-grid-item">
                        <div className="record-grid-item-inner">
                            <div className="record-item-number">
                                <div className="counter">150</div>
                                <span>+</span>
                            </div>
                            <div className="record-item-text">
                                <p>Online Students</p>
                            </div>
                        </div>
                    </div>
                    <div className="record-grid-item">
                        <div className="record-grid-item-inner">
                            <div className="record-item-number">
                                <div className="counter">20</div>
                                <span>+</span>
                            </div>
                            <div className="record-item-text">
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter