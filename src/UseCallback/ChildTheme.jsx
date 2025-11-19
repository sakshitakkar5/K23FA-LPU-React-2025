
import React from 'react'

const ChildTheme = (props) => {

    console.log("Child Component Rendered");
  return (
    <div>
      <button onClick={props.c}>Change count</button>
    </div>
  )
}

export default React.memo(ChildTheme)
