import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
// /Hero/1.jpg
// https://images.unsplash.com/photo-1593766827228-8737b4534aa6?q=80&w=1600&auto=format&fit=crop
// https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop
// https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop
const slides = [
  {
    id: 1,
    title: "Train Like a Champion",
    subtitle: "Cricket Coaching Excellence",
    image:
      "/Hero/3.jpg",
  },
  {
    id: 2,
    title: "Feel the Game",
    subtitle: "Professional Football Training",
    image:
      "/Hero/1.jpg",
  },
  {
    id: 3,
    title: "Run Beyond Limits",
    subtitle: "Athletics & Fitness Programs",
    image:
      "/Hero/4.jpg",
  },
  {
  id: 4,
  title: "Chase Every Goal",
  subtitle: "Elite Football Training for Champions",
  image: "/Hero/2.jpg",
}
  
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // auto slide
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">

      {/* Background Slider */}
      <AnimatePresence>
        <motion.img
          key={slides[index].id}
          src={slides[index].image}
          alt="hero"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6a00]/70 via-[#ff3d00]/60 to-[#ff0080]/60 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
              {slides[index].title}
            </h1>

            <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
              {slides[index].subtitle}
            </p>

            <button className="
              relative overflow-hidden px-8 py-3 rounded-full font-semibold
              bg-gradient-to-r from-[#1e3a8a] via-[#4f46e5] to-[#db2777]
              shadow-lg shadow-purple-500/50
              hover:scale-105 transform transition-all duration-300
              text-white
            ">
              Join Now
            </button>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default memo(Hero);