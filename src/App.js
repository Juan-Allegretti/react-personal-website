import React from 'react';
import Terminal from './components/Terminal.jsx';
import "./App.css";


const getYear = () => {
  return new Date().getFullYear();
};

const bannerCondensed =
  "             _         __     _    _                 \n" +
  " __ _ _ __ _(_)__ _   / _|___| |__| |_ __  __ _ _ _  \n" +
  "/ _| '_/ _` | / _` | |  _/ -_) / _` | '  \\/ _` | ' \\ \n" +
  "\\__|_| \\__,_|_\\__, | |_| \\___|_\\__,_|_|_|_\\__,_|_||_|\n " +
  "             |___/                                  \n" +
  "  \u00A9 " +
  getYear();



function App() {
  return (
      <Terminal
      banner={bannerCondensed}
      />

  );
}

export default App;
