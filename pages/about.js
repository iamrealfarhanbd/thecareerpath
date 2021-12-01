import Breadcumb from '../components/Aboutpage/Breadcumb'
import About from '../components/Aboutpage/About'
import Counter from '../components/Aboutpage/Counter'
import Helps from '../components/Homepage/Helps'
import Review from '../components/Homepage/Review'
import Partner from '../components/Homepage/Partner'
import Cta from '../components/Homepage/Cta'


const about = () => {

    return(
        <>
           <Breadcumb />
           <About />
           <Counter />
           <Helps />
           <Review />
           <Partner />
           <Cta />
        </>
    )
}

export default about