import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cricket = () => {
  return (
    <div className="w-full overflow-hidden pt-20">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1600&auto=format&fit=crop"
          alt="cricket"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-pink-500/70 to-yellow-400/60" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Cricket Coaching
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-md">
            Train with professionals and elevate your game
          </p>
          <Link to="/contact">
          <button className="mt-6 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition">
            Join Now
          </button>
          </Link>
        </motion.div>
      </section>

      {/* 🧠 ABOUT TRAINING */}
      <section className="py-20 bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1600&auto=format&fit=crop"
            alt="training"
            className="rounded-3xl shadow-2xl w-full h-[380px] object-cover"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
              Professional Cricket Training
            </h2>

            <p className="text-gray-700 mb-4">
              Our cricket coaching program is designed for beginners to
              advanced players. We focus on batting, bowling, fielding,
              and match strategies with expert guidance.
            </p>

            <p className="text-gray-700">
              With modern equipment and experienced coaches, we ensure
              every player reaches their full potential.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 🏟️ FACILITIES */}
      <section className="py-20 bg-gradient-to-tr from-purple-100 via-pink-50 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-10">
            Our Facilities
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">

            {[
              "Professional Cricket Nets",
              "Experienced Coaches",
              "Fitness Training",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/30 backdrop-blur-md rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg text-purple-700">
                  {item}
                </h3>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default memo(Cricket);