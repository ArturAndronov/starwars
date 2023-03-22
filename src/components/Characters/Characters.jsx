import React from "react";
import styles from "./characters.module.css";
//import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import Character from "./Character/Character";
import { useState } from 'react';
import { ListItemButton, ListItemText, TextField } from '@mui/material';


let Characters = ({ people }) => {
    const [value, setValue] = useState('')

    const filteredPeople = people.filter(people => {
        return people.name.toLowerCase().includes(value.toLowerCase())
    })

    const [isOpen, setIsOpen] = useState(true)

    const itemClickHandler = (e) => {
        setValue(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }

    return (
        <>
            <Container sx={{ mt: "1rem" }}>
                <TextField
                    label="Search"
                    variant="outlined"
                    fullWidth
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onClick={inputClickHandler}
                    sx={{
                        mb: "1.5rem"
                    }}
                />
                {
                    value && isOpen
                    ? filteredPeople.map((peop) => <ListItemButton onClick={itemClickHandler}> 
                        <ListItemText primary={peop.name} />
                    </ListItemButton>)
                    : null
                }

                {/* <ul className={styles.autocomplete}>
                    {
                        value
                        ? filteredPeople.map((peop) => <li className={styles.autocomplete__item}>{peop.name}</li>)
                        : null
                    }

                </ul> */}
            </Container>
            <ul className={styles.listContainer}>
                {filteredPeople.map((peop) => <Character people={peop} key={peop.id} />)}
            </ul>
        </>
    )
}

export default Characters;
