import React, { Component } from 'react';

import { connect } from 'react-redux';
import getRegistrationsAction from '../actions/getRegistrations';
import postRegistrationAction from '../actions/postRegistration';
import RegistrationForm from '../components/registrationFormComponent';

class App extends Component {

  componentWillMount() {
    this.props.getRegistrationsAction();
  }

  render() {
    return (
      <div className="container">
        <p><i>devstats</i></p>
        <RegistrationForm onSubmit={this.props.postRegistrationAction}/>
        <div>
          <p>This is the current data => </p>
          {
            this.props.registration.devregistrations.map((reg, idx) => {
              return(<div key={idx}>{reg.name + ' <= '} {JSON.stringify(reg)}</div>);
            })
           }
      </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    registration: state.registration
  };
};

const actions = {
  getRegistrationsAction,
  postRegistrationAction
};

export default connect(
  mapStateToProps,
  actions
)(App);
