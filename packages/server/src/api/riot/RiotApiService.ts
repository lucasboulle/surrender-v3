import { getRequest } from "./ApiConnection"


export const getSummonerByName = async (summonerName: string) => {
  return await getRequest(`/summoner/v4/summoners/by-name/${summonerName}`)
} 

export const getSummonerByAccount = async (accountId: string) => {
  return await getRequest(`/summoner/v4/summoners/by-account/${accountId}`)
}

export const getMatchById = async (matchId: string) => {
  return await getRequest(`/match/v4/matches/${matchId}`)
} 

export const getMatchlistByAccount = async (accountId: string) => {
  return await getRequest(`/match/v4/matchlists/by-account/${accountId}`)
}

export const getTimelinesByMatch = async (matchId: string) => {
  return await getRequest(`/match/v4/timelines/by-match/${matchId}`)
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
