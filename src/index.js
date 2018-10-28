import React, {Component} from 'react'
import MonthPicker from "./MonthPicker";
import PropTypes from 'prop-types';
import './MonthPicker.css';
import moment from "moment/moment";

class SimpleMonthPicker extends Component {
    state = {
        showPicker: false,
        date: '',
    };

    onMonthChoose = (date) => {
        this.setState({date: date.format(this.props.dateFormat), showPicker: false})
    };

    render() {
        return <div className={'month-picker-holder'}>
            <input
                onClick={() => this.setState({showPicker: true})}
                value={this.state.date}
                onChange={(e) => this.setState({date:e.currentTarget.value})}
                className={this.props.inputClassName}/>
            {this.state.showPicker && <MonthPicker
                date={this.state.date !== '' ? moment(this.state.date, this.props.dateFormat) : null}
                onChooseMonth={this.onMonthChoose}
                style={{position: 'relative'}}/>}
        </div>
    }
}

SimpleMonthPicker.propTypes = {
    inputClassName: PropTypes.string,
    dateFormat: PropTypes.string,
};

export default SimpleMonthPicker