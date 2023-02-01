import React from 'react'

function Candle(props) {
  const {data, candle_width, x_scale, y_scale } = props;
  
  
  const up = data.close > data.open;

  const bar_top = y_scale(up ? data.close : data.open);
  const bar_bottom = y_scale(up ? data.open : data.close);
  const bar_height = bar_bottom - bar_top;
  const wick_bottom = y_scale(data.high);
  const wick_top = y_scale(data.low); 
  const x = x_scale(data.date)

  //barwidth
  const bar_width = 10;
  return (
    <>
        <line 
            x1={x}
            y1={bar_top}
            x2={x}
            y2={wick_top}
            stroke={'red'}
            strokeWidth={1.5}
            transform ={`translate(${bar_width/2})`}
            
        />
        <line 
            x1={x}
            y1={bar_bottom}
            x2={x}
            y2={wick_bottom}
            stroke={'green'}
            strokeWidth={1.5}
            transform={`translate(${bar_width/2})`}
        />
         <rect 
            x = {x}
            y ={bar_top}
            width = {bar_width} 
            height = {bar_height}
            strokeLinejoin={"round"}
            style={{fill: up ? 'red': 'black'}}
        />
    </>
  )
}

export default Candle