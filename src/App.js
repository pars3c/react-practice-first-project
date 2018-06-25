import React, { Component } from 'react';

import AboutUs from './aboutComponent';

import logo from './logo.svg';
import './App.css';

const txt = "I am super freagin awesome and kool"

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <NavBar logo={logo} />
        <AboutUs />
        {/* Present a prop inside the component */}
        <Welcome  name="Aderito" age="26"/>
         {/* Alternative way to present a prop inside the component */}
         <Welcome_2  name="Masaka!!" age="28"/>
         <Welcome_2  name="Noneofyourbusiness!!" age="28"/>
         <Looping />
         <Stating />
      </div>
    );
  }
}

class NavBar extends Component{
  render(){
    
    const {logo} = this.props
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><img className="App-logo" alt="logo" src={ logo } /></a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
           <Links />
          </ul>
        </div>
    </nav>
    
    );
  }
}

class Links extends Component {
  render(){
    const links = {
      'Home': 'https://google.pt',
      'About us': 'https://youtube.pt'
    }
    return (
      <div>
        {
          Object.keys(links).map((key, index) => ( 
            <li className="nav-item">
              <a className="nav-link" href={links[key]}>{key}</a>
            </li>
          ))
        }
      </div>
    )
  }
  }



{/* One of the ways to declare props */}
class Welcome extends Component {
  render() {
    return(
      
    <div className="super-freak">
      <h1 className="super-freak" key={this.props.name}>Welcome {this.props.name}</h1>
      <h1 className="super-freak" key={this.props.age}>You are {this.props.age} years old</h1>
    </div>
    );
  }
}

{/* Alternative way to declare props */}
class Welcome_2 extends Component {
  render() {
    const {name, age} = this.props;
    console.log(this.props)
    return(
    <div className="super-freak">
      {/* One of the ways to declare props */}
      <h1 className="super-freak">Welcome {name}</h1>
      <h1 className="super-freak">You are {age} years old</h1>
    </div>
    );
  }
}
{/* Creating loops with map and onClick events */}
class Looping extends Component {
  onClick() {
    alert('Clicked')
  }
  render(){
    const names = [
      'Aderito',
      'Carlos',
      'Jesus',
    ];
    return(
    names.map( name => {
      return(
        <div key={ name } onClick={ this.onClick }>Your name is { name } </div>
      );
    })
  );
  }
}

{/* Creating states */}
class Stating extends Component{

  render(){
    this.state = {
      title: 'Avatar'
    }
    return(
      <h1>{ this.state.title } </h1>
    );
  }
}


export default App;
