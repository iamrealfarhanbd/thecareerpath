import Courses from '../components/Coursespage/Courses'
import Breadcumb from '../components/Coursespage/Breadcumb'
import Partner from '../components/Homepage/Partner'
import Cta from '../components/Homepage/Cta'



const courses = () => {

    return(
        <>  
            <Breadcumb />
            <Courses />
            <Partner />
            <Cta />
        </>
    )
}



export default courses