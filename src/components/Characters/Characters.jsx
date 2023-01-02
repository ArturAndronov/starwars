import React from "react";
import styles from "./characters.module.css";
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import Search from '../Search/Search'


let Characters = (props) => {
    debugger;
    return (
        <>
            <Container sx={{ mt: "1rem" }}>
                <Search />
            </Container>
            <ul className={styles.listContainer}>
                {props.people.map((p,i)=>
                    <li className={styles.listItem} key={p.id}>
                        <Link to={`/people/${i+1}`}>
                            <img className={styles.personPhoto} src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`} alt='Изображение отсутствует' />
                            <p>{p.name}</p>
                        </Link>
                    </li>)}
            </ul>
        </>
    )
}

export default Characters;