import React from 'react';
import { Container, RowContainer } from './styles';
import SearchBar from '../../components/SearchBar';
import {
  makeStyles,
  Theme,
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  LinearProgress
} from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    progressBar: {
      maxHeight: 0,
      minWidth: '99%'
      
    }

  }),
)

const Titles: React.FC = () => {

  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [titles, setTitles] = React.useState<any>()

  return (
    <Container>
      <RowContainer>
        <SearchBar onSearch={() => null} />
      </RowContainer>
      <RowContainer>
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          {titles ?
            titles.map((title: any) => (
              <GridListTile key={title.id}>
                <img src={title.bannerImage || title.coverImage.extraLarge}/>
                <GridListTileBar
                  title={title.title.romaji}
                  subtitle={title.title.native}
                  actionIcon={
                    <IconButton aria-label={`info about ${''}`} className={classes.icon} >
                      <InfoOutlined />
                    </IconButton>
                  }
                />

              </GridListTile>
            ))
            :<LinearProgress className={classes.progressBar} />
          }
        </GridList>
      </RowContainer>
    </Container>
  )
}

export default Titles;