import React, { Component } from 'react'
import { connect } from 'react-redux'

class ComponentLevel3 extends Component {

    render() {
        return <div className="divBorder">
            <div className="form-group">
                <label >value: <strong>{this.props.count}</strong></label>
            </div>
            <div className="form-group">
            <button className="btn btn-danger" onClick={this.props.decrement}>Decrement - </button> &nbsp;
                <button className="btn btn-primary" onClick={this.props.increment}>Increment + </button> &nbsp;
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INC' }),
        decrement: () => dispatch({ type: 'DEC' })

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ComponentLevel3)