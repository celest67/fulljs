import React from 'react'
import ReactDOM from 'react-dom'

const color = Math.random() > 0.5 ? 'green' : 'red';

ReactDOM.render(
    //React.createElement('h2',null,'Hola react'),
    //<h2 style={{color:color}}>
    <h2 className="text-center">
        Hello React con JSX -- {Math.random()}
    </h2>,
    document.getElementById('root')
);