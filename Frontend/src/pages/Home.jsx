import AboutSection from "../components/home/AboutSection";
import EventsSection from "../components/home/EventsSection";
import Hero from "../components/home/Hero";
import MomentsSection from "../components/home/MomentsSection";
import SportsBanner from "../components/home/SportsBanner";
import SportsOverview from "../components/home/SportsOverview";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
    <div className="overflow-hidden overflow-hidden pt-20">
      <Hero />
      <SportsBanner/>
      <SportsOverview/>
      <AboutSection/>
      <EventsSection/>
      <MomentsSection/>
      <Testimonials/>
      </div>
    </>
  );
};

export default Home;