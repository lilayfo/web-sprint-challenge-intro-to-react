import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [stars, setStars] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setStars(res.data.results);
      setStars(res.data);
    })
    .catch(err => {
      console.error(err)
    })
  }, []);

  const StarWarsDiv = styled.div
  `
  margin: 0 auto;
  box-sizing: border-box;
  width: 50%;
`
  return (
    <div className="App">
        <h1 className="Header">Characters</h1>

    <StarWarsDiv>

    {
      stars &&
      <>
      {
        stars.map((character, index) => {
          return <Character key={index} info={character}/>
        })
      }
      </>
    }
    </StarWarsDiv>
    </div>
  );
};

export default App;
