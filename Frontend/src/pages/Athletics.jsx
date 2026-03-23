import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Athletics = () => {
  return (
    <div className="w-full overflow-hidden pt-20">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop"
          alt="athletics"
          className="absolute inset-0 w-full h-full object-cover"
        />

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

          <Link to="/contact">
            <button className="mt-6 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition">
              Join Now
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ⚡ PROGRAMS SECTION (UPDATED) */}
      <section className="py-20 bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50">
  <div className="max-w-6xl mx-auto px-4 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
      Athletics Programs
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Specialized training across track, field, and throwing events to
      develop speed, strength, and competitive excellence.
    </p>

    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">

      {[
        {
          title: "Track Events",
          desc: "Speed, endurance and race strategy training.",
          tags: ["100m", "200m", "400m", "800m", "1500m", "5km", "10km", "42km"],
        },
        {
          title: "Field Events",
          desc: "Technique-focused jumping events training.",
          tags: ["Long Jump", "High Jump", "Triple Jump"],
        },
        {
          title: "Throwing Events",
          desc: "Strength and form-based throwing techniques.",
          tags: ["Shot Put", "Javelin", "Discus"],
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-3xl shadow-xl backdrop-blur-md bg-white/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h3 className="text-lg font-semibold text-purple-700 mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">
            {item.desc}
          </p>

          {/* Animated Tags */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {item.tags.map((tag, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* 🧠 TRAINING SECTION (UPDATED TEXT) */}
      <section className="py-20 bg-gradient-to-tr from-purple-100 via-pink-50 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=1600&auto=format&fit=crop"
            alt="athletics training"
            className="rounded-3xl shadow-2xl w-full h-[380px] object-cover transform transition-transform duration-500 hover:scale-105"
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
              Build Speed & Endurance
            </h2>

            <p className="text-gray-700 mb-4">
              Our athletics training focuses on improving speed, stamina,
              and overall fitness through structured programs.
            </p>

            <p className="text-gray-700 mb-4">
              Athletes participate in competitions and events to gain
              real-world experience and confidence.
            </p>

            <p className="text-gray-700">
              All training sessions are conducted in a professional and
              tactical way, with strong focus on physical fitness and
              overall performance.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ⭐ NEW SECTION (IMPORTANT ADDITION) */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
            Personalized Athlete Development
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Every athlete is unique. If a student shows potential in a specific
            area, our coaches carefully observe and guide them towards the most
            suitable track or field event. This personalized approach helps
            students excel in their strongest discipline.
          </p>

        </div>
      </section>
      <section className="py-20 bg-gradient-to-tr from-purple-50 via-pink-50 to-yellow-50">
  <div className="max-w-6xl mx-auto px-4 text-center">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4"
    >
      Our Training Approach
    </motion.h2>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="text-gray-600 max-w-2xl mx-auto mb-12"
    >
      We follow a structured and professional training system that focuses on
      skill development, physical fitness, and identifying each athlete’s
      true potential.
    </motion.p>

    {/* Cards */}
    <div className="grid gap-8 grid-cols-1 md:grid-cols-4">

      {[
        {
          title: "Professional Training",
          points: [
            "Structured daily practice sessions",
            "Event-specific coaching plans",
            "Discipline & consistency focus",
          ],
        },
        {
          title: "Tactical Coaching",
          points: [
            "Game strategy & race planning",
            "Technique improvement drills",
            "Real competition simulation",
          ],
        },
        {
          title: "Physical Fitness",
          points: [
            "Strength & endurance building",
            "Flexibility & injury prevention",
            "Regular fitness assessment",
          ],
        },
        {
          title: "Talent Identification",
          points: [
            "Individual performance observation",
            "Guidance for suitable events",
            "Personal growth tracking",
          ],
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="relative bg-white/30 backdrop-blur-md p-6 rounded-3xl shadow-xl 
          hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] 
          transition-all duration-500 cursor-pointer overflow-hidden"
          
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-yellow-200/40"></div>

          {/* Content */}
          <div className="relative z-10 text-left">

            {/* Title */}
            <h3 className="text-lg font-semibold text-purple-700 mb-4">
              {item.title}
            </h3>

            {/* Points */}
            <ul className="space-y-2">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="text-gray-700 text-sm flex items-start gap-2"
                >
                  <span className="text-purple-500 mt-1">✔</span>
                  {point}
                </li>
              ))}
            </ul>

          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>

    </div>
  );
};

export default memo(Athletics);