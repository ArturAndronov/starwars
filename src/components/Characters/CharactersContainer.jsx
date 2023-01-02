import React from "react";
import { connect } from "react-redux";
import { setPeopleAC } from "../../redux/characters-reducer";
import axios from "axios";
import Characters from "./Characters";



class CharactersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://swapi.dev/api/people`)
            .then(response => {
                console.log(response);
                this.props.setPeople(response.data.results);
            });
    }

    render() {
        return <Characters people={this.props.people} id={this.props.id}
        />

    }
}


let mapStateToProps = (state) => {
    return {
        people: state.peoplePage.people,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPeople: (people) => {
            dispatch(setPeopleAC(people))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer);