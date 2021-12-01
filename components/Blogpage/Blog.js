import Blogsearch from '../Blogsearch'
import Recentpost from '../Recentpost'
import Blogtag from '../Blogtag'


const Blog = () => {

    return (
        <>
        <div className="blog-section pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 pb-30">
                        <div className="blog-list-content desk-pad-right-30">
                            <div className="blog-list-card mb-30">
                                <div className="blog-list-card-thumb">
                                    <a href="single-blog.html"><img src="assets/images/blog-list-1.jpg" alt="blog" /></a>
                                </div>
                                <div className="blog-list-card-content bg-off-white">
                                    <ul className="course-entry-list">
                                        <li><i className="flaticon-open-book"></i> Study Pass</li>
                                        <li><i className="flaticon-man"></i> Admin</li>
                                    </ul>
                                    <h3><a href="single-blog.html">USA Coordinates & Participates in a Variety of Fairs</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div className="blog-list-card mb-30">
                                <div className="blog-list-card-thumb">
                                    <a href="single-blog.html"><img src="assets/images/blog-list-2.jpg" alt="blog" /></a>
                                </div>
                                <div className="blog-list-card-content bg-off-white">
                                    <ul className="course-entry-list">
                                        <li><i className="flaticon-open-book"></i> Annual</li>
                                        <li><i className="flaticon-man"></i> Admin</li>
                                    </ul>
                                    <h3><a href="single-blog.html">An Annual Survey Produced by the International Education</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div className="blog-list-card mb-30">
                                <div className="blog-list-card-thumb">
                                    <a href="single-blog.html"><img src="assets/images/blog-list-3.jpg" alt="blog" /></a>
                                </div>
                                <div className="blog-list-card-content bg-off-white">
                                    <ul className="course-entry-list">
                                        <li><i className="flaticon-open-book"></i> Orientation</li>
                                        <li><i className="flaticon-man"></i> Admin</li>
                                    </ul>
                                    <h3><a href="single-blog.html">Absolute Beginners Cooking Course for the Complete Novice</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <nav aria-label="Page navigation example" className="page-pagination">
                                <ul className="pagination">
                                  <li className="page-item disabled"><a className="page-link" href="#"><i className="flaticon-left-arrow-1"></i></a></li>
                                  <li className="page-item active">
                                    <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                                  </li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                                  <li className="page-item"><a className="page-link" href="#"><i className="flaticon-right-arrow"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 pb-30"> 
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

export default Blog