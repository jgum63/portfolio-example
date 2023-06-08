import React from 'react';
import Style from '../About/about.module.css';

export default function About() {
  return (
    <div className={Style.block}>
      <h1>About Me</h1>
      <p>
        My name is Joshua Gum and I am currently a student in the SMU coding bootcamp. 
        Previous education includes the two years I spent at Weatherford community 
        college where I earned my Associates of Science. I then transferred to Texas Tech where I mostly studied philosophy.
      </p>
    </div>
  );
}
