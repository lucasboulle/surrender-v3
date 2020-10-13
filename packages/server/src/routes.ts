import bodyParser from 'body-parser'
import express from 'express'
import { 
  getMatchById, 
  getMatchlistByAccount, 
  getSummonerByAccount, 
  getSummonerByName, 
  getTimelinesByMatch 
} from './api/riot/RiotApiService'
import { authenticate, decodeUserToken, generateToken } from './Services/AuthService'

const routes = express.Router()
const unprotectedRoutes = [
  '/auth/login'
]

routes.use((request, response, next) => {
  if(unprotectedRoutes.find(r => r === request.path)) {
    next()
  } else {
    const userToken = request.headers['x-user-token']
    let decodedToken
    if(userToken) {
      decodedToken = decodeUserToken(String(userToken))
    }

    if(!userToken || !decodedToken) {
      const accessDenied = new Error('Acesso negado')
      response.statusCode = 400

      next(accessDenied)
    }
  }

  next()
})

routes.get('/echo', (request, response) => {  
  return response.json({ message: 'Server response - OK'  })
})

routes.post('/auth/login', async (request, response) => {  
  const {email, password} = request.body
  // const userAuthentication = await authenticate(email, password)
  const jwtToken = generateToken(email, password)

  response.setHeader('x-user-token', jwtToken)

  return response.json({ message: 'User logged!'  })
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