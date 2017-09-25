import React, { Component } from 'react';
import {Item, Container,Header} from 'semantic-ui-react'
import LinkContainer from './components/LinkContainer'
import 'semantic-ui-css/semantic.min.css';
import './css/main-page.css';


class App extends Component {
  render() {
    return (
      <div className = "app-container">
      <Container className = "main-container">
      <Header size ="large"
          dividing
        >Uncertainty Communication and Deision Aid Project</Header>
      <Item.Group>

        <LinkContainer
          img ='/imgs/htmldemo.png'
          title = 'What is DCIS? HTML Protype'
          description = "A page designed to give information about DCIS, treatment options and related risks."
          url = "https://lokgic.github.io/whatisdcis-html-demo/"
        />
        <LinkContainer
          img ='/imgs/beta1.png'
          title = 'Beta Sampling Demo I'
          description = "Uncertainty visualization using beta sampling, with density plot and histogram"
          url = "http://symbolminded.io/beta-1/"
        />
        <LinkContainer
          img ='/imgs/beta2.png'
          title = 'Beta Sampling Demo II'
          description = "Updated version of the Beta Sampling Demo. The link between sampling and the plot is made more obvious."
          url = "http://symbolminded.io/beta-2/"
        />
      </Item.Group>
      </Container>
    </div>

    );
  }
}

export default App;
