"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./hero.module.css";
const Hero = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Developent",
      description: "",
      price: 8700,
      link: "",
      image: "/frontend4.jpg",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "",
      price: 5380,
      link: "",
      image: "/backend1.jpg",
    },
    {
      id: 3,
      title: "Full Stack Developemnt",
      description: "",
      price: 11250,
      link: "",
      image: "/fullstack2.jpg",
    },
    {
      id: 4,
      title: "Cloud Computing",
      description: "",
      price: 20000,
      link: "",
      image: "/cloud1.jpg",
    },
  ];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter === services.length - 1 ? 0 : prevCounter + 1
      );
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className={styles.containerhero}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{services[counter].title}</h1>
          <span>
            <p>
              Streamline education with an all-in-one platform designed to
              enhance teaching, learning, and collaboration. Accessible,
              engaging, and built for success.
            </p>
            <button className="btn-primary btn-cta">Get Started</button>
          </span>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={services[counter].image}
            alt={services[counter].title}
            width={400}
            height={400}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
