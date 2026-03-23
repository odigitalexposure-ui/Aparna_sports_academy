import { useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SportsOverview = () => {
  const navigate = useNavigate();

  const sports = useMemo(
    () => [
      {
        name: "Cricket",
        path: "/cricket",
        image:
          "/Hero/3.jpg",
      },
      {
        name: "Football",
        path: "/football",
        image:
          "/Hero/2.jpg",
      },
      {
        name: "Athletics",
        path: "/athletics",
        image:
          "/Hero/4.jpg",
      },
    ],
    []
  );

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 via-white to-purple-50">

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary drop-shadow-lg">
          Our Sports Programs
        </h2>
        <p className="text-gray-600 mt-2">
          Professional training across multiple sports disciplines
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {sports.map((sport, index) => (
          <motion.div
            key={sport.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => navigate(sport.path)}
            className="
              cursor-pointer rounded-2xl overflow-hidden shadow-2xl
              relative group transform transition-all duration-500
              hover:scale-105 hover:shadow-4xl
            "
          >
            {/* Image */}
            <img
              src={sport.image}
              alt={sport.name}
              loading="lazy"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 via-purple-500/50 to-transparent opacity-90 group-hover:opacity-100 transition duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
              <h3 className="text-2xl font-bold">{sport.name}</h3>
              <p className="text-sm">Click to explore</p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default memo(SportsOverview);