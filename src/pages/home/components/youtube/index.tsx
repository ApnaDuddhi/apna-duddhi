import React from "react";

import "./style.scss";
import DATA from "./data.json";

type RealLifeStory = {
  title: string;
  url: string;
};

type RealLifeStories = {
  "Real Life base stories and perspective": RealLifeStory[];
};

// Example usage:
const stories: RealLifeStories = DATA;

const Youtube = () => {
  return (
    <div className="youtube-container">
      <h3 className="heading">On Youtube</h3>
      <div className="youtube-section">
        {Object.keys(stories).map((section) => (
          <>
            <p className="section-title">{section}</p>
            <div>
              {stories[section as keyof RealLifeStories].map((item) => (
                <div>
                  <span className="video-icon">🎥</span>
                  <a
                    href="https://youtu.be/0VKQCSeK-ws?si=g-CCJrEvt3xYwAPE"
                    rel="noreferrer"
                    target="_blank"
                    className="link"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export { Youtube };
