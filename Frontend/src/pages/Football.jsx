import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Football = () => {
  return (
    <div className="w-full overflow-hidden pt-20">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop"
          alt="football"
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
            Football Training
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-md">
            Develop skills, teamwork, and game strategy
          </p>
          <Link to="/contact">
          <button className="mt-6 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition">
            Join Now
          </button>
          </Link>
        </motion.div>
      </section>

      {/* ⚡ FEATURES SECTION */}
      <section className="py-20 bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-12">
            Why Choose Our Football Program
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              "Professional Coaching",
              "Match Practice Sessions",
              "Team Building & Strategy",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/30 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-purple-700">{item}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 🧠 TRAINING SECTION */}
      <section className="py-20 bg-gradient-to-tr from-purple-100 via-pink-50 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
              Advanced Football Training
            </h2>

            <p className="text-gray-700 mb-4">
              Our football program focuses on technical skills, tactical
              awareness, and physical conditioning to help players excel.
            </p>

            <p className="text-gray-700">
              Regular matches and drills ensure real-game experience and
              performance improvement.
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop"
            alt="football training"
            className="rounded-3xl shadow-2xl w-full h-[380px] object-cover transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

        </div>
      </section>

    </div>
  );
};

export default memo(Football);