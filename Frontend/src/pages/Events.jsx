import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const Events = () => {

  const upcomingEvents = useMemo(() => [
    {
      title: "District Cricket Tournament",
      date: "April 2026",
      img: "/Hero/3.jpg",
    },
    {
      title: "Football Championship",
      date: "May 2026",
      img: "/Hero/1.jpg",
    },
    {
      title: "Athletics Meet",
      date: "June 2026",
      img: "/Hero/4.jpg",
    },
  ], []);

  const pastEvents = useMemo(() => [
    {
      title: "Winter Cricket Camp",
      date: "Dec 2025",
      img: "/gallery/g3.jpeg",
    },
    {
      title: "School Football League",
      date: "Nov 2025",
      img: "/Hero/1.jpg",
    },
  ], []);

  return (
    <div className="w-full overflow-hidden pt-25">

      {/* 🔥 HERO */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a8a] via-[#4f46e5] to-[#db2777] text-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          Events
        </h1>
        <p className="text-gray-200 text-lg">Explore our upcoming and past sports events</p>
      </section>

      {/* 🚀 UPCOMING EVENTS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Upcoming Events
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl bg-gradient-to-br from-white via-gray-50 to-white transform transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {event.date}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* 🏁 PAST EVENTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Past Events
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-gradient-to-br from-white via-gray-50 to-white transform transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {event.date}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default memo(Events);