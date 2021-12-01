import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {

    return (
        <>
            <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>React Lms</title>
            <link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/bootstrap-reboot.min.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/animate.min.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/swiper-bundle.min.css"  type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/meanmenu.min.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/magnific-popup.min.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/main.min.css" type="text/css" media="all" />
            <link rel='stylesheet' href='assets/css/boxicons.min.css' type="text/css" media="all" />
            <link rel='stylesheet' href='assets/css/flaticon.css' type="text/css" media="all" />
            <link rel='stylesheet' href='assets/css/settings.css' type="text/css" media="all" />
            <link rel='stylesheet' href='assets/css/layers.css' type="text/css" media="all" />
            <link rel='stylesheet' href='assets/css/navigation.css' type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/style.css" type="text/css" media="all" />
            <link rel="stylesheet" href="assets/css/responsive.css" type="text/css" media="all" />
            <script src="assets/js/jquery-3.5.1.min.js"></script>
            <script src="assets/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/jquery.magnific-popup.min.js"></script>
            <script src="assets/js/swiper-bundle.min.js"></script>
            <script src="assets/js/jquery.waypoints.min.js"></script>
            <script src="assets/js/jquery.counterup.min.js"></script>
            <script src="assets/js/moment.js"></script>
            <script src="assets/js/main.min.js"></script>
            <script src="assets/js/jquery-ui.js"></script>
            <script src="assets/js/isotope.pkgd.min.js"></script>
            <script src="assets/js/jquery.themepunch.revolution.min.js"></script>
            <script src="assets/js/jquery.themepunch.tools.min.js"></script>
            <script src="assets/js/extensions/revolution.extension.actions.min.js"></script>
            <script src="assets/js/extensions/revolution.extension.carousel.min.js"></script>
            <script src="assets/js/extensions/revolution.extension.kenburn.min.js"></script>
            <script src="assets/js/extensions/revolution.extension.layeranimation.min.js"></script>
            <script src="assets/js/extensions/revolution.extension.migration.min.js"></script>
            <script src="assets/js/extensions/revolution.extension.navigation.min.js"></script>
            <script src="assets/js/extensions/revolution.extension.parallax.min.js"></script>
            <script src="assets/js/extensions/revolution.extension.slideanims.min.js"></script>
            <script src="assets/js/extensions/revolution.extension.video.min.js"></script>
            <script src="assets/js/jquery.ajaxchimp.min.js"></script>
            <script src="assets/js/form-validator.min.js"></script>
            <script src="assets/js/contact-form-script.js"></script>
            <script src="assets/js/jquery.meanmenu.min.js"></script>
            <script src="assets/js/script.js"></script>
            </Head>
            <Navbar />
            {children}
            <Footer/>
        </>
    )
}

export default Layout