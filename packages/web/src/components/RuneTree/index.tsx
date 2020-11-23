import React from 'react'
import {
  Container, RuneColumn, RuneContainer, RuneImage, RuneLogoContainer
} from './styles'
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts'
import { ChartTitle } from '../../pages/Champion/styles'
import runeExample from '../../images/rune-image-example.png'

interface Props {
  data: any
}


const RuneTree = () => {


  return (
    <Container>
      <RuneLogoContainer>
        Runas
      </RuneLogoContainer>
      <RuneLogoContainer>
        <RuneImage src={runeExample} />
      </RuneLogoContainer>
      <RuneContainer>
        <RuneColumn >
          <RuneImage src={runeExample} />
          <RuneImage src={runeExample} />
          <RuneImage src={runeExample} />
          <RuneImage src={runeExample} />
        </RuneColumn>
        <RuneColumn >
          <RuneImage src={runeExample} />
          <RuneImage src={runeExample} />
          <RuneImage src={runeExample} />
          <RuneImage src={runeExample} />
        </RuneColumn>
        <RuneColumn >
          <RuneImage src={runeExample} />
          <RuneImage src={runeExample} />
          <RuneImage src={runeExample} />
          <RuneImage src={runeExample} />
        </RuneColumn>
      </RuneContainer>
    </Container>
  )
}

export default RuneTree
