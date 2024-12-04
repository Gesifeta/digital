import React from "react";
import "./faq.css";

const FAQ = () => {
  const faqs = [
    {
      question: "Why should I pay for a self-paced web development course?",
      answer:
        "Paid courses often provide structured, high-quality content created by experienced professionals. They typically include access to resources such as code repositories, practice exercises, and community forums, which can accelerate your learning.",
    },
    {
      question: "What makes self-paced learning better than other formats?",
      answer:
        "Self-paced learning allows you to learn at your convenience, fitting your education around work, family, or other commitments. It also enables you to revisit topics as many times as needed.",
    },
    {
      question: "How does a paid course compare to free resources?",
      answer:
        "While free resources can be helpful, paid courses often offer a more comprehensive curriculum, hands-on projects, and professional support. This can lead to a deeper understanding and practical skills.",
    },
    {
      question: "Will I get support during the course?",
      answer:
        "Most paid courses include some form of support, such as access to mentors, Q&A sessions, or peer forums, to help you overcome challenges and stay motivated.",
    },
    {
      question: "Do paid courses provide certifications?",
      answer:
        "Many paid courses provide certificates of completion, which can be a valuable addition to your resume or portfolio when applying for jobs.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title title-main">Frequently Asked Questions</h2>
      <div className="faq-item">
        {faqs.map((faq, index) => (
          <h2 key={index} style={{color:"gray",fontSize:'1rem',borderColor:'var(--border-color'}}>
            <details>
              <summary className="fag-item">{faq.question}</summary>
              <p style={{fontSize:"1rem",color:"black",fontWeight:"normal",padding:"0 3rem"}}>{faq.answer}</p>
            </details>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
