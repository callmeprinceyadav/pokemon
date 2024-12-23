import React, { useState, useEffect } from "react";
import PokedexGrid from "../components/PokedexGrid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

const Home: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {/* <div className="mx-auto p-2 relative"> */}
        <PokedexGrid />
        <button
          onClick={scrollTop}
          className={`fixed bottom-10 right-10 z-50 bg-pink-500 text-white p-3 rounded-full shadow-2xl transition-opacity duration-300 ${
            showScroll ? "opacity-100" : "opacity-0"
          }`}
          style={{ display: showScroll ? "inline" : "none" }}
        >
          <FaArrowUp size={24} />
        </button>
      {/* </div> */}
    </QueryClientProvider>
  );
};

export default Home;
