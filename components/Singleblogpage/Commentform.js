

const Commentform = () => {

    return (
        <div className="blog-input-area">
        <div className="comment-area">
            <div className="sub-section-title">
                <h3 className="sub-section-title-heading">Leave A Comment</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
            </div>
            <div className="comment-input-area mt-30">
                <form>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-20">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="flaticon-user"></i></span>
                                    </div>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Name*" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-20">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="flaticon-book"></i></span>
                                    </div>
                                    <input type="text" name="url" id="url" className="form-control" placeholder="URL*" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-20">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="flaticon-envelope"></i></span>
                                    </div>
                                    <textarea name="message" className="form-control" id="message" rows="6" placeholder="Your Comment*"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-checkbox mb-20">
                                <input type="checkbox" id="contact1" />
                                <label for="contact1">Save my name, and website in this browser for the next time I comment.</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <button className="btn main-btn">SEND A COMMENT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Commentform