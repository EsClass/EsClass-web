import React from 'react'
import Frist_section from './First_section/Frist_section'
import Secound_section from './Second_section/Secound_section'
import Footer from '../Footer/Footer'
import GetStarted from '../GetStarted/GetStarted'
import firstImgae from '../../../public/images/landingpage_image/rafiki.png'




const Hero = () => {
  return (
    <div style={{
      padding: "15px 5vw"

    }}>
      <Frist_section
      title="Empower Learning with Expert-Curated Resources"
      subtitle="Access high-quality learning materials, assessments, and more from experienced tutors in your institution."
      buttonText="Get Started For Free"
      imageSrc= "/images/landingpage_image/rafiki.png"
      altText="Empower Learning"
      buttonLink="/get-started"
      />

      <Secound_section
       title="Share Your Knowledge with the World"
       subtitle="Create and monetize your courses, resources, and tests with ease."
       buttonText="Become a Tutor"
       imageSrc="/images/landingpage_image/pana.png"
       altText="Share Your Knowledge"
       buttonLink="/become-a-tutor"
      
      />
     
    


    </div>
  )
}

export default Hero
