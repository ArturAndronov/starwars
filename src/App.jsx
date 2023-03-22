
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharacterDetailsContainer from './components/CharacterDetails/CharacterDetailsContainer';
import CharactersContainer from './components/Characters/CharactersContainer';
import Header from './components/Header/Header';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='*' element={<CharactersContainer />}/>
        <Route exact path='/people/:id' element={<CharacterDetailsContainer/>}/>
      </Routes>
    </div>
  )
}

export default App;
