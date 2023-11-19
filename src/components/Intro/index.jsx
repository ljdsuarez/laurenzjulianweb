"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function Index() {
  return (
    <div class={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>laurenz</p>
          <p>julian</p>
          <span>freelancer</span>
        </div>
        <Image
          src={`/images/blobPic.svg`}
          alt="intro_pic"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
