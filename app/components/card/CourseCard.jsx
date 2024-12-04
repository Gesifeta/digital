import React, { useEffect, useState } from "react";
import Image from "next/image";

import "./courseCard.css";
import Link from "next/link";

const CourseCard = ({
  image,
  icon,
  title,
  description,
  price,
  numberOfCourses,
  discount,
  prerequisites,
}) => {
  const [resize, setResize] = useState("resize");
  useEffect(() => {
    let intervalId = setInterval(() => {
      let infocontainer = document.querySelectorAll(".course__info__container");
      setResize(resize === "resize" ? null : "resize");
      infocontainer.forEach((item) => {
        item.classList.toggle(resize);
      });
    }, 3000);

    return () => {
      return clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="courseCard">
      {/* show number of curse information if available */}
      {numberOfCourses && (
        <div className="course__info__container">
          <span>Courses</span> <span>{numberOfCourses}</span>
        </div>
      )}
      <div className="courseCard__image">
        <img src={image} alt={`${title} image`} />
      </div>
      <div className="courseCard__content">
        <div className="title">
          <h2 className="title">{title}</h2>
          {icon && (
            <span>
              <Image src={icon} alt={`${title} icon`} width={30} height={30} />
            </span>
          )}
        </div>
        <div>
          <div className="price">
            <span>Price:</span><span>{price.toLocaleString()}</span>
            {discount!==0 && <span className="discount">{discount}</span>}
          </div>
          <p className="description">{description}</p>
          {prerequisites && <h4 className="detail">Prerequisites:</h4>}
          {prerequisites && (
            <div className="container-prerequisites">
              {prerequisites.map((prerequisite, index) => (
                <span className="detail" key={index}>
                  <Link
                    href={prerequisite === "none" ? "#" : `/${prerequisite}`}
                    target="_blank"
                  >
                    {prerequisite}
                  </Link>
                </span>
              ))}
            </div>
          )}
          <button className="btn-primary">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
