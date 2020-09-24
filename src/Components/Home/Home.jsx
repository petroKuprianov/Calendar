import React ,{Component} from 'react';
import './Home.scss'
import Calendar from '../Calendar/Calendar.jsx';


export default class Header extends Component {
    render(){
        return(
            <div className="main">
                <div className="main__center">
                    <div className="main__center-title">
                        <h1>Choose the day for the meeting</h1>
                    </div>
                    <div className="main__center-text">
                        <p>We encourage you to book your appointment online.<br/> This will save you time.</p>
                    </div>
                </div>
                <div className="main__rigth">
                    <Calendar display = {this.props.display} selectedDate={this.props.selectedDate}
                     setDisplay={this.props.setDisplay} 
                     setDate={this.props.setDate}/>
                </div>
            </div>
        )
    }
}