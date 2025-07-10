import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function Avatar() {
  return <img src="sunil.jpeg" className="avatar" alt="Sunil"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Rudragada Sunil Kumar</h1>
      <p>Looking for new opportunites</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill color="orangered" skill="MERN" emoji="💪" />
      <Skill color="green" skill="AI/ML" emoji="👶" />
      <Skill color="yellow" skill="DEV-ops" emoji="👶" />
      <Skill color="cyan" skill="React" emoji="👶" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
