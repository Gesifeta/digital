"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CodeXml,
  Braces,
  GitBranch,
  GithubIcon,
  SquareCode,
  FileJson,
  Database,
  DatabaseZap,
  Cloud,
  Laptop,
  Monitor,
  FileCode,
  BracesIcon,
} from "lucide-react";

import styles from "./hero.module.css";
const Hero = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Developent",
      description: "",
      price: 8700,
      stacks: [
        {
          name: "HTML",
          icon: "/html.svg",
          description:
            "HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
        },
        {
          name: "CSS",
          icon: "css.svg",
          description:
            "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.",
        },
        {
          name: "JavaScript",
          icon: "javascript.svg",
          description:
            "JavaScript is a high-level, interpreted programming language that is widely used for creating interactive web pages and web applications. It is a part of the larger category of web languages.",
        },
        {
          name: "React.js",
          icon: "/react.svg",
          description:
            "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
        },
        {
          name: "Next.js",
          icon: "/nextjs.svg",
          description:
            "Next.js is an open-source web development framework created by XXXXXX enabling React-based web applications with server-side rendering and generating static websites.",
        },
        {
          name: "Tailwind CSS",
          icon: "/tailwind.svg",
          description:
            "Tailwind CSS is a utility-first CSS framework, enabling rapid UI development with a highly customizable and responsive design system.",
        },
        {
          name: "Bootstrap",
          icon: "/bootstrap.svg",
          description:
            "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first websites. It contains HTML, CSS, and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
        },
        {
          name: "Framer Motion",
          icon: "/framer.svg",
          description:
            "Framer Motion is a React-based animation library that provides a simple and powerful way to create animations in React applications.",
        },
      ],
      link: "",
      image: "/frontend4.jpg",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "",
      price: 5380,
      stacks: [
        {
          name: "Node.js",
          icon: "/nodejs.svg",
          description:
            "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        },
        {
          name: "Express.js",
          icon: "/expressjs.svg",
          description:
            "Express.js is a web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications.",
        },
        {
          name: "MongoDB",
          icon: "/mongodb.svg",
          description:
            "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        },
        {
          name: "MySQL",
          icon: "/mysql.svg",
          description:
            "MySQL is an open-source relational database management system (RDBMS). It is a popular choice for web applications and other database-intensive applications.",
        },
        {
          name: "PostgreSQL",
          icon: "/postgress.svg",
          description:
            "PostgreSQL is a powerful, open-source object-relational database system known for its extensibility and SQL compliance. It is widely used for web applications and other database-intensive applications.",
        },
        {
          name: "GraphQL",
          icon: "/graphql.svg",
          description:
            "GraphQL is a query language for APIs and a runtime for executing those queries with existing data. It is a complete solution for API development, allowing clients to request exactly the data they need and nothing more.",
        },
      ],
      link: "",
      image: "/backend1.jpg",
    },
    {
      id: 3,
      title: "Full Stack Developemnt",
      description:
        "Full Stack Development refers to the process of creating both the front-end and back-end of a web application. It involves the use of various technologies and tools to build the entire application stack, including the user interface (front-end), server-side logic (back-end), and database management. Full Stack Developers are responsible for designing, developing, and maintaining the entire application, from the user interface to the database.",
      stacks: [
        {
          name: "Node.js",
          icon: "/nodejs.svg",
          description:
            "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        },
        {
          name: "Express.js",
          icon: "/expressjs.svg",
          description:
            "Express.js is a web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications.",
        },
        {
          name: "MongoDB",
          icon: "/mongodb.svg",
          description:
            "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        },
        {
          name: "MySQL",
          icon: "/mysql.svg",
          description:
            "MySQL is an open-source relational database management system (RDBMS). It is a popular choice for web applications and other database-intensive applications.",
        },
        {
          name: "PostgreSQL",
          icon: "/postgress.svg",
          description:
            "PostgreSQL is a powerful, open-source object-relational database system known for its extensibility and SQL compliance. It is widely used for web applications and other database-intensive applications.",
        },
        {
          name: "GraphQL",
          icon: "/graphql.svg",
          description:
            "GraphQL is a query language for APIs and a runtime for executing those queries with existing data. It is a complete solution for API development, allowing clients to request exactly the data they need and nothing more.",
        },
      ],
      price: 11250,
      link: "",
      image: "/fullstack2.jpg",
    },
    {
      title: "Amazon Web Services",
      link: "",
      image: "/cloud3.avif",
      description:
        "Amazon Web Services (AWS) is a comprehensive and widely-used cloud computing platform offered by Amazon. It provides a wide range of on-demand cloud computing services, including computing power, storage, databases, machine learning, analytics, and more. AWS offers a pay-as-you-go pricing model, allowing users to scale resources as needed, making it cost-effective for businesses and individuals of all sizes.",
      stacks: [
        {
          name: "IAM",
          icon: "/aws.svg",
          description:
            "AWS Identity and Access Management (IAM) is a cloud service that provides a way to manage access to AWS resources. It allows users to create and manage users, groups, and roles, as well as control access to AWS resources using IAM policies. IAM is a critical component of AWS security, as it helps to ensure that only authorized users have access to AWS resources and that access is controlled in a secure and consistent manner.",
        },
        {
          name: "S3",
          icon: "/s3.svg",
          description:
            "Amazon S3 is an object storage service offered by Amazon Web Services (AWS). It is designed to store and retrieve any amount of data, such as files, images, videos, and other types of data, from anywhere on the web. S3 provides a highly scalable, reliable, and cost-effective storage solution for storing and retrieving data in the cloud.",
        },
        {
          name: "RDS",
          icon: "/rds.svg",
          description:
            "Amazon Relational Database Service (RDS) is a managed database service offered by Amazon Web Services (AWS). It provides a relational database that can be used to run an online application, including web applications and mobile applications. RDS provides a highly scalable, reliable, and cost-effective database solution for storing and retrieving data in the cloud.",
        },
        {
          name: "EC2",
          icon: "/ec2.svg",
          description:
            "Amazon Elastic Compute Cloud (EC2) is a cloud computing service offered by Amazon Web Services (AWS). It provides virtual servers in the cloud that can be used to run applications, including web applications and mobile applications. EC2 provides a highly scalable, reliable, and cost-effective computing solution for running virtual servers in the cloud.",
        },
        {
          name: "Lambda",
          icon: "/lambda.svg",
          description:
            "AWS Lambda is a serverless computing service offered by Amazon Web Services (AWS). It allows users to run code without provisioning or managing servers. Lambda provides a highly scalable, reliable, and cost-effective computing solution for running code in the cloud without the need for provisioning or managing servers.",
        },
        {
          name: "VPC",
          icon: "/vpc.svg",
          description:
            "Amazon Virtual Private Cloud (VPC) is a managed service that provides a logically isolated section of the AWS Cloud where virtual private cloud (VPC) resources are created and managed. VPC provides a highly scalable, reliable, and cost-effective network solution for running virtual servers in the cloud.",
        },
        {
          name: "CloudFront",
          icon: "/cloudfront.svg",
          description:
            "Amazon CloudFront is a content delivery network (CDN) service offered by Amazon Web Services (AWS). It allows users to distribute content, such as web pages, images, videos, and other types of data, globally with low latency across the world. CloudFront provides a highly scalable, reliable, and cost-effective content delivery network solution for distributing content in the cloud.",
        },
        {
          name: "DynamoDB",
          icon: "/dynamodb.svg",
          description:
            "Amazon DynamoDB is a fully managed NoSQL database service offered by Amazon Web Services (AWS). It provides a highly scalable, reliable, and cost-effective database solution for storing and retrieving data in the cloud. DynamoDB provides a highly scalable, reliable, and cost-effective database solution for storing and retrieving data in the cloud.",
        },
      ],
    },
    {
      id: 4,
      title: "Cloud Computing",
      description:
        "Cloud computing is the on-demand delivery of computer services over the Internet with pay-as-you-go pricing. It allows users to access various computing resources, including storage, processing power, and software tools, on a pay-as-you-go basis. Cloud computing provides flexibility, scalability, and cost-effectiveness, making it a popular choice for businesses and individuals of all sizes.",
      stacks: [
        {
          name: "AWS",
          icon: "/aws.svg",
          description:
            "Amazon Web Services (AWS) is a comprehensive and widely-used cloud computing platform offered by Amazon. It provides a wide range of on-demand cloud computing services, including computing power, storage, databases, machine learning, analytics, and more. AWS offers a pay-as-you-go pricing model, allowing users to scale resources as needed, making it cost-effective for businesses and individuals of all sizes.",
        },
        {
          name: "Azure",
          icon: "/azure.svg",
          description:
            "Microsoft Azure is a cloud computing platform offered by Microsoft. It provides a wide range of cloud services, including virtual machines, storage, databases, analytics, and more. Azure offers a pay-as-you-go pricing model, allowing users to scale resources as needed, making it cost-effective for businesses and individuals of all sizes.",
        },
        {
          name: "Google Cloud",
          icon: "/googlecloud.svg",
          description:
            "Google Cloud is a cloud computing platform offered by Google. It provides a wide range of cloud services, including virtual machines, storage, databases, analytics, and more. Google Cloud offers a pay-as-you-go pricing model, allowing users to scale resources as needed, making it cost-effective for businesses and individuals of all sizes.",
        },
        {
          name: "Digital Ocean",
          icon: "/digitalocean.svg",
          description:
            "DigitalOcean is a cloud computing platform offered by DigitalOcean. It provides a wide range of cloud services, including virtual machines, storage, databases, analytics, and more. DigitalOcean offers a pay-as-you-go pricing model, allowing users to scale resources as needed, making it cost-effective for businesses and individuals of all sizes.",
        },
        {
          name: "Vercel",
          icon: "/vercel.svg",
          description:
            "Vercel is a cloud computing platform offered by Vercel. It provides a wide range of cloud services, including virtual machines, storage, databases, analytics, and more. Vercel offers a pay-as-you-go pricing model, allowing users to scale resources as needed, making it cost-effective for businesses and individuals of all sizes.",
        },
        {
          name: "Heroku",
          icon: "/heroku.svg",
          description:
            "Heroku is a cloud computing platform offered by Heroku. It provides a wide range of cloud services, including virtual machines, storage, databases, analytics, and more. Heroku offers a pay-as-you-go pricing model, allowing users to scale resources as needed, making it cost-effective for businesses and individuals of all sizes.",
        },
        {
          name: "Netlify",
          icon: "/netlify.svg",
          description:
            "Netlify is a cloud computing platform offered by Netlify. It provides a wide range of cloud services, including virtual machines, storage, databases, analytics, and more. Netlify offers a pay-as-you-go pricing model, allowing users to scale resources as needed, making it cost-effective for businesses and individuals of all sizes.",
        },
      ],
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
          {services[counter].stacks && (
            <div className={styles.stacks}>
              {services[counter].stacks.map((stack, index) => (
                <div key={index} className={styles.stack}>
                  <img src={stack.icon} alt={stack.name} />
                  <span>{stack.name}</span>
                </div>
              ))}
            </div>
          )}
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
