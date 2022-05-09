import React, { useContext } from 'react';
import { ThemeContext } from './../../context';
import './about.css';

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a">
      <div className="a-left">
        <div className={darkMode ? 'a-card bg1' : 'a-card bg'}></div>
        <div className="a-card">
          <img
            src="https://i.pinimg.com/564x/95/b4/42/95b44263375fb0fddcc68fee50ffff58.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I love JavaScript and I live in the world of JavaScript !
        </p>
        <p className="a-desc">
          I design and develop Front End with React JS | Next JS and Back End
          with Node JS
        </p>
        <div className="a-award">
          <img src="/img/mern.png" alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              The best technologies I can work with them ...
            </h4>
            <p className="a-award-desc">
              React | Node | Next | Express | MongoDB | Material UI | And More
              ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
