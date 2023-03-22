import styles from './CharacterDetails.module.css';
import { useParams, useLocation, useNavigate} from "react-router-dom";


const CharacterDetails = ({people, userId}) => {
  debugger;
  // const a = useLocation();
  // const id = Number(a.state.id);
  //const { userId } = useParams()
  //const peoples = people.find(people => people.id === parseInt(userId))
  const peoples = people.find(character => Number.parseInt(character.id) == userId.id);

  return (
    <>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${peoples.id}.jpg`} alt='Изображение отсутствует' />
      <p>{peoples.name}</p>
    </>
  )
}



export default CharacterDetails;
