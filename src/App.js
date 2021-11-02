import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
     <Header />
     <div className="middle-section">
       <Card img="/images/event-photo.png"
             title="Event Name"
             date="dd/mm/yy"
             description="About Event"
             price="Resource person name"
       />
       <Card img="/images/event-photo.png"
             title="Event Name"
             date="dd/mm/yy"
             description="About Event"
             price="Resource person name"
       />
       <Card img="/images/event-photo.png"
        title="Event Name"
        date="dd/mm/yy"
        description="About Event"
        price="Resource person name"
        />
     </div>
     <Footer />
    </div>
  );
}

export default App;
