import React, {Component} from 'react';
import './form.css'

class SearchForm extends Component{
    state = {
        source:'choose',
        destination:'Choose',
        travelDate: '',
        returnDate: '',
        src:'Choose'
    }
    destinationChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    submitform = (event) => {
        event.preventDefault();
        this.props.dataSerachFunction(this.state.destination,this.state.source);
    }

    render(){
        return(
            <div className="formContainer">   
                <form>
                <div className="form-row">
                    <div className="form-group col-2">
                        <label htmlFor="exampleInputEmail1" className="float-left">Source City</label>
                        <select id="inputState" name="source"  className="form-control" onChange={(event) =>this.destinationChange(event)} value={this.state.source} >
                            <option value="Choose">Choose</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Goa">Goa</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                    </div>
                    <div className="form-group col-2">
                        <label htmlFor="exampleInputPassword2" className="float-left">Destination City</label>
                        <select id="inputState1" name="destination" className="form-control" onChange={(event) =>this.destinationChange(event)} value={this.state.destination} >
                            <option value="Choose">Choose</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Goa">Goa</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                    </div>
                    <div className="form-group col-2">
                        <label htmlFor="exampleInputPassword3" className="float-left">Travel Date</label>
                        <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Travel Date" />
                    </div>
                    <div className="form-group col-2">
                        <label htmlFor="exampleInputPassword4" className="float-left">Return Date</label>
                        <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Return Date" />
                    </div>
                    <button type="submit" className=" col-2 btn btn-primary customsubmitButton" onClick={this.submitform} >Submit</button>
                    </div>
                </form>
            </div>
        )  
    }
}

export default SearchForm;