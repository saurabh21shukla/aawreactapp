import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppRouter } from '../router';
class App extends Component {
	render(){
    return (
    	<div>
    		{AppRouter(this.props)}
        </div>
    )
    }
}
const mapStateToProps = (state) => { 
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(App);