import React ,{Component} from 'react';
import './PopUp.scss';
import 'material-design-icons-iconfont';



export default class PopUp extends Component {
    onCLose = ()=> {
        this.props.close()
    }

    checkMonth(date){
       let  monthNames = ['January','February', 'March','April', 'May','June', 'July', 'August', 'September','October', 'November', 'December']
        return monthNames[date];
    }

    checkDay(numDay,dayInWeek){
        let weekDayNames = [ 'Sunday','Monday' , 'Tuesday' ,'Wednesday', 'Thursday', 'Friday', 'Saturday']
        if(numDay === 1)
        {
            numDay+='st'
        }
        else if(numDay===2)
        {
            numDay+='nd'
        }
        else if(numDay === 3)
        {
            numDay+='rd'
        }
        else if(numDay === 21)
        {
            numDay+='st'
        }
        else if(numDay===22)
        {
            numDay+='nd'
        }
        else if(numDay === 23)
        {
            numDay+='rd'
        }
        else if(numDay===31)
        {
            numDay+='st'
        }
        else{
            numDay+='th'
        }
        return `${numDay} ${weekDayNames[dayInWeek]}`
    }

    render(){
        return(
            <div className="popUp">
                <div className="popUp__icon">
                <i className="material-icons" onClick={this.onCLose} >close</i>
                </div>
                <div className="popUp__content">
                    <div className="popUp__month">
                        <span className="popUp__month-text">Month</span>
                        <input className="popUp__month-input" type="text" defaultValue={this.checkMonth( this.props.date.getMonth())}></input>
                    </div>
                    <div className="popUp__weekDay">
                        <span className="popUp__weekDay-text">Day</span>
                        <input className="popUp__weekDay-input" type="text" defaultValue={this.checkDay( this.props.date.getDate(),this.props.date.getDay())}/>
                    </div>
                </div>

            </div>
        )
    }
}