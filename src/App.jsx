import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import bgArr from './utils/bgArr.json'
import fnArr from './utils/fnArr.json'
import getRandomFromArr from './services/getRamdomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase';

function App() {

  const quote = getRandomFromArr(phrases)
  const [phraseRandom, setPhraseRandom] = useState(quote)
  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr))
  const [fnApp, setFnApp] = useState(getRandomFromArr(fnArr))

  const objStyle = {
    backgroundImage:`url('../fondo${bgApp}.jpg')` 
  }

  const tipStyle = {
    fontFamily: `${fnApp}`
  }
  console.log(tipStyle);

  return (
    <div style={objStyle} className='app'>
      <h1 style = {tipStyle} className='app__title'>Galleta de la Fortuna</h1>
      <article style = {tipStyle} className='app__card'>
        <Phrase
          phraseRandom={phraseRandom}
        />

        <ButtonPhrase
          setPhraseRandom={setPhraseRandom}
          setBgApp={setBgApp}
          setFnApp={setFnApp}
        />

      </article>

    </div>

  )
}

export default App
