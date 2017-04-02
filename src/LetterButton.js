import React from 'react';
import _ from 'underscore';

const ROW_ONE = 'qwertyuiop'.split('');
const ROW_TWO = 'asdfghjkl'.split('');
const ROW_THREE = 'zxcvbnm'.split('');

export default React.createClass({

  handleClick(letter) {
    if (this.props.enabled) {
      this.props.onPress(letter);
    }
  },

  getButton(letter) {
    let disabled = _.includes(this.props.disabledLetters, letter);
    return (
      <button
        key={letter}
        onClick={this.handleClick.bind(this, letter)}
        disabled={disabled}>
        {letter}
      </button>
    );
  },

  getRow(row) {
    return (
      <div className='button-row' key={row.join('')}>
        {row.map(this.getButton)}
      </div>
    );
  },

  render() {
    return (
      <div className='hangman-keyboard'>
        {[ROW_ONE, ROW_TWO, ROW_THREE].map(this.getRow)}
      </div>
    );
  }

});
