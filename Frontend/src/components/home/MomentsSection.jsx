import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const previewImages = [
  "/gallery/g1.jpeg",
  "/gallery/g2.jpeg",
  "/gallery/g3.jpeg",
  "/gallery/g4.jpeg",
];

const MomentsSection = () => {
  return (
    <section className="bg-[#0f172a] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Life at{" "}
            <span className="text-yellow-400">Our Classes</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            From intense training sessions to victorious moments on the field,
explore the journey that builds champions and creates unforgettable memories.
          </p>

          <Link to="/gallery">
            <button className="mt-8 px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
              View Full Gallery →
            </button>
          </Link>
        </motion.div>

        {/* RIGHT IMAGE GRID */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {previewImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img
                src={img}
                alt="moments"
                className="w-full h-[140px] md:h-[180px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MomentsSection;