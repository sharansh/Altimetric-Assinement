import React, {Component} from 'react';
import Table from '../../component/Table/table';
import SearchForm from '../../component/form/form';
import customData from '../../JSON/flightDetails.json';

import '../Past/past.css';

class Home extends Component{
    state= {
        alldata:'',
        sourceselected: '',
        destinationselected: '',
        exactItemRow: '',
        travelDate:''
    }

    componentDidMount = () => {
        this.setState({
            alldata: customData
        }); 
    }

    datasearchTable = (destination,source) => {
        this.setState({
            destinationselected:destination,
            sourceselected:source
        });
        this.settingdatatable(destination,source);

    }

    settingdatatable = (destination,source) => {
        let exactItemlist;
        if(this.state.alldata.filightdetails && destination !== "Choose" && source !== "Choose"){
            exactItemlist  = this.state.alldata.filightdetails.filter((item) => {
                return (
                    item.Flight_Destination === destination && item.Flight_Source === source
                )
            }); 
        }
        if(this.state.alldata.filightdetails && destination !== "Choose" && source === "Choose"){
            exactItemlist  = this.state.alldata.filightdetails.filter((item) => {
                return item.Flight_Destination === destination;
            }); 
        }
        if(this.state.alldata.filightdetails && source !== "Choose" && destination === "Choose"){
            exactItemlist  = this.state.alldata.filightdetails.filter((item) => {
                return item.Flight_Source === source;
            }); 
        }
        this.setState({exactItemRow:exactItemlist})
    }
    render() {
        return (
            <div className="Container">
                <div className="col-12">
                    <SearchForm dataSerachFunction={this.datasearchTable} />
                </div>
                <Table tabledataflights={this.state.exactItemRow}/>
            </div>
        )  
    }
}

export default Home;