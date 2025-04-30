import HeroSection from "../components/Home/Hero/HeroSection.jsx";
import TweetSection from "../components/Home/Tweet/TweetSection.jsx";
import "./Home.css";
import CohortsSection from "../components/Home/Cohorts/CohortSection.jsx";
import StudentAchievement from "../components/Home/StudentAchievement.jsx";
import TestimonialsSection from "../components/Home/Testimonials/TestimonialSection.jsx";
import UdemySection from "../components/Home/Udemy/UdemySection.jsx";
import CohortBenefits from "../components/Home/Benefits/BenefitSection.jsx";
import WhyChaiCode from "../components/Home/WhyChaiCode.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TweetSection />
      <StudentAchievement />
      <CohortsSection />
      <TestimonialsSection />
      <UdemySection />
      <CohortBenefits />
      <WhyChaiCode />
    </>
  );
};

export default Home;
