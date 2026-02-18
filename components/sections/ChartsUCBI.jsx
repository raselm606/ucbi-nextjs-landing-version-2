'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'Jan',
    price: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    price: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    price: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    price: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    price: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    price: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Aug',
    price: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const ChartsUCBI = () => {
	 return (

	 	<>

	 	<AreaChart
	      style={{ width: '100%',  height: '100px', aspectRatio: 1.618 }}
	      responsive
	      data={data}
	      margin={{
	        top: 5,
	        right: 0,
	        left: 0,
	        bottom: 0,
	      }}
	      onContextMenu={(_, e) => e.preventDefault()}
	    >
	     
	      
	      {/*<Tooltip />*/}
	      <Area type="monotone" dataKey="price"  stroke="#8884d8" fill="#104e98" />
	
	    </AreaChart>
	 		

	 	</>

	 	 )
}

export default ChartsUCBI