import React from 'react'
import {
  Container,
  ProfileInfo,
  ProfileData,
  ProfileImage,
  RankEmblemImage,
  ContentContainer,
  PlayedChampions,
  ChampionIcon,
  MatchList
} from './styles'
import {
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  LinearProgress,
  makeStyles,
  Theme
} from '@material-ui/core'
import challengerIcon from '../../images/challenger-icon.jpeg'
import rankedEmblem from '../../images/ranked-emblems/Emblem_Master.png'
import rivenExample from '../../images/riven-example.jpeg'
import rivenExampleIcon from '../../images/riven-example-icon.jpeg'
import { InfoRounded } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: '100%'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    },
    progressBar: {
      maxHeight: 0,
      minWidth: '99%'
    }
  })
)

const Profile: React.FC = () => {
  const classes = useStyles()
  const [matchList, setMatchList] = React.useState<any>([
    { dale: 'dale' },
    { dale: 'dale' },
    { dale: 'dale' },
    { dale: 'dale' },
    { dale: 'dale' },
    { dale: 'dale' }
  ])

  const fetchMatchList = React.useCallback(
    async (term?: string) => {
      const matchList = null
      setMatchList(matchList)
    },
    [matchList]
  )

  return (
    <Container>
      <ProfileData>
        <ContentContainer>
          <RankEmblemImage src={rankedEmblem} />
          <ProfileInfo>Master</ProfileInfo>
          <ProfileInfo>670 W | 700 L</ProfileInfo>
        </ContentContainer>

        <ContentContainer>
          <ProfileImage src={challengerIcon} />
          <ProfileInfo>Lucas Boulle</ProfileInfo>
          <ProfileInfo>378</ProfileInfo>
        </ContentContainer>

        <ContentContainer></ContentContainer>
      </ProfileData>
      <PlayedChampions>
        <ContentContainer>
          <ChampionIcon src={rivenExampleIcon} />
          <ProfileInfo>Master</ProfileInfo>
        </ContentContainer>
        <ContentContainer>
          <ChampionIcon src={rivenExampleIcon} />
          <ProfileInfo>Master</ProfileInfo>
        </ContentContainer>
        <ContentContainer>
          <ChampionIcon src={rivenExampleIcon} />
          <ProfileInfo>Master</ProfileInfo>
        </ContentContainer>
      </PlayedChampions>
      <MatchList>
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          {matchList ? (
            matchList.map((match: any, index: number) => (
              <GridListTile key={1}>
                <img src={rivenExample} />
                <GridListTileBar
                  title={'3/7/9 - 50:12'}
                  subtitle={'Solo/duo'}
                  actionIcon={
                    <IconButton className={classes.icon} onClick={() => null}>
                      <InfoRounded />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))
          ) : (
            <LinearProgress className={classes.progressBar} />
          )}
        </GridList>
      </MatchList>
    </Container>
  )
}

export default Profile
