
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharactersContainer from './components/Characters/CharactersContainer';
import Header from './components/Header/Header';
import PersonPageContainer from './components/PersonPage/PersonPageContainer';


const App = (props) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='*' element={<CharactersContainer />}/>
        <Route path='/people/:id' element={<PersonPageContainer />}/>
      </Routes>
    </div>
  )
}

export default App;
