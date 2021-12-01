const Form = () => {

    return (
        <section className="contact-form-section p-tb-100">
            <div className="container">
                <div className="contact-form-box">
                    <div className="sub-section-title text-center">
                        <h3 className="sub-section-title-heading">Leave A Message</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <form className="contact-form" id="contactForm">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="form-group mb-20">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="flaticon-user"></i></span>
                                        </div>
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Name*" required data-error="Please enter your name" />
                                    </div>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="form-group mb-20">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="flaticon-envelope"></i></span>
                                        </div>
                                        <input type="text" name="email" id="email" className="form-control" placeholder="Email*" required data-error="Please enter your email" />
                                    </div>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="form-group mb-20">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="flaticon-phone-call"></i></span>
                                        </div>
                                        <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone*" required data-error="Please enter your phone number" />
                                    </div>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="form-group mb-20">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="flaticon-book"></i></span>
                                        </div>
                                        <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject*" required data-error="Please enter your subject" />
                                    </div>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="form-group mb-20">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="flaticon-envelope"></i></span>
                                        </div>
                                        <textarea name="message" className="form-control" id="message" rows="6" placeholder="Your Comment*"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <div className="input-checkbox mb-20">
                                    <input type="checkbox" id="contact1" />
                                    <label for="contact1">Accept <a href="terms-service.html">Terms of Service</a> and <a href="privacy-policy">Privacy Policy</a></label>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 text-center">
                                <button className="btn main-btn" type="submit">SEND A MESSAGE</button>
                                <div id="msgSubmit"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form