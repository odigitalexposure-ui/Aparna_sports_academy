import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import MainLayout from "../layouts/MainLayout";

// Pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Events = lazy(() => import("../pages/Events"));
const Cricket = lazy(() => import("../pages/Cricket"));
const Football = lazy(() => import("../pages/Football"));
const Athletics = lazy(() => import("../pages/Athletics"));

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      
      <motion.div
        className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-t-transparent border-indigo-500"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-lg opacity-70"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loader />}><MainLayout /></Suspense>,
    children: [
      { index: true, element: <Suspense fallback={<Loader />}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={<Loader />}><About /></Suspense> },
      { path: "contact", element: <Suspense fallback={<Loader />}><Contact /></Suspense> },
      { path: "events", element: <Suspense fallback={<Loader />}><Events /></Suspense> },
      { path: "cricket", element: <Suspense fallback={<Loader />}><Cricket /></Suspense> },
      { path: "football", element: <Suspense fallback={<Loader />}><Football /></Suspense> },
      { path: "athletics", element: <Suspense fallback={<Loader />}><Athletics /></Suspense> },
    ],
  },
]);

export default router;