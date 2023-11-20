"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>laurenz</p>
          <p>julian</p>
          <span>freelancer</span>
        </div>
        <div className={styles.image}>
          <img src="/images/intro.png" alt="intro pic" />
        </div>
      </div>
    </div>
  );
}
