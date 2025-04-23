import HeroSection from "../components/Home/HeroSection.jsx";
import TweetSection from "../components/Home/TweetSection.jsx";
import "./Home.css";
import CohortsSection from "../components/Home/CohortSection.jsx";
import StudentAchievement from "../components/Home/StudentAchievement.jsx";
import TestimonialsSection from "../components/Home/TestimonialSection.jsx";
import UdemySection from "../components/Home/UdemySection.jsx";
import CohortBenefits from "../components/Home/BenefitSection.jsx";
import WhyChaiCode from "../components/Home/WhyChaiCode.jsx";

const Home = () => {
  return (
    <> 
      <HeroSection/>
      <TweetSection/>
      <StudentAchievement/>
      <CohortsSection/>
      <TestimonialsSection/>
      <UdemySection/>
      <CohortBenefits/>
      <WhyChaiCode/>

      
      
    </>
  )
}

export default Home