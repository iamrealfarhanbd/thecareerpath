import Breadcumb from '../components/Singlecoursepage/Breadcumb'
import Description from '../components/Singlecoursepage/Description'
import Recommendedcourse from '../components/Singlecoursepage/Recommendedcourse'
import Partner from '../components/Homepage/Partner'
import Cta from '../components/Homepage/Cta'



const singlecourse = () => {

    return(
        <>
          <Breadcumb />
          <Description />
          <Recommendedcourse />
          <Partner />
          <Cta />
        </>
    )
}

export default singlecourse