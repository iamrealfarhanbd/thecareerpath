import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/Homepage/Banner'
import Service from '../components/Homepage/Service'
import About from '../components/Homepage/About'
import Course from '../components/Homepage/Course'
import Helps from '../components/Homepage/Helps'
import Video from '../components/Homepage/Video'
import Review from '../components/Homepage/Review'
import Upcoming from '../components/Homepage/Upcoming'
import Partner from '../components/Homepage/Partner'
import Cta from '../components/Homepage/Cta'



const homepage = () => {

  return(
    <div>
        <Banner />
        <Service />
        <About />
        <Course />
        <Helps />
        <Video />
        <Review />
        <Upcoming />
        <Partner />
        <Cta />
    </div>
  ) 
}

export default homepage