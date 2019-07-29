import React from 'react'
import FunctionComponentLevel2 from './FunctionComponentLevel2'
import {useSelector} from 'react-redux'

export default function ComponentLevel1(){
  const count = useSelector(state => state.count)

    return (<div className="divBorder">
      <div className="form-group">
        <label >value: <strong>{count}</strong></label>
      </div>
      Component child level 2
        <FunctionComponentLevel2 />
    </div>)
}


