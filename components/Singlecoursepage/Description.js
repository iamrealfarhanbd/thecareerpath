import Sidebar from './Sidebar'


const Description = () => {

    return (
        <>
        <section className="course-details-section pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div className="col-12 col-lg-8 pb-30 order-lg-1">
                        <div className="summery-details-item desk-pad-right-30">
                            <ul className="product-tab-list">
                                <li className="active" data-product-tab="1">Overview</li>
                                <li data-product-tab="2">Curriculam</li>
                                <li data-product-tab="3">Instructor</li>
                                <li data-product-tab="4">Reviews</li>
                            </ul>
                            <div className="summery-info-details">
                                <div className="summery-info-details-item summery-info-details-item-active" data-summery-info-details="1">
                                    <div className="summery-info-details-inner">
                                        <h3>Course Description</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <h4>Requirements:</h4>
                                        <ul>
                                            <li><i className="flaticon-check"></i> Sed ut perspiciatis unde omnis iste natus error sit</li>
                                            <li><i className="flaticon-check"></i> At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                                            <li><i className="flaticon-check"></i> Itaque earum rerum hic tenetur a sapiente delectus</li>
                                        </ul>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                    </div>
                                </div>
                                <div className="summery-info-details-item" data-summery-info-details="2">
                                    <div className="summery-info-details-inner">
                                        <h4>Course Outline</h4>
                                        <small><i>General introduction to the course outline</i></small>
                                        <ul className="summery-lesson-list">
                                            <li>
                                                <a href="#">
                                                    <span className="summery-lesson-name">Lesson 01: Simple, attainable goals</span>
                                                    <div className="summery-item-meta">
                                                        <span className="item-meta">Preview</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="summery-lesson-name">Live meeting about Online Education</span>
                                                    <div className="summery-item-meta">
                                                        <span className="item-meta duration">30 min</span>
                                                        <i className='bx bxs-lock-alt' ></i>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="summery-info-details-item" data-summery-info-details="3">
                                    <div className="summery-info-details-inner">
                                        <div className="summery-info-instructor">
                                            <div className="summery-info-instructor-thumb">
                                                <img src="assets/images/instructor.jpg" alt="instructor" />
                                            </div>
                                            <div className="summery-info-instructor-details">
                                                <h3>Owen Christ</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="summery-info-details-item" data-summery-info-details="4">
                                    <div className="summery-info-details-inner">
                                        <h4>Course Rating</h4>
                                        <p><span className="summery-rating-total">5.00</span> average based on <span className="summery-rating-number">1</span> rating</p>
                                        <div className="review-star">
                                            <ul className="review-star-list">
                                                <li className="full-star"><i className="bx bxs-star" ></i></li>
                                                <li className="full-star"><i className="bx bxs-star" ></i></li>
                                                <li className="full-star"><i className="bx bxs-star" ></i></li>
                                                <li className="full-star"><i className="bx bxs-star" ></i></li>
                                                <li className="full-star"><i className="bx bxs-star" ></i></li>
                                            </ul>
                                            <span>4.7/5.00</span>
                                        </div>
                                        <div className="summery-review-progress">
                                            <div className="summery-progress-item">
                                                <h5>Star</h5>
                                                <div className="progress summery-progress">
                                                    <div className="progress-bar summery-progress-bar" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <span>30%</span>
                                                </div>
                                            </div>
                                            <div className="summery-progress-item">
                                                <h5>Star</h5>
                                                <div className="progress summery-progress">
                                                    <div className="progress-bar summery-progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <span>100%</span>
                                                </div>
                                            </div>
                                            <div className="summery-progress-item">
                                                <h5>Star</h5>
                                                <div className="progress summery-progress">
                                                    <div className="progress-bar summery-progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                            <div className="summery-progress-item">
                                                <h5>Star</h5>
                                                <div className="progress summery-progress">
                                                    <div className="progress-bar summery-progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                            <div className="summery-progress-item">
                                                <h5>Star</h5>
                                                <div className="progress summery-progress">
                                                    <div className="progress-bar summery-progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <span>30%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="summery-comment-area">
                                            <div className="summery-people-review">
                                               
                                                <div className="summery-people-review-item">
                                                 
                                                    <div className="summery-people-reply summery-people-review-main">
                                                        <div className="summery-people-review-thumb">
                                                            <img src="assets/images/comments/comment-2.jpg" alt="people" />
                                                        </div>
                                                        <div className="summery-people-review-content">
                                                            <div className="summery-people-review-info">
                                                                <h3 className="summery-post-name">Devit Killer</h3>
                                                                <div className="review-star">
                                                                    <ul className="review-star-list">
                                                                        <li className="full-star"><i className="bx bxs-star" ></i></li>
                                                                        <li className="full-star"><i className="bx bxs-star" ></i></li>
                                                                        <li className="full-star"><i className="bx bxs-star" ></i></li>
                                                                        <li className="full-star"><i className="bx bxs-star" ></i></li>
                                                                        <li className="full-star"><i className="bx bxs-star" ></i></li>
                                                                    </ul>
                                                                    <span>4.7/5.00</span>
                                                                </div>
                                                                <h4 className="summery-post-date">January 29, 2021</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                <div className="summery-people-reply-action">
                                                                    <a href="#" className="redirect-link">Write Review <i className="bx bx-plus"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 
                                                    <div className="summery-people-reply summery-people-review-reply">
                                                        <div className="summery-people-review-thumb">
                                                            <img src="assets/images/comments/comment-1.jpg" alt="people" />
                                                        </div>
                                                        <div className="summery-people-review-content">
                                                            <div className="summery-people-review-info">
                                                                <h3 className="summery-post-name">Owen Christ</h3>
                                                                <h4 className="summery-post-date">January 29, 2021</h4>
                                                                <p>Dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                                                                <div className="summery-people-reply-action">
                                                                    <a href="#" className="redirect-link">Write Review <i className="bx bx-plus"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-review-area">
                                            <div className="sub-section-title">
                                                <h3 className="sub-section-title-heading">Add Your Comments</h3>
                                                <p>Your email address will not be published. Required fields are marked *</p>
                                            </div>
                                            <form>
                                                <div className="form-review mb-20">
                                                    <fieldset className="rating">
                                                        <ul>
                                                            <li>
                                                                <input type="radio" id="star5" name="rating" value="5" />
                                                                <label className="full" for="star5"></label>
                                                                <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                                                <label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" id="star4" name="rating" value="4" />
                                                                <label className="full" for="star4"></label>
                                                                <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                                                <label className="half" for="star3half"></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" id="star3" name="rating" value="3" />
                                                                <label className="full" for="star3"></label>
                                                                <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                                                <label className="half" for="star2half"></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" id="star2" name="rating" value="2" />
                                                                <label className="full" for="star2"></label>
                                                                <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                                                <label className="half" for="star1half"></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" id="star1" name="rating" value="1" />
                                                                <label className="full" for="star1"></label>
                                                                <input type="radio" id="starhalf" name="rating" value="half" />
                                                                <label className="half" for="starhalf"></label>
                                                            </li>
                                                        </ul>
                                                    </fieldset>
                                                    <h4>Add Ratings</h4>
                                                </div>
                                                <div className="product-review-area">
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
                                                                    <span className="input-group-text"><i className="flaticon-envelope"></i></span>
                                                                    </div>
                                                                    <input type="text" name="email" id="email" className="form-control" placeholder="Email*" />
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
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Description