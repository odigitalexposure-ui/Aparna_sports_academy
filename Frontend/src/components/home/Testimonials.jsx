import { useMemo, memo } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "Rahul Sharma",
        role: "Cricket Student",
        review:
          "The coaching here is amazing. My skills improved a lot and I gained confidence in matches.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        name: "Amit Das",
        role: "Football Player",
        review:
          "Professional training and friendly environment. Highly recommended for football lovers.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        id: 3,
        name: "Sneha Roy",
        role: "Athletics Student",
        review:
          "Best place for athletics training. Coaches are very supportive and motivating.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
    []
  );

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50">

      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 drop-shadow-lg">
          What Our Students Say
        </h2>
        <p className="mt-2 text-gray-700 text-lg">
          Real experiences from our academy members
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl p-6 bg-gradient-to-tr from-purple-500/20 via-pink-400/20 to-yellow-300/20 backdrop-blur-md border border-white/30 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition transform cursor-pointer"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">{item.name}</h3>
                <p className="text-gray-700 text-sm">{item.role}</p>
              </div>
            </div>

            {/* Review */}
            <p className="text-gray-800 text-sm leading-relaxed">
              “{item.review}”
            </p>

            {/* Decorative gradient blur */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tr from-purple-300 via-pink-300 to-yellow-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(Testimonials);