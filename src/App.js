import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkActionCreator } from './actions/fetchActions';
import UserInfo from "./UserInfo";
import { userInfo } from 'os';

class App extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.search.value;
    console.log(username);
    this.props.dispatch(thunkActionCreator(username));
    e.target.elements.search.value = '';
  }

  render() {
    console.log(this.props.data)
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className='form'>
          <h2 className='title'>Enter the Github Username</h2>
          <input type='text' required placeholder='Enter the username' name='search'/>
          <button className='button'>Submit!</button>
        </form>
        {this.props.data.isFetching && <h3>Loading...</h3>}
        {this.props.data.isError && <h3>No such user exist</h3>}
        {this.props.data.isRecieved && Object.keys(this.props.data.userData).length > 0 ? <UserInfo user={this.props.data.userData}/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(App);
