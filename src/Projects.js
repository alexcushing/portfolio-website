import React, { Component } from "react";
import "./Projects.css";
import Card from "./Components/Card";
import Title from "./Components/Title";
import LinkText from "./Components/LinkText";
import Center from "./Components/Center";
import Page from "./Components/Page";

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <Page>
          <Center>
            <Card>
              <Title color='#0275d8' text='Airlyst' />
              <Title isSmallSubtitle text='Node.js, React.js, Redux, Socket.io, Express.js, SCSS, and AWS' />
              <Center bordered borderColor='#0275d8'>
                <Title 
                margin="8px"
                padding="16px" isSubtitle text="A single page application for users to buy and sell clothing, with live chat, user profiles, and a fast and modern UI." />
              </Center>

              <Title isSmallSubtitle text={
                <LinkText colorOverride='#0275d8' text='GitHub' to='https://github.com/AirLyst' />
              } />
            </Card>
          </Center>
          <Center>
            <Card>
              <Title color='#5cb85c' text='Roomio' />
              <Title isSmallSubtitle text='PHP/Laravel, MySQL, React.js, Redux, Node.js, Socket.io, Express.js, Redis, and AWS' />
              <Center bordered borderColor='#5cb85c'>
                <Title 
                margin="8px"
                padding="16px" isSubtitle text="A full stack web application for real time topic based conversations." />
              </Center>
              <Title isSmallSubtitle text={
                <LinkText colorOverride='#5cb85c' text='GitHub' to='https://github.com/alexcushing/roomio' />
              } />
            </Card>
          </Center>
          <Center>
            <Card>
              <Title color='#e65c00' text='Prism' />
              <Title isSmallSubtitle text='MongoDB, ExpressJS, NodeJS, JQuery, Javascript, HTML5, CSS3' />
              <Center bordered borderColor='#e65c00'>
                <Title 
                margin="8px"
                padding="16px" isSubtitle text="A photography based web application with an emphasis on a minimalistic aesthetic, tag based search functionality, and a portfolio style user profile. The goal is to provide photographers with a professional and interactive environment to share their work and connect with others." />
              </Center>
              <Title isSmallSubtitle text={
                <LinkText colorOverride='#e65c00' text='GitHub' to='https://github.com/alexcushing/Prism' />
              } />
            </Card>
          </Center>
        </Page>
      </div>
    );
  }
}

export default Projects;
