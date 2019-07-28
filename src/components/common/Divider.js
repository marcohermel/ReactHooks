import React from 'react';

const Divider = (props) => {

  return (
    <div className="row divider">
      <div className="col mycontent-left pr-5 ">
        {props.left}
      </div>
      <div className="col mycontent-right pl-5 ">
        {props.right}
      </div>
    </div>
  )
}
export default Divider;
