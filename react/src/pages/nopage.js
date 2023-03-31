import React from 'react';
import logo from "../logo.svg";

function Nopage() {
    return(
    <div className="App">
        <h1>Grid 2</h1>

        <footer>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </footer>
    </div>
    );
}

export default Nopage;
