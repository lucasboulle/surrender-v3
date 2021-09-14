import React from 'react'
import {
  Container, Footer
} from './styles'
import Wave from 'react-wavify';
import { Colors } from '../../utils/Colors'
import shadows from '@material-ui/core/styles/shadows';

const Waves = () => {


  return (
    <>
      <Footer>
        <Wave fill={Colors.pink}
          paused={false}
          options={{
            height: 45,
            amplitude: 90,
            speed: 0.20,
            points: 4
          }}
        />
      </Footer>

      <Footer>

        <Wave fill={Colors.cyan}
          paused={false}
          options={{
            height: 50,
            amplitude: 80,
            speed: 0.15,
            points: 6,
          }}
        />
      </Footer>

      <Footer>
        <Wave fill={Colors.purple}
          paused={false}
          options={{
            height: 65,
            amplitude: 70,
            speed: 0.15,
            points: 5
          }}
        />
      </Footer>
    </>
  )
}

export default Waves
