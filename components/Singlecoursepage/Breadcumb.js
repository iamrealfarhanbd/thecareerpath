

const Breadcumb = () => {

    return (
    <header className="header-page">
        <div className="container">
            <div className="header-page-content desk-pad-right-30">
                <div className="course-badge">-30%</div>
                <h1>Mastering On Data Modeling</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Mastering...</li>
                    </ol>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Breadcumb