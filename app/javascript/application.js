// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from "./greeting";

function App() {
    const message = 'Hello, Holla, Salut'
    return (
        <>
            <h1>Get a random greeting</h1>
            <Greeting message={message}/>
        </>


    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
