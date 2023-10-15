import React from 'react'; 
import './App.css';
import Feed from "./Feed";
import Header from './Header';
import Sidebar from './Sidebar';


function App() {
  return (
    
    <div className="app">
        {/* Header */}
      <header className="App-header">

        <Header />

        {/* App Body */}
        <div className="app__body">
        <Sidebar />
    <Feed />

        {/* Widgets */}
        </div>



      </header>
    </div>
  );
}

export default App;
 