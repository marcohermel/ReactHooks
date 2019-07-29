import React from 'react'

class ExempleLifeCycles extends React.Component {
    constructor(props) {
        super(props)
        this.state = { line1: "", line2:"", postalCode: "", StateCode:"", CountryCode:"" , isValid: true };
   
    }

    componentDidUpdate(){
        let flag = true;
        Object.entries(this.state).forEach(([key, value]) => {
           if(value.length > 0) flag = true; 
        });

        this.setState({...this.setState, isValid: flag});
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
                <input type="text" className="form-control form-control-sm" onChange={e => this.handleChangeLine1(e)} value={this.state.line1} />
            </div>
        
             <div className="form-group row">
                <label >Line 2</label>
                <input type="text" className="form-control form-control-sm" onChange={e => this.handleChangeLine2(e)}  value={this.state.line2} />
            </div>
            
             <div className="form-group row">
                <label >Postal Code</label>
                <input type="text" className="form-control form-control-sm" onChange={e => this.handleChangePostalCode(e)}  value={this.state.postalCode} />
            </div>
             <div className="form-group row">
                <label >State </label>
                <input type="text" className="form-control form-control-sm" onChange={e => this.handleChangeState(e)}  value={this.state.StateCode} />
            </div>
             <div className="form-group row">
                <label >Country</label>
                <input type="text" className="form-control form-control-sm" onChange={e => this.handleChangeCountry(e)}  value={this.state.CountryCode} />
            </div>
            </>
        )
    }
}

export default ExempleLifeCycles;


