import React, { Component } from 'react';
import './App.css';
import data from "./data";
import IDCard from "./components/IDCard";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    people: data,
    index: 0
  }

  handleNext = () => {
    if (this.state.index === this.state.people.length - 1){
      this.setState({
        index: 0
      }) 
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  handlePrev = () => {
    if (this.state.index === 0){
      this.setState({
        index: this.state.people.length - 1
      }) 
    } else {
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  delete = () => {
    let peeps = [...this.state.people]
    if (this.state.index === this.state.people.length - 1){
      this.setState({
        index: this.state.index - 1
      })
      peeps.splice(this.state.index, 1)
      this.setState({
        people: peeps
      })
    }
    //  else if(this.state.people === []){
    //   console.log('reached the if statement')
    // }
    else{peeps.splice(this.state.index, 1)
      this.setState({
        people: peeps
      })
    }

  }

  render() {
    let i = this.state.index

    return (
      <div className="App">
        <h1>Home</h1>
        <IDCard
        currentCard={this.state.index + 1}
        outOf={this.state.people.length}
        firstName={this.state.people[i].name.first}
        lastName={this.state.people[i].name.last}
        city={this.state.people[i].city}
        country={this.state.people[i].country}
        title={this.state.people[i].title} 
        employer={this.state.people[i].employer}
        m1={this.state.people[i].favoriteMovies[0]}
        m2={this.state.people[i].favoriteMovies[1]}
        m3={this.state.people[i].favoriteMovies[2]}/>

        <Navbar 
        prev={this.handlePrev}
        next={this.handleNext}
        del={this.delete}/>
      </div>
    );
  }
}

export default App;
