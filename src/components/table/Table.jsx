import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';



const List = () => {
const data = [
  {
    name: 'Server Migration',
    uv: 20,
    completion: 20,
    amt: 100,
  },
  {
    name: 'Sales Tracking',
    uv: 868,
    completion: 40,
    amt: 1506,
  },
  {
    name: 'Customer Database',
    uv: 1397,
    completion: 60,
    amt: 989,
  },
  {
    name: 'Payout Details',
    uv: 1480,
    completion: 80,
    amt: 1228,
  },
  {
    name: 'Account Setup',
    uv: 1520,
    completion: 100,
    amt: 1100,
  },
];
  return (
   <ComposedChart 
      layout="vertical"
      width={600}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend />
      {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
      <Bar dataKey="completion" barSize={20} fill="#413ea0" />
      {/* <Line dataKey="uv" stroke="#ff7300" /> */}
    </ComposedChart>
  )
}

export default List