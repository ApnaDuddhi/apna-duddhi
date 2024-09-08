import React from "react";
import "./style.css";
import { ImageConst } from "../../../../utils";

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
        <h1>Our Team</h1>
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
