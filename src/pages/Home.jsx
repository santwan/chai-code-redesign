import HeroSection from "../components/Home/Hero/HeroSection.jsx";
import TweetSection from "../components/Home/Tweet/TweetSection.jsx";
import "./Home.css";
import CohortsSection from "../components/Home/Cohorts/CohortSection.jsx";
import StudentAchievement from "../components/Home/StudentAchievement.jsx";
import TestimonialsSection from "../components/Home/Testimonials/TestimonialSection.jsx";
import UdemySection from "../components/Home/Udemy/UdemySection.jsx";
import CohortBenefits from "../components/Home/Benefits/BenefitSection.jsx";
import WhyChaiCode from "../components/Home/WhyChaiCode.jsx";
import DiscordSection from "../components/Home/DiscordSection.jsx";
import LaptopFrame from "../components/Home/LaptopFrame.jsx";
import FreeAPISection from "../components/Home/FreeApi/index.jsx";
import LearnOnTheGo from "../components/Home/LearnOnTheGo/index.jsx";
import TopicsCloud from "../components/Home/TopicsCloud/TopicsCloud.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LaptopFrame/>
      <TweetSection />
      <StudentAchievement />
      <CohortsSection />
      <TestimonialsSection />
      <UdemySection />
      <CohortBenefits />
      <WhyChaiCode />
      <TopicsCloud/>
      <DiscordSection/>
      <FreeAPISection/>
      <LearnOnTheGo/>
      
    
    </>
  );
};

export default Home;
