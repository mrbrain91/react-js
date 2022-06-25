import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello world';

// const elem = <h2>hello world!</h2>;
const elem = (
  <div>
    <h2 className='asas'>Text: {text}</h2>
    <input type="text" />
    <label htmlFor='asd'>asdasdas</label>
    <button>Click</button>
  </div>
)

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world!'); eski usul

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);

