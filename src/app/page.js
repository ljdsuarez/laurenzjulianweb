"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Works from "../components/Works";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Intro />
      <Works />
      <Footer />
    </main>
  );
}
