import { memo } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full overflow-hidden pt-20">

      {/* 🔥 HERO */}
      <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          About Us
        </h1>
        <p className="text-lg md:text-2xl">Know more about Aparna Sports Academy</p>
      </section>

      {/* 🧠 STORY SECTION */}
      <section className="py-20 bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="/Hero/4.jpg"
            alt="academy"
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
              Our Story
            </h2>

            <p className="text-gray-700 mb-4">
              Aparna Sports Academy was founded with a vision to nurture
              young talent and create future champions in Cricket,
              Football, and Athletics.
            </p>

            <p className="text-gray-700">
              With years of experience and dedicated coaching, we focus
              on discipline, teamwork, and excellence in sports.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 🎯 MISSION & VISION */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          <motion.div
            className="bg-white/30 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:shadow-2xl transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-purple-700 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide high-quality training and create opportunities
              for young athletes to excel at national and international levels.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/30 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:shadow-2xl transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-purple-700 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become a leading sports academy known for excellence,
              discipline, and producing top-level athletes.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 📊 STATS */}
      <section className="py-20 bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50 text-center">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { value: "500+", label: "Students", color: "from-purple-400 to-pink-400" },
            { value: "20+", label: "Coaches", color: "from-pink-400 to-yellow-400" },
            { value: "10+", label: "Years Experience", color: "from-purple-400 to-yellow-400" },
            { value: "50+", label: "Events", color: "from-pink-400 to-purple-400" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                {item.value}
              </h3>
              <p className="text-gray-700 font-medium">{item.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 👨‍🏫 COACHES PREVIEW */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-10">
            Our Coaches
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">

            {[
              {
                name: "Coach Raj",
                role: "Cricket Coach",
                img: "/testimonial.png",
              },
              {
                name: "Coach Arjun",
                role: "Football Coach",
                img: "/testimonial.png",
              },
              {
                name: "Coach Neha",
                role: "Athletics Coach",
                img: "/testimonial.png",
              },
            ].map((coach, index) => (
              <motion.div
                key={index}
                className="bg-white/30 backdrop-blur-md rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 shadow-lg object-cover"
                />
                <h3 className="font-semibold text-lg text-gray-900">
                  {coach.name}
                </h3>
                <p className="text-gray-700 text-sm">
                  {coach.role}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default memo(About);