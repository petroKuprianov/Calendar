import React ,{Component} from 'react';
import './Calendar.scss';
import classnames from 'classnames';
import * as calendar from './Calendar';
import PopUp from '../popUp/PopUp';


export default class Calendar extends Component {

    static defaultProps = {
        date:new Date(),
        monthNames: ['January','February', 'March','April', 'May','June', 'July', 'August', 'September','October', 'November', 'December'],
        years:[2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,2022,2023],
        weekDayNames:[ 'S','M' , 'T' ,'W', 'T', 'F', 'S'],
    }

    state = {
        date: this.props.date,
        currentDate: new Date(),
    }

    get year(){
        return this.state.date.getFullYear()
    }

    get month(){
        return this.state.date.getMonth()
    }
    get day(){
        return this.state.date.getDay()
    }

    handlePrevMonthBtnClick = () =>{
        const date = new Date(this.year, this.month -1);
        this.setState({date});
    };

    handleNextMonthBtnClick = () =>{
        const date = new Date(this.year, this.month +1);
        this.setState({date});
    };

    handleDayClick = (date) =>{
         this.props.setDate(date);
         this.props.setDisplay(true);
    };

    closePopUp = () =>{

        return this.props.setDisplay(false);
    }

    render(){
        const {years,monthNames,weekDayNames } =  this.props;
        const monthData = calendar.getMonthData(this.year, this.month);
        const {currentDate, selectedDate} = this.state
        return(
            <div className="calendar">
                <div className="calendar__wrapper">
                    <div className="calendar__wrapper-btn">
                        <button onClick={this.handlePrevMonthBtnClick} className="calendar__wrapper-btn-left">{'<'}</button>
                        <p>
                            { monthNames[this.month]}
                        </p>
                        <p>
                            {this.year}
                        </p>
                        <button onClick={this.handleNextMonthBtnClick} className="calendar__wrapper-btn-right">{'>'}</button>
                    </div>
                    <table className="calendar__wrapper-table">
                        <tbody>
                                {monthData.map((week, index)=>
                                    <tr key={index} className="week">
                                        {week.map((date,index)=> date ?
                                        <td onClick={()=> this.handleDayClick(date)} key={index} 
                                            className={classnames('calendar__wrapper-table-day',{
                                            'calendar__wrapper-table-today' : calendar.arrEqual(date,currentDate),
                                            'calendar__wrapper-table-selected': calendar.arrEqual(date,selectedDate)
                                        })}>{date.getDate()}</td>
                                        :
                                        <td key={index} />

                                    )}
                                </tr>
                                )}
                        </tbody>
                        <tfoot>
                            <tr className="calendar__wrapper-table-foot">
                                {weekDayNames.map((name,index) =>
                                    <th key={index}>{name}</th>
                                    )}
                            </tr>
                        </tfoot>
                    </table>
                </div>
                {this.props.display === true ? <PopUp close={this.closePopUp} date={this.props.selectedDate}/> : <></>}
            </div>
        )
    }
}