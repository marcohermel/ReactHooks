import React, { Component } from 'react'
import ComponentLevel3 from './ComponentLevel3';

export default class ComponentLevel2 extends Component {

    render() {
        return <div className="divBorder">
            <div className="form-group">
            </div>
            Component child  level 3
             <ComponentLevel3 />
        </div>
    }
}