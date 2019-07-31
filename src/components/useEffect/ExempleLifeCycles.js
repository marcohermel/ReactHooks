import React from 'react'

class ExempleLifeCycles extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "Marco", age: 29 };
    }
    
    componentDidMount() {
        localStorage.setItem("stetefull name", this.state.name);
        localStorage.setItem("stetefull age", this.state.age);
    }

    componentDidUpdate() {
        localStorage.setItem("stetefull name", this.state.name);
        localStorage.setItem("stetefull age", this.state.age);
    }

    handleNameChange(e) {
        this.setState({ ...this.state, name: e.target.value });
    }

    handleAgeChange(e) {
        this.setState({ ...this.state, age: e.target.value });
    }

    render() {
        return (
            <form className="form-inline mb-4">
                <label>Name: </label>
                <input type="text" className="form-control form-control-sm ml-2 mr-2" onChange={e => this.handleNameChange(e)} value={this.state.name} />
                <label>Age: </label>
                <input type="number" className="form-control form-control-sm ml-2 mr-2" onChange={e => this.handleAgeChange(e)} value={this.state.age} />
            </form>
        )
    }
}

export default ExempleLifeCycles;


