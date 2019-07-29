import React from 'react'
import FunctionComponentLevel1 from './FunctionComponentLevel1'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../../common/rootReducer'

export default function ReduxExemple() {

    const store = createStore(rootReducer);
   
    return (
        <Provider store={store}>
          Redux Provider Wrapper 
            <br />
            <div className="divBorder">
                Component child level 1
            <FunctionComponentLevel1 />
            </div>
        </Provider>
    )
}