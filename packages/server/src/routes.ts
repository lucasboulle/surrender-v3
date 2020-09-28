import express from 'express'
import { getMatchById, getMatchlistByAccount, getSummonerByAccount, getSummonerByName, getTimelinesByMatch } from './api/riot/RiotApiService'

const routes = express.Router()

routes.get('/echo', (request, response) => {  
  return response.json({ message: 'Server response - OK'  })
})

routes.get('/summoner/by-name', async (request, response) => {
  const { query } = request
  return response.json({ message: await getSummonerByName(String(query.summonerName)) })
})

routes.get('/summoner/by-account', async (request, response) => {
  const { query } = request
  return response.json({ message: await getSummonerByAccount(String(query.summonerAccount)) })
})

routes.get('/match/by-id', async (request, response) => {
  const { query } = request
  return response.json({ message: await getMatchById(String(query.matchId)) })
})

routes.get('/matchlist/by-account', async (request, response) => {
  const { query } = request
  return response.json({ message: await getMatchlistByAccount(String(query.summonerAccount)) })
})

routes.get('/timelines/by-match', async (request, response) => {
  const { query } = request
  return response.json({ message: await getTimelinesByMatch(String(query.matchId)) })
})

export default routes