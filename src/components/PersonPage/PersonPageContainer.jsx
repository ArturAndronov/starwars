import React from "react";
import { connect } from "react-redux";
import { setPeopleAC } from "../../redux/characters-reducer";
import axios from "axios";
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
import PersonPage from "./PersonPage";


class PersonPageContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://swapi.dev/api/people/`)
            .then(response => {
                console.log(response);
                this.props.setPeople(response.data.results);
            });
    }

    render() {
        return <PersonPage people={this.props.people} id={this.props.id}
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

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
  }


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PersonPageContainer));