import {Input} from '@dracula/dracula-ui';
import '@dracula/dracula-ui/styles/dracula-ui.css';
import {createStyles, IconButton, makeStyles} from '@material-ui/core';
import React from 'react';
import {MdSearch} from 'react-icons/md';
import {Colors} from '../../utils/Colors';
import {Container} from './styles';

interface Props {
  onSearch: (text: string) => void
  style?: React.CSSProperties
  variant?: 'outline' | 'normal'
  color?: "pink" | "cyan" | "green" | "orange" | "purple" | "red" | "yellow" | "white" | undefined
}

const useStyles = makeStyles(() =>
  createStyles({
    iconButton: {
      width: 50,
      height: 50,
      marginRight: 5,
      
    },
  }),
);


const SearchBar = (props: Props) => {

  const classes = useStyles()
  const [text, setText] = React.useState<string>()
  const { onSearch } = props

  const onSubmit = React.useCallback(() => {
    if(text) {
      onSearch(text)
    }
  }, [text, onSearch])

  return (
    <Container style={props.style}>
      <Input
        id="standard-basic"
        placeholder="Pesquisar"
        onChange={(text: any) => setText(text.target.value)}
        color={props.color ? props.color : 'pink'}
        variant={props.variant ? props.variant : 'normal'}
      />
      <IconButton
        className={classes.iconButton}
        onClick={onSubmit}
      >
        <MdSearch size={24} color={Colors.pink} />
      </IconButton>
    </Container>
  )
}

export default SearchBar;
