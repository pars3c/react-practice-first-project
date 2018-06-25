import React, { Component } from 'react';



class AboutUs extends Component {
    render() {
      
      return (
        <div className="App">
            <h1> This text is about us </h1>
            <Clock />
        </div>
        
      );
    }
  }

  class Clock extends Component {
    constructor() {
      super();
      this.state = {name: 'Aderitodfo'};
    }
  
    render() {
        setTimeout(() => {
            this.setState({ name: 'boo' })
        }, 1000)
      return (
        <div>
          <p> { this.state.name } </p>
        </div>
      );
    }
  }




  export default AboutUs;