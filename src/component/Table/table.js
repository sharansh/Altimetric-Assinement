import React, {Component} from 'react';
import TableRow from './tablerow';
import './table.css';

class Table extends Component{
    state={
        tbodyCheck: false
    }
    render(){
        let tabelRowdata;
        if(this.props.tabledataflights === '' ){
            tabelRowdata = null
        }
        else {
            this.state.tbodyCheck = true;
            console.log("length",this.props.tabledataflights.length);
            tabelRowdata = this.props.tabledataflights.map(eachRow => {
            return ( 
                <TableRow
                        key={eachRow.Flight_Number}
                        Flight_Source={eachRow.Flight_Source}
                        Flight_Destination={eachRow.Flight_Destination}
                        Flight_Number={eachRow.Flight_Number}
                        Airline_Name={eachRow.Airline_Name}
                        Departure_Time={eachRow.Departure_Time}
                        Arrival_Time={eachRow.Arrival_Time}
                        Duration={eachRow.Duration}
                        No_Of_Stops={eachRow.No_Of_Stops}
                />
                )
        });
    }
        return(
            <div className="tableContainer">  
                <table className="table cutomtablestyle">
                    <thead className="cutomtableHeaderStyle">
                        <tr>
                            <th>Flight_Source</th>
                            <th>Flight_Destination</th>
                            <th>Flight_Number</th>
                            <th>Airline_Name</th>
                            <th>Departure_Time</th>
                            <th>Arrival_Time</th>
                            <th>Duration</th>
                            <th>No_Of_Stops</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tabelRowdata}
                    </tbody>
                </table>
                {this.state.tbodyCheck?<h4>Total Number of results: <span>{this.props.tabledataflights.length}</span></h4>:null}
                {!this.state.tbodyCheck?<h1>Search Flights from Above Form</h1>:null}
            </div>
        )  
    }
}

export default Table;