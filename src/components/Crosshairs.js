import React from 'react'

function Crosshairs(props) {
    const {x, y, height, width } = props;
    if (x + y === 0)   return <></>;

  return (
    <>
        <line
            x1={0}
            y1={y}
            x2={width}
            y2={y} 
            stroke={'blue'}
            strokeWidth={2}
            strokeDasharray={4}
        />

        <line
            x1={x}
            y1={0}
            x2={x}
            y2={height} 
            stroke={'blue'}
            strokeWidth={2}
            strokeDasharray={4}
        />
    </>
  )
}

export default Crosshairs