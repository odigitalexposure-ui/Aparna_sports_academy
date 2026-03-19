import { memo } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50">

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop"
            alt="academy"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Colorful overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/30 via-pink-400/20 to-yellow-200/10 pointer-events-none" />

          {/* Glass Card */}
          <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/30">
            <p className="text-purple-600 font-bold text-lg">10+ Years Experience</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 drop-shadow-lg mb-4">
            About Aparna Sports Academy
          </h2>

          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Aparna Sports Academy is dedicated to nurturing young talent in
            Cricket, Football, and Athletics. Our professional coaching,
            modern facilities, and competitive environment help students
            achieve excellence in sports and fitness.
          </p>

          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            We focus on discipline, teamwork, and performance to shape
            future champions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "500+", label: "Students", color: "text-pink-500" },
              { value: "20+", label: "Coaches", color: "text-purple-500" },
              { value: "15+", label: "Awards", color: "text-yellow-500" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className={`text-2xl font-bold ${stat.color} drop-shadow-md`}>
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default memo(AboutSection);