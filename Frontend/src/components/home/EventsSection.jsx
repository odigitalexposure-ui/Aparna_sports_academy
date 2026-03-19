import { useMemo, memo } from "react";
import { motion } from "framer-motion";

const EventsSection = () => {
  const events = useMemo(
    () => [
      {
        id: 1,
        title: "Cricket Summer Camp",
        date: "April 10, 2026",
        desc: "Join our intensive cricket training camp with expert coaches.",
        image:
          "/Hero/3.jpg",
      },
      {
        id: 2,
        title: "Football League Trials",
        date: "May 5, 2026",
        desc: "Show your skills and get selected for our football team.",
        image:
          "/Hero/2.jpg",
      },
      {
        id: 3,
        title: "Athletics Championship",
        date: "June 20, 2026",
        desc: "Compete in running, jumping and field events.",
        image:
          "/Hero/4.jpg",
      },
    ],
    []
  );

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50">

      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 drop-shadow-lg">
          Upcoming Events
        </h2>
        <p className="text-gray-700 mt-2 text-lg">
          Stay updated with our latest programs and competitions
        </p>
      </div>

      {/* Event Cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer bg-white/70 backdrop-blur-md border border-white/30"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-pink-400/20 to-yellow-200/10 rounded-t-3xl pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm font-semibold mb-1 text-purple-600">
                {event.date}
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition">
                {event.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {event.desc}
              </p>

              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition transform">
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(EventsSection);