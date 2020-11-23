import React from 'react'
import {
  Container
} from './styles'
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts'
import { ChartTitle } from '../../pages/Champion/styles'

interface Props {
  data: any
}


const SimpleChart = (props: Props) => {


  return (
        <Container >
        <ChartTitle>Um titulo</ChartTitle>
        <LineChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </Container>
  )
}

export default SimpleChart
