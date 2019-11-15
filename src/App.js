import React, { useState } from 'react';
import './App.css';

import ValidationText from './Components/ValidationText';
import MainInput from './Components/MainInput';
import Char from './Components/Char';

function App() {
    const [characters, setCharacters] = useState('GoldenMaximo');

    const removeCharacterHandler = characterIndex => {
        const newSetOfCharacters = [...characters];
        newSetOfCharacters.splice(characterIndex, 1);
        setCharacters(newSetOfCharacters.join(''));
    }

    return (
        <div className="App">
            <h1 className="h1Type1">Section 4 Assignment 2 GoldenMaximo Solution</h1>
            <h1 className="h1Type2">Input some text bellow then click the letters to remove them</h1>
            <MainInput value={characters} onChange={event => setCharacters(event.target.value)} />
            <div className="characterSelection">
                {[...characters].map((character, index) => <Char onClick={() => removeCharacterHandler(index)} key={index}>{character}</Char>)}
            </div>
            <ValidationText textLength={characters.length} />
        </div>
    );
}

export default App;
