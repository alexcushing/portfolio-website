import React, { Component } from "react";
import "./Skills.css";
import Card from "./Components/Card";
import Title from "./Components/Title";
import Center from "./Components/Center";
import Page from "./Components/Page";

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <Page>
          <Center>
            <Card>
              <Title text='Programming Languages/Frameworks' />
              <Center bordered borderColor='#e65c00'>
                <Title 
                margin="8px"
                padding="16px" hasBackground isSubtitle text="JavaScript (ES6), Node, React, Redux, Express, SCSS/CSS, HTML, JQuery, Python, and SQL" />
              </Center>
            </Card>
          </Center>
          <Center>
            <Card>
              <Title text='Other Relevant Skills' />
              <Center bordered borderColor='#5cb85c'>
                <Title 
                margin="8px"
                padding="16px" hasBackground isSubtitle text="Heroku, GIT, REST, JSON, Webpack, OSX, Linux, Unix Command Line, And an eye for ‘good design’" />
              </Center>
            </Card>
          </Center>
        </Page>
      </div>
    );
  }
}

export default Skills;
