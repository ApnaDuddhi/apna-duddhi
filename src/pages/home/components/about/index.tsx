import React from "react";
import "./style.scss";
import { ImageConst } from "../../../../utils";

import {
  AboutUs,
  aboutUs,
  coreValues,
  coreValues2,
  missionStatement,
  missionStatement2,
  ourPromise,
  ourStrategicFocusAreas,
} from "./data";

const socialMediaLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100005628792861",
  instagram: "https://www.instagram.com/_om_rudra_/",
  youtube: "https://www.youtube.com/@ApnaDuddhi-zh4lp",
};

const Team = [
  {
    name: "Sunil Kumar Yadav",
    role: "Founder",
    img: ImageConst.PhotoSKY,
    socialMedia: [
      { link: socialMediaLinks.facebook, img: ImageConst.Facebook },
      { link: socialMediaLinks.instagram, img: ImageConst.Instagram },
      { link: socialMediaLinks.youtube, img: ImageConst.Youtube },
    ],
  },
];

const About = () => {
  return (
    <div>
      <section className="about-us-container tbp">
        <h3 className="heading max-font">About Us</h3>
        <div className="about-us-wrapper">
          {aboutUs.map((item) => {
            return Object.keys(item)[0] === "text" ? (
              <p className="italic">{item.text}</p>
            ) : Object.keys(item)[0] === "point" ? (
              <div className="point-wrapper">
                <h4 className="title">{item.point?.title}</h4>
                {item.point?.points.map((_item) => (
                  <div className="point-card">
                    <p className="title">{Object.keys(_item)[0]}</p>
                    <p className="des">{Object.values(_item)[0]}</p>
                  </div>
                ))}
              </div>
            ) : null;
          })}
          <p className="italic">{AboutUs}</p>
        </div>
        <div className="mission-wrapper">
          <h3 className="heading max-font">Our mission</h3>
          <p className="italic">{missionStatement}</p>
          <p className="italic">{missionStatement2}</p>
          <div className="point-wrapper">
            <h4 className="heading max-font">Our Strategic Focus Areas</h4>
            {ourStrategicFocusAreas.map((_item) => (
              <div className="point-card">
                <p className="title">{Object.keys(_item)[0]}</p>
                <ul>
                  {Object.values(_item)[0].map((skill: string) => (
                    <li className="des">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <h3 className="heading max-font">Core values</h3>
        <div className="about-us-wrapper">
          <div className="point-wrapper">
            {coreValues[0].point?.points.map((_item) => (
              <div className="point-card">
                <p className="title">{Object.keys(_item)[0]}</p>
                <p className="des">{Object.values(_item)[0]}</p>
              </div>
            ))}
            {coreValues2[0].point?.points.map((_item) => (
              <div className="point-card">
                <p className="title">{Object.keys(_item)[0]}</p>
                <p className="des">{Object.values(_item)[0]}</p>
              </div>
            ))}
          </div>
          <p className="italic">{AboutUs}</p>
        </div>
        <div>
          <h3 className="heading max-font">Our Promise</h3>
          <p>{ourPromise}</p>
        </div>

        <h3 className="heading max-font">Our Team</h3>
        <div className="team-container">
          {Team.map((member, index) => (
            <div className="team" key={index}>
              <div className="l-img">
                <img src={member.img} alt="founding team member" />
                <div className="l-caption">
                  <ul>
                    {member.socialMedia.map((social, index) => (
                      <li key={index}>
                        <a href={social.link} target="_blank" rel="noreferrer">
                          <img src={social.img} alt="facebook logo"></img>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="l-info">
                <h5>{member.role}</h5>
                <p>{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { About };
