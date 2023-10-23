import getRandomFromArr from "../services/getRamdomFromArr"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'
import fnArr from '../utils/fnArr.json'

const ButtonPhrase = ({ setPhraseRandom, setBgApp,setFnApp }) => {

    const handleChangePhrase = () => {
        const quote = getRandomFromArr(phrases)
        setPhraseRandom(quote)
        setBgApp(getRandomFromArr(bgArr))
        setFnApp(getRandomFromArr(fnArr))
    }

    return (
        <button
            className="app__btn"
            onClick={handleChangePhrase}
        >
            Ver Otro
        </button>
    )
}

export default ButtonPhrase
