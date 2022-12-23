import { Container } from '@mui/system';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

const App = () => {
  return (
    <div>
      <Header />
      <Container sx={{mt:"1rem"}}>
        <Search />
      </Container>
    </div>
  )
}

export default App;
