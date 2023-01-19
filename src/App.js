import './App.css';
import {utcParse} from 'd3'
import Chart from './components/Chart'
import {initialData} from './data'
import { useState } from 'react';

function App() {
  //dimnsions
  const chart_width = 960;
  const chart_height = 600;
 
  const parseDate = utcParse("%Y-%m-%d %H:%M:%S")

  const formated_data = initialData.map(d => (
      {
        date: parseDate(d.date),
        open: d.open,
        close: d.close,
        volume: d.volume,
        high: d.high,
        low: d.low
      }
    ))
  const [data, setData] = useState(formated_data.slice(0, 25))


  return (
    <Chart data={data} width={chart_width} height={chart_height}/>
  );
}

export default App;
