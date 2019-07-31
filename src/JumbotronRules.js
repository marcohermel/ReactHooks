import React from 'react'

export default () =>{
    return(
        <div className="jumbotron">
        <h3>React Hooks</h3>
       <label><strong>RULES:</strong></label> 
        <ul>
          <li>
             Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
          </li>
          <li>
            Only call Hooks from React function components or your own custom hooks. Don’t call Hooks from regular JavaScript functions.
        </li>
          <li>
            A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
         </li>
        </ul>
      </div>
    )
}