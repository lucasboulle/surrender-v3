import { getRequest } from "../api/riot/ApiConnection"
import { IMatch } from "../interfaces/IMatch"
import { IParticipant } from "../interfaces/IParticipant"


export const getSummonerByName = async (summonerName: string) => {
  return await getRequest(`/summoner/v4/summoners/by-name/${summonerName}`)
} 

export const getSummonerByAccount = async (accountId: string) => {
  return await getRequest(`/summoner/v4/summoners/by-puuid/${accountId}`)
}

export const getSummonerEntriesBySummonerId = async (summonerId: string) => {
  const response = await getRequest(`/league/v4/entries/by-summoner/${summonerId}`)

  const soloDuoQueue = response.find((queue: any) => queue.queueType === 'RANKED_SOLO_5x5')
  return {
    leaguePoints: soloDuoQueue.leaguePoints,
    wins: soloDuoQueue.wins,
    losses: soloDuoQueue.losses,
    rank: soloDuoQueue.rank,
    tier: soloDuoQueue.tier 
  }
}

export const getMatchById = async (matchId: string) => {
  return await getRequest(`/match/v5/matches/${matchId}`, [], 5)
} 

export const getMatchlistByPuuid = async (puuid: string) => {
  const matchIds: string[] = await getRequest(`/match/v5/matches/by-puuid/${puuid}/ids`, [['count', '15']], 5)

  return await Promise.all(matchIds.map(async (matchId: string) => {
    const match: IMatch = await getRequest(`/match/v5/matches/${matchId}`, [], 5)
    const participantInfo: IParticipant = match.info.participants.find((participant) => participant.puuid === puuid)
    return {
      match,
      participantInfo
    }
  }))
}

export const getTimelinesByMatch = async (matchId: string) => {
  return await getRequest(`/match/v5/matches/${matchId}/timeline`, [], 5)
}


export const getSummonerLeagueByAccount = async (accountId: string) => {
  const response = await getRequest(`/league/v4/entries/by-summoner/${accountId}`) 
  const soloDuoQueue = response.find((queue: any) => queue.queueType === 'RANKED_SOLO_5x5')
  return {
    leaguePoints: soloDuoQueue.leaguePoints,
    wins: soloDuoQueue.wins,
    losses: soloDuoQueue.losses,
    rank: soloDuoQueue.rank,
    tier: soloDuoQueue.tier 
  }
} 
