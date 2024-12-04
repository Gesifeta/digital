import React from "react";
import Link from "next/link";


import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import FAQ from "../faq/page";
import "./home.css";
export function Home() {
  return (
    //home page
    <main className="home">
      <div className="home__header">
      <h1 style={{ textAlign: "center",justifyItems:"center", fontSize: "64px",lineHeight:1.2 }}>
        Master Web Development
        <span
          style={{ color: "var(--primary-color)", fontWeight: "bolder",display:"block" }}
        >
          With Expert Guidance.
        </span>
      </h1>
      <p style={{ justifySelf: "center", fontSize: "24px",maxWidth:"60%" }}>
      Get hands-on experience with real projects and advance your career. Learn the latest web development technologies
      </p>
      <Link href="/courses">
        <button className="btn-primary btn-cta">Get Started</button>
      </Link>
      </div>
      <Hero />
      <Features />
      <FAQ/>
    </main>
  );
}

export default Home;
