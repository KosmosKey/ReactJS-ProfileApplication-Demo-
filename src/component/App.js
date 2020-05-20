import React, { Component } from "react";
import PeopleList from "./PeopleList";
import { getPeople } from "../action";
import { connect } from "react-redux";
export class App extends Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    return (
      <div>
        <PeopleList people={this.props.allPeople} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { allPeople: state.people.getPeople };
}

export default connect(mapStateToProps, { getPeople })(App);
