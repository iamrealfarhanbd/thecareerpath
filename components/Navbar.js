

const Navbar = () => {

    return (

        <div className="navbar-area">
        <div className="mobile-nav">
            <a href="index.html" className="mobile-brand">
                <img src="assets/images/logo.png" alt="logo" className="logo" />
            </a>
            <div className="navbar-option">
                <div className="navbar-option-item navbar-option-dots dropdown">
                    <button type="button" id="dot" aria-haspopup="true" aria-expanded="false">
                        <i className="flaticon-menu"></i>
                    </button>
                    <ul className="dropdown-menu navbar-dots-dropdown">
                        <li className="dropdown-item">
                            <div className="navbar-option-item navbar-option-language dropdown language-option"> 
                                <button className="dropdown-toggle" type="button" id="language3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="flaticon-worldwide"></i>
                                    <span className="lang-name"></span>  
                                </button>
                                <div className="dropdown-menu language-dropdown-menu" aria-labelledby="language3">  
                                    <a className="dropdown-item" href="#">
                                        <img src="assets/images/usa.png" alt="flag" />
                                        English
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <img src="assets/images/germany.png" alt="flag" />
                                        Deutsch
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <img src="assets/images/china.png" alt="flag" />
                                        简体中文
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <img src="assets/images/uae.png" alt="flag" />
                                        العربيّة
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="navbar-option-item navbar-option-cart">
                                <div className="navbar-option-item navbar-option-search dropdown">
                                    <button type="button" id="search1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="flaticon-search"></i>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="search1">
                                        <form>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="flaticon-search"></i>
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Search result" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="navbar-option-item navbar-option-cart">
                                <a href="cart.html"><i className="flaticon-shopping-cart"></i>
                                    <span className="option-badge option-badge-main">2</span>
                                </a>
                            </div>
                        </li>
                        <li className="dropdown-item">
                            <div className="navbar-option-item navbar-option-wishlist">
                                <a href="wishlist.html"><i className="flaticon-heart"></i>
                                    <span className="option-badge option-badge-main">1</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar-option-item navbar-option-language dropdown mobile-hide language-option"> 
                    <button className="dropdown-toggle" type="button" id="language1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="flaticon-worldwide"></i>
                        <span className="lang-name"></span>  
                    </button>
                    <div className="dropdown-menu language-dropdown-menu" aria-labelledby="language1">  
                        <a className="dropdown-item" href="#">
                            <img src="assets/images/usa.png" alt="flag" />
                            English
                        </a>
                        <a className="dropdown-item" href="#">
                            <img src="assets/images/germany.png" alt="flag" />
                            Deutsch
                        </a>
                        <a className="dropdown-item" href="#">
                            <img src="assets/images/china.png" alt="flag" />
                            简体中文
                        </a>
                        <a className="dropdown-item" href="#">
                            <img src="assets/images/uae.png" alt="flag" />
                            العربيّة
                        </a>
                    </div>
                </div>
                <div className="navbar-option-item navbar-option-search dropdown mobile-hide">
                    <button type="button" id="search" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="flaticon-search"></i>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="search">
                        <form>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="flaticon-search"></i>
                                    </div>
                                </div>
                                <input type="text" className="form-control" placeholder="Search result" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="navbar-option-item navbar-option-cart mobile-hide">
                    <a href="cart.html"><i className="flaticon-shopping-cart"></i>
                        <span className="option-badge option-badge-main">2</span>
                    </a>
                </div>
                <div className="navbar-option-item navbar-option-wishlist mobile-hide">
                    <a href="wishlist.html"><i className="flaticon-heart"></i>
                        <span className="option-badge option-badge-main">1</span>
                    </a>
                </div>
                <div className="navbar-option-item navbar-option-account">
                    <a href="authentication.html"><i className="flaticon-user"></i></a>
                </div>
            </div>
        </div>
     
        <div className="main-nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/images/logo.png" alt="logo" className="logo" />
                    </a>
                    <div className="navbar-search">
                        <form>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="flaticon-search"></i>
                                    </div>
                                </div>
                                <input type="text" className="form-control" placeholder="Search result" />
                            </div>
                        </form>
                    </div>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle active">HOME</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item  nav-item-1">
                                        <a href="index.html" className="nav-link active">Home Demo 1</a>
                                    </li>
                                    <li className="nav-item  nav-item-2">
                                        <a href="index-2.html" className="nav-link">Home Demo 2</a>
                                    </li>
                                    <li className="nav-item  nav-item-3">
                                        <a href="index-3.html" className="nav-link">Home Demo 3</a>
                                    </li>
                                    <li className="nav-item  nav-item-4">
                                        <a href="index-4.html" className="nav-link">Home Demo 4</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">PAGES</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="gallery.html" className="nav-link">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="start-here.html" className="nav-link">Start Here</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="about-us.html" className="nav-link">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="about-me.html" className="nav-link">About Me</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="success-story.html" className="nav-link">Success Story</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="faqs.html" className="nav-link">FAQ's</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="membership-levels.html" className="nav-link">Membership Levels</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="calender.html" className="nav-link">Calender</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Career</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="career.html" className="nav-link">Career</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="career-details.html" className="nav-link">Career Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Events</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="events.html" className="nav-link">Events</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="event-details.html" className="nav-link">Event Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Meeting</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="zoom-meetings-and-webinars.html" className="nav-link">Zoom Meetings & Webinars </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="meeting-details.html" className="nav-link">Meeting Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Instructors</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="instructors.html" className="nav-link">Instructors</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="instructor-details.html" className="nav-link">Instructor Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Account</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="authentication.html" className="nav-link">Authentication</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="forget-password.html" className="nav-link">Forget Password</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="profile.html" className="nav-link">Profile</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="edit-account.html" className="nav-link">Edit Account</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Others</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="terms-service.html" className="nav-link">Terms of Service</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="search-page.html" className="nav-link">Search Page</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="404.html" className="nav-link">404 Error Page</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">COURSES</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="courses.html" className="nav-link">Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="single-course.html" className="nav-link">Single Course</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="become-a-teacher.html" className="nav-link">Become a Teacher</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="demo-account.html" className="nav-link">Demo Account</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">SHOP</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="products.html" className="nav-link">Products </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="single-product.html" className="nav-link">Single Product</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="cart.html" className="nav-link">Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="checkout.html" className="nav-link">Checkout</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="wishlist.html" className="nav-link">Wishlist</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="purchase-guide.html" className="nav-link">Purchase Guide</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">BLOG</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="blogs-grid-without-sidebar.html" className="nav-link">Blogs Grid </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="blogs-list-with-sidebar.html" className="nav-link">Blogs List </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="single-blog.html" className="nav-link">Single Blog</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link dropdown-toggle">CONTACT</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="contact-us.html" className="nav-link">Contact Us </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact-me.html" className="nav-link">Contact Me </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-option">
                        <div className="nnavbar-option-item navbar-option-language dropdown language-option"> 
                            <button className="dropdown-toggle" type="button" id="language2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="flaticon-worldwide"></i>
                                <span className="lang-name"></span>  
                            </button>
                            <div className="dropdown-menu language-dropdown-menu" aria-labelledby="language2">  
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/usa.png" alt="flag" />
                                    English
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/germany.png" alt="flag" />
                                    Deutsch
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/china.png" alt="flag" />
                                    简体中文
                                </a>
                                <a className="dropdown-item" href="#">
                                    <img src="assets/images/uae.png" alt="flag" />
                                    العربيّة
                                </a>
                            </div>
                        </div>
                        <div className="navbar-option-item navbar-option-cart">
                            <a href="cart.html"><i className="flaticon-shopping-cart"></i>
                                <span className="option-badge option-badge-main">2</span>
                            </a>
                        </div>
                        <div className="navbar-option-item navbar-option-wishlist">
                            <a href="wishlist.html"><i className="flaticon-heart"></i>
                                <span className="option-badge option-badge-main">1</span>
                            </a>
                        </div>
                        <div className="navbar-option-item navbar-option-authentication">
                            <a href="authentication.html" className="btn main-btn text-nowrap">LOGIN / SIGNUP</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
 
    )
}

export default Navbar