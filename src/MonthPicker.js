import React, {Component} from 'react';
import './MonthPicker.css';
import PropTypes from 'prop-types';
import moment from "moment";

class MonthPicker extends Component {
    MODE_MONTH = 'month';
    MODE_YEAR = 'year';


    constructor(props) {
        super(props);

        this.state = {
            yearsPage: 0,
            currentYear: props.date ? props.date.year() : moment().year(),
            currentMonth: props.date ? props.date.month() + 1  : null,
            pickerMode: 'month'
        };
    }

    changeYear = (delta) => {
        this.setState(state => ({currentYear: state.currentYear + delta}))
    };

    changeYearsPage = (delta) => {
        this.setState(state => ({yearsPage: state.yearsPage + delta}))
    };

    pickTheMonth = (month) => {
        // console.log(month);
        this.setState(state => ({currentMonth: month}));
        this.props.onChooseMonth(moment(`${month} ${this.state.currentYear}`, 'M YYYY'));
    };

    renderMonths = () => {
        return (
            <div className='month-picker'>
                <div className='month-picker-title'>
                    <div className='month-picker-control' onClick={() => this.changeYear(-1)}> &lt;&lt; </div>
                    <div className='month-picker-control'
                         onClick={() => this.setState({pickerMode: this.MODE_YEAR})}> {this.state.currentYear}</div>
                    <div className='month-picker-control' onClick={() => this.changeYear(1)}> &gt;&gt; </div>
                </div>
                <div className='month-picker-content'>
                    {moment.monthsShort().map((month, idx) => {
                        // console.log(this.state.currentMonth, idx + 1)
                        const currentMonth = (this.state.currentMonth === idx + 1) && (moment().year() === this.state.currentYear);
                        const classNames = ['month-picker-content-month'];
                        currentMonth && classNames.push('month-picker-month-active');
                        return <div key={idx}
                                    onClick={() => this.pickTheMonth(idx + 1)}
                                    className={classNames.join(" ")}>{month}</div>
                    })}
                </div>
            </div>
        );
    };

    renderYears = () => {
        const initialYear = this.state.currentYear + (12 * this.state.yearsPage);
        let years = [];
        for (let year = initialYear - 4; year < initialYear + 8; year++) {
            years.push(year);
        }

        return (
            <div className='month-picker'>
                <div className='month-picker-title'>
                    <div className='month-picker-control' onClick={() => this.changeYearsPage(-1)}> &lt;&lt; </div>
                    <div className='month-picker-control'
                         onClick={() => this.setState({pickerMode: this.MODE_MONTH})}> YEARS
                    </div>
                    <div className='month-picker-control' onClick={() => this.changeYearsPage(1)}> &gt;&gt; </div>
                </div>
                <div className='month-picker-content'>
                    {years.map(year => {
                        const currentYear = moment().year() === year;
                        const classNames = ['month-picker-content-month'];
                        currentYear && classNames.push('month-picker-month-active');
                        return <div key={year}
                                    onClick={() => this.setState({pickerMode: this.MODE_MONTH, currentYear: year})}
                                    className={classNames.join(" ")}>{year}</div>
                    })}
                </div>
            </div>
        );
    };

    render() {
        return (this.state.pickerMode === this.MODE_MONTH) ? this.renderMonths() : this.renderYears();
    }
}


MonthPicker.propTypes = {
    onChooseMonth: PropTypes.func.isRequired,
};


export default MonthPicker;
