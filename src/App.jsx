
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CharactersContainer from './components/Characters/CharactersContainer';
import Header from './components/Header/Header';


const App = (props) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='*' element={<CharactersContainer />}/>
      </Routes>
    </div>
  )
}

export default App;
