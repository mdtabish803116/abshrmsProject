import React from 'react'



function IconTitleBox({props}) {
  return (
    <div className="iconTitleBox">
     <div className="userIcon">
       <img src = {props.icon} alt="Logo"/>
     </div>
     <div className="titleCount">
          <div>{props.title}</div>
          <div>{props.count}</div>
     </div>
    </div>
  )
}

export default IconTitleBox