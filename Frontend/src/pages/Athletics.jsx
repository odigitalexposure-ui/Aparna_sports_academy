import { memo } from "react";
import { motion } from "framer-motion";

const Athletics = () => {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop"
          alt="athletics"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-pink-500/70 to-yellow-400/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Athletics Training
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-md">
            Speed, strength, and endurance for champions
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition">
            Join Now
          </button>
        </motion.div>
      </section>

      {/* ⚡ PROGRAMS SECTION */}
      <section className="py-20 bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-12">
            Athletics Programs
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Running Events",
                desc: "Sprint, middle distance, and long-distance training.",
              },
              {
                title: "Jumping Events",
                desc: "Long jump, high jump, and technique improvement.",
              },
              {
                title: "Strength Training",
                desc: "Build endurance, agility, and power.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-3xl shadow-xl backdrop-blur-md bg-white/30 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧠 TRAINING SECTION */}
      <section className="py-20 bg-gradient-to-tr from-purple-100 via-pink-50 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=1600&auto=format&fit=crop"
            alt="athletics training"
            className="rounded-3xl shadow-2xl w-full h-[380px] object-cover transform transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
              Build Speed & Endurance
            </h2>

            <p className="text-gray-700 mb-4">
              Our athletics training focuses on improving speed, stamina,
              and overall fitness through structured programs.
            </p>

            <p className="text-gray-700">
              Athletes participate in competitions and events to gain
              real-world experience and confidence.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default memo(Athletics);