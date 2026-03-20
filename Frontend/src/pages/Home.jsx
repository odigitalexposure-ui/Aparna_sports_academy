import AboutSection from "../components/home/AboutSection";
import EventsSection from "../components/home/EventsSection";
import Hero from "../components/home/Hero";
import SportsOverview from "../components/home/SportsOverview";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
    <div className="overflow-hidden overflow-hidden pt-20">
      <Hero />
      <SportsOverview/>
      <AboutSection/>
      <EventsSection/>
      <Testimonials/>
      </div>
    </>
  );
};

export default Home;