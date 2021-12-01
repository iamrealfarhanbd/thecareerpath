

const Video = () => {

    return (
        <section className="video-section pb-100 overflow-hidden">
            <div className="container">
                <div className="video-bg pt-100 bg-off-white">
                    <div className="video-bg-shapes">
                        <div className="video-bg-shape-item">
                            <img src="assets/images/shapes/line-area-shape.png" alt="shape" />
                        </div>
                    </div>
                    <div className="video-animation-items">
                        <div className="video-animation-item animation-tab-none">
                            <img src="assets/images/shapes/circle-dot-shape.png" alt="shape" />
                        </div>
                        <div className="video-animation-item animation-tab-none">
                            <img src="assets/images/shapes/curve-lines-shape.png" alt="shape" />
                        </div>
                    </div>
                    <div className="section-title">
                        <h2>Watch <span>The Video</span></h2>
                    </div>
                </div>
                <div className="video-content">
                    <img src="assets/images/videos-bg/video-image-1.jpg" alt="vide" />
                    <div className="video-button">
                        <a href="https://www.youtube.com/watch?v=BRvyWfuxGuU" id="video-popup"><i className="flaticon-play-button"></i></a>
                    </div>
                    <div className="content-animation-shapes">
                        <div className="content-animation-shape animation-tab-none">
                            <img src="assets/images/shapes/combined-circle-shape.png" alt="shape" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    )
}

export default Video