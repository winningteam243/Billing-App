import React, { Component } from 'react';
import './App.css';
import CreatePDF from './pdf/pdf';
import RedirectFrom from './pdf/redirectfrom';
import LastMonth from './pdf/lastmonth';



class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Create PDF and Download</h1> 
       <LastMonth />
      </div>
    );
  }
}

export default App;
