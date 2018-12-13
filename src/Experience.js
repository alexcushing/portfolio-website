import React, { Component } from "react";
import "./Experience.css";
import Card from "./Components/Card";
import Title from "./Components/Title";
import Center from "./Components/Center";
import Page from "./Components/Page";

class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <Page>
          <Center>
          <Card>
          <Center>
            <Title color="#7f187f" text="Wayfair" />
          </Center>
          <Center>
            <Title isSubtitle text="Front End Engineer" />
          </Center>
          <Center>
            <Title isSubtitle text="October 2017 – Present" />
          </Center>
          <Center>
            <Title
              margin="8px"
              padding="16px"
              hasBackground
              isSubtitle
              text="Working on creating and updating new JavaScript components, styling pages seen by millions of users, and taking
          part in a large-scale react conversion. All work is written following an internal set of code standards, tested thoroughly, reviewed by peer developers, and built with wireframes provided by a team of designers."
            />
          </Center>
          <Center>
            <Title
              isSubtitle
              text="Javascript, React, HTML/JSX, SASS/CSS, PHP"
            />
          </Center>
        </Card>
          </Center>
          <Center>
          <Card>
            <Center>
              <Title color="#0275d8" text="Putnam Investments" />
            </Center>
            <Center>
              <Title
                isSubtitle
                text="Digital Transformations Engineering Intern"
              />
            </Center>
            <Center>
              <Title isSubtitle text="May 2017– August 2017" />
            </Center>
            <Center>
              <Title
                margin="8px"
                padding="16px"
                isSubtitle
                hasBackground
                text="Created internal iOS applications for different teams within the company. Also worked on a 'kitchen sink' application to show off uses for the reusable components."
              />
            </Center>
            <Center>
              <Title isSubtitle text="Swift, JavaScript" />
            </Center>
          </Card>
          </Center>
          <Center>
          <Card>
            <Center>
              <Title color="#0275d8" text="Putnam Investments" />
            </Center>
            <Center>
              <Title isSubtitle text="Software Engineering Co-Op" />
            </Center>
            <Center>
              <Title isSubtitle text="​July 2016 – December 2016" />
            </Center>
            <Center>
              <Title
                margin="8px"
                padding="16px"
                isSubtitle
                hasBackground
                text="Worked in web and software development creating interfaces for data manipulation, python cycles for automating work tasks, ETL jobs, and more."
              />
            </Center>
            <Center>
              <Title
                isSubtitle
                text="JavaScript, JQuery, Python, Django, SCSS/CSS"
              />
            </Center>
          </Card>
          </Center>
        </Page>
      </div>
    );
  }
}

export default Experience;
