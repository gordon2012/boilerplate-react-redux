import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Boilerplate: React Redux</h1>
        </header>
        <div className="content">
          <div className="secret-sauce">
            <h2>A Starting Point</h2>
            <p>This app serves as a starting point for applications powered by React and Redux. It also includes Sass, gh-pages deployment, and a cors-anywhere dev proxy server.</p>
          </div>
        </div>
        <footer>Copyright 2016 Gordon Doskas</footer>
      </div>
    );
  }
}

export default App;