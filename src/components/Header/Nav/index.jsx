"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Image from "./Image";

const links = [
  {
    title: "Home",
    href: "/",
    src: "home.png",
  },

  {
    title: "Works",
    href: "/works",
    src: "works.png",
  },

  {
    title: "About",
    href: "/about",
    src: "about.jpg",
  },

  {
    title: "logbooks",
    href: "/logbooks",
    src: "logbooks.png",
  },

  {
    title: "Contact",
    href: "/contact",
    src: "contact.png",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </div>
        <Image
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  );
}
