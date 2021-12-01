import Blogsearch from '../Blogsearch'
import Recentpost from '../Recentpost'
import Blogtag from '../Blogtag'
import Comment from './Comment'
import Commentform from './Commentform'




const Singleblog = () => {

    return (
        <>
            <div className="blog-details-section pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 pb-30 order-lg-2">
                        <div className="blog-details-item desk-pad-left-20">
                            <article className="blog-details-box mb-30">
                                <div className="blog-post-image">
                                    <img src="assets/images/blog-details/blog-details-image.jpg" alt="blog" />
                                    <div className="blog-post-category">Teaching & Learning</div>
                                </div>
                                <div className="blog-post-details">
                                    <ul className="course-entry-list">
                                        <li><img src="assets/images/blog-details/admin.jpg" alt="admin" /> Admin</li>
                                        <li><i className="flaticon-online-learning-1"></i> 29 January, 2021</li>
                                    </ul>
                                    <h3>Social-Emotional Basics for Students</h3>
                                    <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo cosquat in magnam aliquam quaerat voluptatemLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                                    <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut e voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <blockquote className="blockquote"> 
                                        <div className="blockquote-inner">
                                            <p>“Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo cosquat in magnam aliquam quaerat voluptatemLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam aliquipr”</p>
                                        </div>
                                    </blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
                                    <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore eius modi tempora incidunt ut labore et dolore </p>
                                    <div className="blog-image-grid">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <div className="blog-grid-image">
                                                    <img src="assets/images/blog-details/blog-grid-1.jpg" alt="blog" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <div className="blog-grid-image">
                                                    <img src="assets/images/blog-details/blog-grid-2.jpg" alt="blog" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
                                    <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore eius modi tempora incidunt ut labore et dolore </p>
                                </div>
                                <ul className="blog-details-counter">
                                    <li>Views: <span>29</span></li>
                                    <li>Comments: <span>17</span></li>
                                </ul>
                                <div className="blog-action">
                                    <p className="blog-action-tag"><i className="flaticon-tag"></i> Studuent, Learners</p>
                                    <div className="blog-share">
                                        <p>Share Post:</p>
                                        <ul className="social-list">
                                            <li><a href="#"><img src="assets/images/facebook.png" alt="social" /></a></li>
                                            <li><a href="#"><img src="assets/images/twitter.png" alt="social" /></a></li>
                                            <li><a href="#"><img src="assets/images/linkedin.png" alt="social" /></a></li>
                                            <li><a href="#"><img src="assets/images/instagram.png" alt="social" /></a></li>
                                            <li><a href="#"><img src="assets/images/youtube.png" alt="social" /></a></li>
                                            <li><a href="#"><img src="assets/images/skype.png" alt="social" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <div className="blog-quick-recent">
                                <div className="blog-quick-recent-item">
                                    <a href="#">
                                        <h3>The Challenge of Global Learning in Public Education</h3>
                                    </a>
                                </div>
                                <div className="blog-quick-recent-item blog-quick-recent-item-right">
                                    <a href="#">
                                        <h3>It’s Time to Think Differently About Writing</h3>
                                    </a>
                                </div>
                            </div>
                           <Comment />
                           <Commentform />
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 pb-30 order-lg-1">
                        <Blogsearch />
                        <Recentpost />
                        <Blogtag />
                    </div>
                </div>
            </div>
        </div>
        </>   
      
    )
}

export default Singleblog