import React, {Component} from 'react';
import './tablerow.css';

class TableRow extends Component{
    render(){
        return (
            <tr className="tablerowStyling">
                <td>{this.props.Flight_Source}</td>
                <td>{this.props.Flight_Destination}</td>
                <td>{this.props.Flight_Number}</td>
                <td>{this.props.Airline_Name}</td>
                <td>{this.props.Departure_Time}</td>
                <td>{this.props.Arrival_Time}</td>
                <td>{this.props.Duration}</td>
                <td>{this.props.No_Of_Stops}</td>
            </tr>
        )
    }
}

export default TableRow;