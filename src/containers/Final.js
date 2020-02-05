import React, { Component } from 'react';
import Quote from '../components/quotes/Quote';
import DropDown from '../components/dropDown/DropDown';
import getQuotes from '../services/getApiData';

class Quotes extends Component {
  state = {
    character: '',
    quote: '',
    pic: '',
    selectedChar: '',
    totalQuotes: 1,
    totalCharQuotes: 1
  }

  setIt = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    this.setState({
      character: quotes[randomIndex].character,
      quote: quotes[randomIndex].quote,
      pic: quotes[randomIndex].image,
      totalCharQuotes: quotes.length
    });
  }

  componentDidMount(){
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.selectedChar !== this.state.selectedChar && this.state.selectedChar !== '') {
      this.fetch();
    }
  }

  fetch = () => {
    if(this.state.selectedChar === ''){
      return getQuotes('https://futuramaapi.herokuapp.com/api/quotes/163')
        .then(quotes => {
          this.setIt(quotes);
        });
    }
    return getQuotes(`https://futuramaapi.herokuapp.com/api/characters/${this.state.selectedChar}`)
      .then(quotes => {
        this.setIt(quotes);
      });
  }

  handleClick = event => {
    event.preventDefault();
    this.fetch();
  }

  handleChange = ({ target }) => {
    this.setState({ selectedChar: target.value });
  }

  handleNumChange = ({ target }) => {
    event.preventDefault();
    this.setState({ totalQuotes: Number(target.value) });
  }

  render(){
    return (
      <>
        <DropDown onChange={this.handleChange} onNumChange={this.handleNumChange} />
        <Quote character={this.state.character} quote={this.state.quote} pic={this.state.pic} handleClick={this.handleClick} />
      </>
    );
  }
}

export default Quotes;
