"use client";
import React, { useEffect, useState } from "react";
import {
  Clock,
  BookOpen,
  Award,
  Milestone,
  MonitorCheck,
  MessageSquare,
} from "lucide-react";

import styles from "./features.module.css";
import CourseCard from "../card/CourseCard";
import { courses } from "@/app/data/data";
import Subscription from "../subscription/page";

const Features = () => {
  const features = [
    {
      title: "Comprehensive Curriculum",
      description:
        "Our courses cover a wide range of topics, from basic HTML and CSS to advanced JavaScript and React.js. We provide hands-on exercises and projects to reinforce your learning.",
      icon: <BookOpen />,
    },
    {
      title: "Expert Instructors",
      description:
        "Our instructors are industry experts with years of experience in web development. They provide personalized guidance and support to help you succeed.",
      icon: <MonitorCheck />,
    },
    {
      title: "Flexible Learning",
      description:
        "Our courses are designed to fit into your busy schedule. You can learn at your own pace and on your own schedule.",
      icon: <Clock />,
    },
    {
      title: "Certification",
      description:
        "Upon completing a course, you will receive a certificate of completion. This helps you demonstrate your knowledge and skills to potential employers or clients.",
      icon: <Award />,
    },
    {
      title: "Practical Projects",
      description:
        "After completing a course, you will have the opportunity to work on real-world projects. This helps you apply your knowledge in a practical setting.",
      icon: <Milestone />,
    },
    {
      title: "Interactive Learning",
      description:
        "Our courses are interactive. You will have the opportunity to ask questions and get feedback from the instructor.",
      icon: <MessageSquare />,
    },
  ];
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [cloud, setCloud] = useState([]);
  const [ux, setUx] = useState([]);

  useEffect(() => {
    setFrontend(courses.filter((course) => course.category === "frontend"));
    setBackend(courses.filter((course) => course.category === "backend"));
    setCloud(courses.filter((course) => course.category === "cloud"));
    setUx(courses.filter((course) => course.category === "ux"));
  }, []);
  return (
    <section className={styles.features}>
      <h1 className="title-main"> Programs</h1>
      <div className={styles.feature__programs}>
        {[
          {
            name: "Frontend Development",
            description:
              "JavaScript is a high-level, interpreted programming language that is widely used for creating interactive web pages and web applications. It is a part of the larger category of web languages.",
            price: 12000,
            courses: 5,
            discount: 0,
            image: "/ux.jpg",
          },
          {
            name: "Backend Development",
            description:
              "Full Stack Development refers to the process of creating both the front-end and back-end of a web application. It involves the use of various technologies and tools to build the entire application stack, including the user interface (front-end), server-side logic (back-end), and database management. Full Stack Developers are responsible for designing, developing, and maintaining the entire application, from the user interface to the database.",
            price: 10000,
            courses: 6,
            discount: 0,
            image: "/backend2.jpg",
          },
          {
            name: "Amazon Web Service",
            description:
              "Amazon Web Services (AWS) is a comprehensive and widely-used cloud computing platform offered by Amazon. It provides a wide range of on-demand cloud computing services, including computing power, storage, databases, machine learning, analytics, and more. AWS offers a pay-as-you-go pricing model, allowing users to scale resources as needed, making it cost-effective for businesses and individuals of all sizes.",
            price: 20000,
            courses: 5,
            discount: 0,
            image: "/awscolor.svg",
          },
          {
            name: "DevOps",
            description:
              "Docker is a platform for developing, shipping, and running applications in containers. It provides an efficient, consistent, and portable way to package and deploy applications.",
            price: 5000,
            courses: 2,
            discount: 1,
            image: "/docker.svg",
          },
        ].map((program, index) => (
          <CourseCard
            key={`${program.name}-${index}`}
            image={program.image}
            title={program.name}
            description={program.description}
            price={program.price}
            discount={program.discount}
            numberOfCourses={program.courses}
          />
        ))}
      </div>
      <Subscription/>
      <h1 className="title-main">Why Learning with us.</h1>
      <div className={styles.feature}>
        {features.map((feature, index) => (
          <div className={styles.feature_item} key={index}>
            <div
              className={styles.feature_icon}
              style={{ backgroundColor: feature.color }}
            >
              {feature.icon}
            </div>
            <div className={styles.feature_content}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
