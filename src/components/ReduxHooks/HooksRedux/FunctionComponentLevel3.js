import React, { useReducer } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import rootReducer from '../../common/rootReducer';
export default () => {
    // const count = useSelector(state => state.count)
    // const dispatch = useDispatch();
    const [state, dispatch] = useReducer(rootReducer, { count: 0 });
    return (<div className="divBorder">
        <div className="form-group">
            <label >value: <strong>{state.count}</strong></label>
        </div>
        <div className="form-group">
            <button className="btn btn-danger" onClick={() => dispatch({ type: 'DEC' })}>Decrement - </button> &nbsp;
            <button className="btn btn-primary" onClick={() => dispatch({ type: 'INC' })}>Increment + </button> &nbsp;
            </div>
    </div>)

}

