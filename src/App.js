import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { connect } from 'react-redux';
import 'material-design-icons-iconfont';
import setDisplayPopAction from '../src/redux/actions/actionDisplay';
import setDateAction from './redux/actions/actionDate';

class App extends Component {
  render(){
  return (
    <div>
      <Header />
      <Route exact path="/" render= {()=><Home display = {this.props.display} 
        selectedDate={this.props.date} setDisplay={this.props.setDisplayPop}
        setDate={this.props.setDate} /> } />
      <Route path="/About" render={()=><About/> }/>
    </div>
  );
}
}

function mapStateToProps(state){
  return{
    display:state.dateInfo.displayPop,
    date: state.dateInfo.selectedDate
  }
}

function mapDispatchToProps(dispatch){
    return {
    setDisplayPop: display =>{
      dispatch(setDisplayPopAction(display))
    },
    setDate: date =>{
      dispatch(setDateAction(date))
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
