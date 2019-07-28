import React from 'react'

class FormInputsStateful extends React.Component {
    constructor(props) {
        super(props)
        this.state = { line1: "", line2:"", postalCode: "", StateCode:"", CountryCode:""  };
       // this.handleChange = this.handleChange.bind(this);
    }

    handleChangeLine1(e){
        this.setState({...this.state, line1: e.target.value });
    }


    render() {
        return (
            <>
            <div className="form-group row">
                <label >Line 1</label>
             
                {/* <input type="text" className="form-control" onChange={this.handleChangeLine1.bind(this,e)} value={this.state.line1} />
           */}
            </div>
        
             <div className="form-group row">
                <label >Line 2</label>
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.line2} />
            </div>
            
             <div className="form-group row">
                <label >Postal Code</label>
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.postalCode} />
            </div>
             <div className="form-group row">
                <label >State </label>
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.StateCode} />
            </div>
             <div className="form-group row">
                <label >Country</label>
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.CountryCode} />
            </div>
            </>
        )
    }
}

export default FormInputsStateful;


