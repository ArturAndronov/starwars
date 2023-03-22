import React from "react";
import { connect } from "react-redux";
import CharacterDetails from "./CharacterDetails";
import { useParams, useLocation, useNavigate} from "react-router-dom";
import { compose } from "redux";

class CharacterDetailsContainer extends React.Component {
  
    render() {
      debugger
      let userId = this.props.router.params;
      return (
        <CharacterDetails people={this.props.people} userId={userId}/>
      )
    }
  }
  
  let mapStateToProps = (state) => {
    return {
        people: state.peoplePage.people,
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

  export default compose(connect(mapStateToProps)) (withRouter(CharacterDetailsContainer));