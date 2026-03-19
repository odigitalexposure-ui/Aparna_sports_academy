import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/scroll/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "../components/scroll/PageWrapper";
import WhatsAppButton from "../components/Whatsapp/WhatsAppButton";


const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop/>      
      <Navbar />
      {/* <Outlet /> */}
      {/* 🔥 Animated Page Content */}
      <main className="flex-grow w-full max-w-full mx-auto">
        <AnimatePresence mode="wait">
          <PageWrapper key={location.pathname}>
            <Outlet />
          </PageWrapper>
        </AnimatePresence>
      </main>
      <WhatsAppButton/>
      <Footer />
    </>
  );
};

export default MainLayout;