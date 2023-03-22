import React from "react";
import styles from './character.module.css'
import { NavLink } from "react-router-dom";


let Character = ({ people }) => {
    return (
        <div>
            <li className={styles.listItem} key={people.id}>
                <NavLink to={`/people/${people.id}`}>
                    <img className={styles.personPhoto} src={`https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg`} alt='Изображение отсутствует' />
                    <p>{people.name}</p>
                </NavLink>
            </li>
        </div>
    )
}

export default Character;
