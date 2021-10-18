import React from 'react'
import SearchBar from '../SearchBar';
import { Box, Text } from '@dracula/dracula-ui';
import surrenderLogo from '../../images/surrender-new-pink-logo.png'
import { Container } from './styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { height } from '@material-ui/system';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '10%'
    },
    image: {
      width: 80,
      height: 80
    }
  }),
);


const Waves = () => {

  const classes = useStyles()

  return (
      <Box 
        color="black" 
        p="md" 
        className={classes.container}
        borderColor="pink"
      >
        <img src={surrenderLogo} className={classes.image} />
        <SearchBar 
          variant="outline"
          onSearch={() => null}
          style={{
            width: '25%'
          }}
        />
      </Box>
  )
}

export default Waves
