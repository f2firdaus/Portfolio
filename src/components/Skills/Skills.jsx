import React from "react";
import "./skill.scss";
const Skills = () => {
  return (
    <>
      <div className="main-skills">
        <div className="skill">
          <span className="span-skills">skills</span>
          <span className="span-text">What I'm best at</span>
        </div>

        <div className="progress">
          <div className="myprogress">
            <div className="progress-bar1 progress-bar">
              <progress
                min="0"
                max="100"
                value="75"
                style={{
                  visibility: "hidden",
                  height: 0,
                  width: 0,
                }}
              ></progress>
            </div>

            <p>Front End</p>
          </div>
          <div className="myprogress">
            <div className="progress-bar2 progress-bar">
              <progress
                min="0"
                max="100"
                value="75"
                style={{
                  visibility: "hidden",
                  height: 0,
                  width: 0,
                }}
              >
                75%
              </progress>
            </div>

            <p>Back End</p>
          </div>
          <div className="myprogress">
            <div className="progress-bar3 progress-bar">
              <progress
                min="0"
                max="100"
                value="75"
                style={{
                  visibility: "hidden",
                  height: 0,
                  width: 0,
                }}
              >
                75%
              </progress>
            </div>

            <p>Responsive Design</p>
          </div>
          <div className="myprogress">
            <div className="progress-bar progress-bar4">
              <progress
                min="0"
                max="100"
                value="75"
                style={{
                  visibility: "hidden",
                  height: 0,
                  width: 0,
                }}
              >
                75%
              </progress>
            </div>

            <p>GIS Programming</p>
          </div>
        </div>
        <div className="technical">
          <div className="tskills">
            <p className="t-skills">TECHNICAL SKILLS</p>
          </div>
          <div className="all-skills">
            <div className="frontend">
              <p>Javascript/ES6 /ES7</p>
              <p>React</p>

              <p>HTML 5 / CSS3 / SCSS</p>
              <p>Java</p>
              <p>Bootstrap /Material UI</p>
            </div>

            <div className="backend">
              <p>Node js</p>
              <p>Express Js</p>
              <p>Redux</p>
              <p>MongoDb</p>
              <p>PostgreSQL</p>
            </div>
            <div className="misc">
              <p>Git / Github</p>
              <p>Babel</p>
              <p>Redux</p>
              <p>Postman</p>
              {/* <p></p>
                          <p>Bootstrap /Material UI</p>    */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
