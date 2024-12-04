// course list with description HTML, CSS, JAVASCRIPT, REACT, NEXTJS, EXPRESS, GRAPHQL, MONGODB,GITHUB,DOCKER,MYSQL
export const courses = [
  {
    title: "HTML",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It is a fundamental technology for web development and is essential for building the structure and content of web pages.",
    category: "frontend",
    price: 500,
    link: "",
    prerequisites: ["none"],
    level: "Fundamental",
    image: "/html.png",
    icon: "/html.svg",
  },
  {
    title: ["CSS"],
    description:
      "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It is a fundamental technology for web development and is essential for styling web pages and web applications.",
    category: "frontend",
    price: 500,
    link: "",
    prerequisites: ["HTML"],
    level: "Fundamental",
    image: "/css.png",
    icon: "/css.svg",
  },
  {
    title: "JAVASCRIPT",
    description:
      "JavaScript is a high-level, interpreted programming language that is widely used for web development. It is a fundamental technology for web development and is essential for adding interactivity and dynamic behavior to web pages and web applications.",
    category: "frontend",
    price: 500,
    link: "",
    prerequisites: ["HTML", "CSS"],
    level: "Fundamental",
    image: "/javascript-logo.png",
    icon: "/javascript.svg",
  },
  {
    title: "REACTJS",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    category: "frontend",
    price: 500,
    link: "",
    level: "Framework",
    prerequisites: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/reactjs.png",
    icon: "/react.svg",
  },
  {
    title: "NEXTJS",
    description:
      "Next.js is an open-source web development framework created by XXXXXX enabling React-based web applications with server-side rendering and generating static websites.",
    category: "frontend",
    price: 500,
    link: "",
    prerequisites: ["HTML", "CSS", "JAVASCRIPT", "REACTJS"],
    level: "Framework",
    image: "/nextjs.jpeg",
    icon: "/nextjs.svg",
  },
  {
    title: "EXPRESSJS",
    description:
      "Express.js is a web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications.",
    category: "backend",
    price: 500,
    link: "",
    prerequisites: ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "NEXTJS"],
    level: "Framework",
    image: "/expressjs.png",
    icon: "/expressjs.svg",
  },
  {
    title: "GRAPHQL",
    description:
      "GraphQL is a query language for APIs and a runtime for executing those queries with existing data. It is a complete solution for API development, allowing clients to request exactly the data they need and nothing more.",
    category: "backend",
    price: 500,
    link: "",
    prerequisites: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACTJS",
      "NEXTJS",
      "EXPRESSJS",
    ],
    level: "Framework",
    image: "/graphql.png",
    icon: "/graphql.svg",
  },
  {
    title: "MONGODB",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    category: "backend",
    price: 500,
    link: "",
    prerequisites: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACTJS",
      "NEXTJS",
      "EXPRESSJS",
      "GRAPHQL",
    ],
    level: "Fundamental",
    image: "/mongodb.png",
    icon: "/mongodb.svg",
  },
  {
    title: "GITHUB",
    description:
      "GitHub is a web-based platform for version control and collaboration. It is a popular choice for hosting code repositories, managing projects, and collaborating with others.",
    category: "devops",
    price: 500,
    link: "",
    prerequisites: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACTS",
      "NEXTJS",
      "EXPRESSJS",
      "GRAPHQL",
      "MONGODB",
    ],
    level: "Fundamental",
    category: "frontend",
    image: "/github.jpg",
    icon: "/github.svg",
  },
  {
    title: "DOCKER",
    description:
      "Docker is a platform for developing, shipping, and running applications in containers. It provides an efficient, consistent, and portable way to package and deploy applications.",
    category: "devops",
    price: 500,
    link: "",
    prerequisites: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACTS",
      "NEXTJS",
      "EXPRESSJS",
      "GRAPHQL",
      "MONGODB",
      "GITHUB",
    ],
    level: "Fundamental",
    image: "/docker.png",
    icon: "/docker.svg",
  },
  {
    title: "MYSQL",
    description:
      "MySQL is an open-source relational database management system (RDBMS). It is a popular choice for web applications and other database-intensive applications.",
    category: "backend",
    price: 500,
    link: "",
    prerequisites: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACTJS",
      "NEXTJS",
      "EXPRESSJS",
      "GRAPHQL",
      "MONGODB",
      "GITHUB",
      "DOCKER",
    ],
    level: "Fundamental",
    image: "/mysql.jpg",
    icon: "/mysql.svg",
  },
  {
    title: "Amazon Web Services",
    category: "cloud",
    price: 10000,
    link: "",
    icon: "/cloud3.avif",
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
          "Amazon S3 is an object storage service offered by Amazon Web Services (AWS). It is designed to store and retrieve any amount of data, such as files, icons, videos, and other types of data, from anywhere on the web. S3 provides a highly scalable, reliable, and cost-effective storage solution for storing and retrieving data in the cloud.",
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
          "Amazon CloudFront is a content delivery network (CDN) service offered by Amazon Web Services (AWS). It allows users to distribute content, such as web pages, icons, videos, and other types of data, globally with low latency across the world. CloudFront provides a highly scalable, reliable, and cost-effective content delivery network solution for distributing content in the cloud.",
      },
      {
        name: "DynamoDB",
        icon: "/dynamodb.svg",
        description:
          "Amazon DynamoDB is a fully managed NoSQL database service offered by Amazon Web Services (AWS). It provides a highly scalable, reliable, and cost-effective database solution for storing and retrieving data in the cloud. DynamoDB provides a highly scalable, reliable, and cost-effective database solution for storing and retrieving data in the cloud.",
      },
    ],
  },
];
