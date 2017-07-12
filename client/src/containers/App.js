import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import RegistrationForm from '../components/registrationFormComponent';
import registrationReducer from '../reducers/registrationReducer';

class App extends Component {

  render() {
    return (
      <div className="container">
        <p><i>devstats</i></p>
        <RegistrationForm onSubmit={registrationReducer}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    registration: state.registration
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
