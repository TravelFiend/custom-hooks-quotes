import React, { Component } from 'react';
import Quote from '../components/quotes/Quote';
import getQuotes from '../services/getQuotes';

class Quotes extends Component {
  state = {
    character: '',
    quote: '',
    pic: ''
  }

  componentDidMount(){
    this.fetch();
  }

  fetch(){
    return getQuotes()
      .then(quotes => {
        const randomIndex = Math.floor(Math.random() * quotes.length);

        this.setState({
          character: quotes[randomIndex].character,
          quote: quotes[randomIndex].quote,
          pic: quotes[randomIndex].image
        });
      });
  }

  handleClick = event => {
    event.preventDefault();
    this.fetch();
  }

  render(){
    return (
      <main>
        <Quote character={this.state.character} quote={this.state.quote} pic={this.state.pic} onClick={this.handleClick} />
      </main>
    );
  }
}

export default Quotes;
