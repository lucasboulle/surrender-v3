import React from 'react';
import { Container } from './styles';
import { MdSearch } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import { IconButton, makeStyles, createStyles } from '@material-ui/core';

interface Props {
  onSearch: (text: string) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    iconButton: {
      width: 50,
      height: 50,
      marginTop: 16,
      marginRight: 5,
    },
  }),
);


const SearchBar = (props: Props) => {

  const classes = useStyles()
  const [text, setText] = React.useState<string>()

  const onSubmit = React.useCallback(() => {
    if(text) {
      props.onSearch(text)
    }
  }, [text])

  return (
    <Container>
      <TextField
        id="standard-basic"
        label="Pesquisar"
        onChange={text => setText(text.target.value)}
        fullWidth={true}
        style={searchBarStyle}
      />
      <IconButton
        className={classes.iconButton}
        onClick={onSubmit}
      >
        <MdSearch size={24} color={'#202020'} />
      </IconButton>
    </Container>
  )
}

const IconStyle = {
  marginTop: 16,
  marginRight: 5,
  color: '#202020',
}

const searchBarStyle = {
  width: 350
}

export default SearchBar;