import React from 'react'

class FormStateful extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "Marco" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div className="form-group row">
                <label >Name</label>
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.name} />
                <small>Name: {this.state.name}</small>
            </div>
        )
    }
}

export default FormStateful


