import React from 'react';
import ReactDOM from 'react-dom';

// const MOUNT1 = document.querySelector('#global');

// const Asdf = React.createElement('div', {}, "is the asdf on?")

const title = React.createElement('h1', {}, 'My First React Code');
const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!')

const list = React.createElement('div', {}, 
  'my favorite ice cream list',
    React.createElement('ol', {},
    [
      React.createElement('li', {className: 'brown', key: '1b'}, 'chocolate'),
      React.createElement('li', {className: 'white', key: '2v'}, 'vanilla'),
      React.createElement('li', {className: 'ivory', key: '3c'}, 'coconut')
    ]
  )
)

const container = React.createElement('div', {}, [title, paragraph, list])

// ReactDOM.render(title, MOUNT1)
// ReactDOM.render(title, document.getElementById('global'))
ReactDOM.render(container, document.getElementById('global'))

