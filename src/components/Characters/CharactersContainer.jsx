import React from "react";
import { connect } from "react-redux";
import { getPeople, getIsFetching } from "../../redux/people-selectors"
import { requestPeople } from "../../redux/characters-reducer";
import Characters from "./Characters";
import Preloader from "../../common/Preloader/Preloader";

class CharactersContainer extends React.Component {
    componentDidMount() {
        this.props.requestPeople();
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Characters people={this.props.people}
            />
        </>

    }
}


let mapStateToProps = (state) => {
    return {
        people: getPeople(state),
        isFetching: getIsFetching(state),
    }
}

export default connect(mapStateToProps, { requestPeople })(CharactersContainer);