import React from "react";
import {Check} from 'lucide-react'
import "./subscription.css";

const Subscription = () => {
  const plans = [
    {
      name: "Basic",
      price: "$15/month",
      features: [
        "Course Materials",
        "Limited Guided Projects",
        "Progress Tracking (Basic)",
        "Community Access",
      ],
      included: [
        "courseMaterials",
        "guidedProjects",
        "progressTracking",
        "communityAccess",
      ],
    },
    {
      name: "Pro",
      price: "$50/month",
      features: [
        "Course Materials",
        "Full Guided Projects",
        "Grading and Assessment",
        "Live Sessions (Monthly)",
        "Progress Tracking (Advanced)",
        "Community Access",
      ],
      included: [
        "courseMaterials",
        "guidedProjects",
        "gradingAssessment",
        "liveSessions",
        "progressTracking",
        "communityAccess",
      ],
    },
    {
      name: "Premium",
      price: "$120/month",
      features: [
        "Course Materials",
        "Full Guided Projects",
        "Grading and Assessment (Detailed)",
        "Live Sessions (Weekly)",
        "1:1 Sessions",
        "Project Walkthroughs",
        "Hackathons/Challenges",
        "Certificate of Completion",
        "Progress Tracking (Advanced)",
        "Community Access",
      ],
      included: [
        "courseMaterials",
        "guidedProjects",
        "gradingAssessment",
        "liveSessions",
        "oneOnOneSessions",
        "projectWalkthroughs",
        "hackathons",
        "certificateOfCompletion",
        "progressTracking",
        "communityAccess",
      ],
    },
  ];

  return (
    <> 
    <h2 className="title-main">Pricing Plans</h2>
     <div className="subscription-container">
      
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`plan-card plan-${plan.name.toLowerCase()}`}
        >
            <>
          <h2 className="plan-name">{plan.name}</h2>
          <p className="plan-price">{plan.price}</p>
          <ul className="plan-features">
            {plan.features.map((feature, idx) => (
              <li key={`${feature}-${idx}`} style={{display:"flex",alignItems:"center",gap:"1rem"}}><Check color="green" />{feature}</li>
            ))}
          </ul>
          </>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      ))}
    </div>
    </>
   
  );
};

export default Subscription;
