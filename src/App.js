//"lift state"
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/index';
import About from "./components/About/index";
import Gallery from './components/Gallery/index';


function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;



