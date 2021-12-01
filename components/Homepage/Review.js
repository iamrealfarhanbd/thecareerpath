

const Review = () => {

    return (
        <section className="testimonial-section p-tb-100 bg-off-white position-relative">
        <div className="double-bg-shape-items">
            <div className="double-bg-shape-item">
                <img src="assets/images/shapes/bg-line-area-shape.png" alt="shape" />
            </div>
            <div className="double-bg-shape-item">
                <img src="assets/images/shapes/circle-shape.png" alt="shape" />
            </div>
        </div>
        <div className="client-fixed-images">
            <div className="client-fixed-image">
                <img src="assets/images/clients/client-2.jpg" alt="client" />
            </div>
            <div className="client-fixed-image">
                <img src="assets/images/clients/client-3.jpg" alt="client" />
            </div>
            <div className="client-fixed-image">
                <img src="assets/images/clients/client-4.jpg" alt="client" />
            </div>
            <div className="client-fixed-image">
                <img src="assets/images/clients/client-5.jpg" alt="client" />
            </div>
        </div>
        <div className="testimonial-animation-items">
            <div className="testimonial-animation-item animation-tab-none">
                <img src="assets/images/shapes/triangle-shape.png" alt="shape" />
            </div>
            <div className="testimonial-animation-item animation-tab-none">
                <img src="assets/images/shapes/square-ring-shape.png" alt="shape" />
            </div>
            <div className="testimonial-animation-item animation-tab-none">
                <img src="assets/images/shapes/curved-line-black.png" alt="shape" />
            </div>
            <div className="testimonial-animation-item animation-tab-none">
                <img src="assets/images/shapes/combined-circle-shape-2.png" alt="shape" />
            </div>
        </div>
        <div className="container">
            <div className="section-title">
                <h2>What People Say <span>About Us</span></h2>
            </div>
            <div className="testimonial-carousel swiper-container">
                <div className="swiper-wrapper">
                    <div className="testimonial-carousel-item swiper-slide">
                        <div className="testimonial-carousel-thumb">
                            <img src="assets/images/clients/client-1.jpg" alt="client" />
                        </div>
                        <div className="testimonial-carousel-content">
                            <h3 className="testimonial-client-name">Charry Porter</h3>
                            <h4 className="testimonial-client-designation">Student at <span>Porter Library</span></h4>
                            <p className="testimonial-client-feedback">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullmco laboris nisi ut aliquip ex ea  sit aspernatur aut odit aut qua.”</p>
                        </div>
                    </div>
                    <div className="testimonial-carousel-item swiper-slide">
                        <div className="testimonial-carousel-thumb">
                            <img src="assets/images/clients/client-2.jpg" alt="client" />
                        </div>
                        <div className="testimonial-carousel-content">
                            <h3 className="testimonial-client-name">Ricky Johnson</h3>
                            <h4 className="testimonial-client-designation">Instructor at <span>Porter Library</span></h4>
                            <p className="testimonial-client-feedback">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.”</p>
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

export default Review