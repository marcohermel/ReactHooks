import React from 'react'

class FormInputsStateful extends React.Component {
    constructor(props) {
        super(props)
        this.state = { line1: "", line2:"", postalCode: "", StateCode:"", CountryCode:""  };
        this.handleChangeLine1 = this.handleChangeLine1.bind(this);
        this.handleChangeLine2 = this.handleChangeLine2.bind(this);
        this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
    }

    handleChangeLine1(e){
        this.setState({...this.state, line1: e.target.value });
    }
    handleChangeLine2(e){
        this.setState({...this.state, line2: e.target.value });
    }
    handleChangePostalCode(e){
        this.setState({...this.state, postalCode: e.target.value });
    }
    handleChangeState(e){
        this.setState({...this.state, StateCode: e.target.value });
    }
    handleChangeCountry(e){
        this.setState({...this.state, CountryCode: e.target.value });
    }

    render() {
        return (
            <>
            <div className="form-group row">
                <label >Line 1</label>
                <input type="text" className="form-control form-control-sm" onChange={this.handleChangeLine1} value={this.state.line1} />
            </div>
        
             <div className="form-group row">
                <label >Line 2</label>
                <input type="text" className="form-control form-control-sm" onChange={this.handleChangeLine2}  value={this.state.line2} />
            </div>
            
             <div className="form-group row">
                <label >Postal Code</label>
                <input type="text" className="form-control form-control-sm" onChange={this.handleChangePostalCode}  value={this.state.postalCode} />
            </div>
             <div className="form-group row">
                <label >State </label>
                <input type="text" className="form-control form-control-sm" onChange={this.handleChangeState}  value={this.state.StateCode} />
            </div>
             <div className="form-group row">
                <label >Country</label>
                <input type="text" className="form-control form-control-sm" onChange={this.handleChangeCountry}  value={this.state.CountryCode} />
            </div>
            </>
        )
    }
}

export default FormInputsStateful;


