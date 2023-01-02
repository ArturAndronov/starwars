import React from "react";
import styles from "./characters.module.css";
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import Search from '../Search/Search'


let i = 0;
let Characters = (props) => {
    return (
        <>
            <Container sx={{ mt: "1rem" }}>
                <Search />
            </Container>
            <ul className={styles.listContainer}>
                {props.people.map(p =>
                    <li className={styles.listItem} key={p.id}>
                        <Link to={`/people/`}>
                            <img className={styles.personPhoto} src={`https://starwars-visualguide.com/assets/img/characters/${i++}.jpg`} alt='Изображение отсутствует' />
                            <p>{p.name}</p>
                        </Link>
                    </li>)}
            </ul>
        </>
    )
}

export default Characters;