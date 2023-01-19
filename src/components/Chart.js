import { scaleLinear, max, min, scaleTime, extent, axisBottom, timeParse } from 'd3';
import {useState} from 'react'
import Candle from './Candle';
import Crosshairs from './Crosshairs';

function Chart(props) {
  const [mouse_cords, set_mousecords] = useState({ x: 0, y: 0 })

  const { height: chart_height, width: chart_width, data } = props;
  console.log('h', chart_height)

  const candle_width = Math.floor((chart_width/data.length)*0.7)

  //accessors
  // const low_accessor = d => d.low;
  const high_accessor = d => d.high;
  const date_accessor = d => d.date;

  //dollar high and dlow
  const dollar_high = max(data.map(bar => bar.high));
  const dollar_low = min(data.map(bar => bar.low));
  

  
  //xscale 
  const x_scale = scaleTime()
    .domain(extent(data, date_accessor))
    .range([0, chart_width])
  
  //yscale
  const y_scale = scaleLinear()
    .domain([dollar_low, dollar_high])
    .range([chart_height, 0])

  // const bottom_axis = axisBottom()
  //   .call(x_scale)

    

  console.log(y_scale.domain())
  
    const handle_click = (e) => {

    }

    const handle_mouseleave = (e) => {
      set_mousecords({x: 0, y: 0})
    }
    const  handle_mousemove = (e) => {
      const { clientX, clientY} = e;
     set_mousecords({x: clientX, y: clientY })
    }
   
    const {x, y}= mouse_cords;
  return (
    <svg  
      height={chart_height} 
      width={chart_width} 
      style={{backgroundColor: 'gray'}} 
      onClick={handle_click} 
      onMouseMove={handle_mousemove}
      onMouseLeave={handle_mouseleave}
    >
      <g transform={'translate(0,0)'}>
        {data.map((bar, i) => {
          return (
            <Candle
              key={i}
              data={bar}
              candle_width={candle_width}
              x_scale={x_scale}
              y_scale={y_scale}
            />
          )
        })}
        <Crosshairs x={x} y={y} height={chart_height} width={chart_width}/>
        
        <text x="10" y="16" fill="white" fontSize="10">
          <tspan>
            Mouse: {x}, {y}
          </tspan>
          <tspan x="10" y="30">
            Dollars: ${y}
          </tspan>
      </text>
        <g>

          
        </g>
        <g></g>
      </g>
    </svg>
  )
}

export default Chart