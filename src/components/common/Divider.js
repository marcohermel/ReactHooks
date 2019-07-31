import React from 'react';

const Divider = (props) => {

  return (
    <div className="row divider">
      <div className="col-lg-12 text-center"><h5>{props.title}</h5></div>
      <div className="col-lg-6 mycontent-left pr-5 ">
        {props.left}
      </div>
      <div className="col-lg-6 mycontent-right pl-5 ">
        {props.right}
      </div>
    </div>
  )
}
export default Divider;
