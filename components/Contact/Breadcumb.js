
const Breadcumb = () => {

    return (
    <header className="header-page">
        <div className="header-page-shape header-page-shape-middle">
            <img src="assets/images/shapes/shape-18.png" alt="shape" />
        </div>
        <div className="container">
            <div className="header-page-content">
                <h1>Contact Us</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Breadcumb