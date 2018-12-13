import React, { Component } from "react";
import "./App.css";
import LinkText from "./Components/LinkText";
import Title from "./Components/Title";
import Center from "./Components/Center";
import Page from "./Components/Page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page isFlex>
          <Title text="Hey, my name is Alex Cushing." />
          <div style={{ display: "flex" }}>
            <Title
              margin="0 0 64px"
              text="I'm a front end engineer at"
              isSubtitle
            />
            <Title
              margin="0 0 64px 4px"
              text={<LinkText text="Wayfair." to="https://www.wayfair.com" />}
              isSubtitle
            />
          </div>
          <Center>
            <Center inline row={false}>
              <img
                alt=""
                style={{
                  backgroundImage:
                    "url(https://avatars0.githubusercontent.com/u/14876141?s=460&v=4)",
                  backgroundPosition: "center bottom",
                  backgroundSize: "cover",
                  width: 200,
                  height: "100%"
                }}
              />
            </Center>
            <div className="App-aboutMe">
              <Title
                margin="0 12px"
                text="Bachelors degree in CS - UMass Lowell"
                isSubtitle
              />
              <Title
                margin="12px"
                text={
                  <LinkText
                    colorOverride="#5cb85c"
                    text="Shoot me an email!"
                    to="mailto:alexrcushing@gmail.com"
                  />
                }
                isSubtitle
              />
              <Title
                margin="0 12px"
                padding="12px"
                text="Software engineer from Boston, with a passion for building clean UIs with top notch design."
                isSubtitle
                hasBackground
              />
            </div>
          </Center>
          <div className="App-links">
            <LinkText
              margin='0 32px 0 0'
              to="https://github.com/alexcushing"
            >
              <img
                src="http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg"
                alt=""
                class="App-icon"
              />
              <Title isSmallSubtitle text='GitHub' to='' />
            </LinkText>
            <LinkText
              margin='0 0 0 32px'
              to="https://linkedin.com/in/alexandercushing"
            >
              <img
                src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png"
                alt=""
                class="App-icon"
              />
              <Title isSmallSubtitle text='LinkedIn' to='' />
            </LinkText>
          </div>
        </Page>
      </div>
    );
  }
}

export default App;
