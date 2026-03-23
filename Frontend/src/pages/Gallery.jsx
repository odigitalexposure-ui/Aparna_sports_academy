import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
    { id: 1, src: "/gallery/g1.jpeg", title: "" },
    { id: 2, src: "/gallery/g2.jpeg", title: "" },
    { id: 3, src: "/gallery/g3.jpeg", title: "" },
    { id: 4, src: "/gallery/g4.jpeg", title: "" },
    { id: 5, src: "/gallery/g5.jpeg", title: "" },
    { id: 6, src: "/gallery/g6.jpeg", title: "" },
    { id: 7, src: "/gallery/g7.jpeg", title: "" },
    { id: 8, src: "/gallery/g8.jpeg", title: "" },
    { id: 9, src: "/gallery/g9.jpeg", title: "" },
    { id: 10, src: "/gallery/g10.jpeg", title: "" }
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Close on ESC key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <section className="bg-[#0f172a] py-20 px-4 md:px-10 mt-20">
            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Our <span className="text-yellow-400">Gallery</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Explore moments of learning, creativity, and success from our classes.
                </p>
            </div>

            {/* Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
                {images.map((img) => (
                    <motion.div
                        key={img.id}
                        variants={itemVariants}
                        onClick={() => setSelectedImage(img)}
                        className="group relative overflow-hidden rounded-2xl cursor-pointer"
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-[250px] object-cover transform group-hover:scale-110 transition duration-500"
                        />

                        {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold tracking-wide">
                {img.title}
              </h3>
            </div> */}
                    </motion.div>
                ))}
            </motion.div>

            {/* MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Image Container */}
                        <motion.div
                            className="relative max-w-5xl w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-yellow-400 transition"
                            >
                                ✕
                            </button>

                            {/* Full Image */}
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-[80vh] md:max-h-[85vh] object-cover md:object-contain rounded-xl"
                            />

                            {/* Title */}
                            {/* <p className="text-center text-white mt-4 text-lg">
                {selectedImage.title}
              </p> */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;