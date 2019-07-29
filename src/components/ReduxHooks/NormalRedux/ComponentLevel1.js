import React, { Component } from 'react'
import ComponentLevel2 from './ComponentLevel2'
import { connect } from 'react-redux'

class ComponentLevel1 extends Component {
  render() {
    return <div className="divBorder">
      <div className="form-group">
        <label >value: <strong>{this.props.count}</strong></label>
      </div>
      Component child level 2
        <ComponentLevel2 />
    </div>
  }
}


const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(ComponentLevel1)