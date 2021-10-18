import bodyParser from 'body-parser'
import express from 'express'
import { authenticate, decodeUserToken, generateToken } from './Services/AuthService'
import brain from 'brain.js' 
import { updateNeuralData } from './utils/updateNeuralData'
import { getSummonerByName, getSummonerByAccount, getSummonerEntriesBySummonerId, getMatchById, getMatchlistByPuuid, getTimelinesByMatch } from './Services/RiotApiService'

const routes = express.Router()
const unprotectedRoutes = [
  '/auth/login',
  '/echo'
]

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
}

const net = new brain.NeuralNetwork(config)

const train = (train?: {
  input: number[]
  output: number[]
}) => {
  if (train) {
    net.train([train])
  } else {
    const contentData = require('../data-assets/match-by-id-response-example.json')

    net.train(contentData);
  }
}

// train();

routes.use((request, response, next) => {
  
  if(unprotectedRoutes.find(r => r === request.path)) {
    next()
  } else {
    const userToken = request.headers['x-user-token']
    let decodedToken
    if(userToken) {
      decodedToken = decodeUserToken(String(userToken))
    }

    // if(!userToken || !decodedToken) {
    //   const accessDenied = new Error('Acesso negado')
    //   response.statusCode = 400

    //   next(accessDenied)
    // }
  }

  next()
})

routes.get('/echo', (request, response) => {  

  // train({ input: [0, 0], output: [0] })
  // const output = net.run([1, 0]); // [0.987]

  // updateNeuralData({
  //   teste: 'sucesso 2!!!'
  // })

  // const test = require('./train-data.json')

  // const test2 = test.map((v: any) => v.teste)

  const output = net.run([1, 0]); // [0.987]

  return response.json({ message: output })
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

  return response.json({...(await getSummonerByName(String(query.summonerName))) })
})

routes.get('/summoner/by-account', async (request, response) => {
  const { query } = request

  return response.json({...(await getSummonerByAccount(String(query.puuid))) })
})

routes.get('/summoner/entries/by-summoner', async (request, response) => {
  const { query } = request
  
  return response.json({...(await getSummonerEntriesBySummonerId(String(query.summonerId))) })
})


routes.get('/match/by-id', async (request, response) => {
  const { query } = request
  // const output = net.run([1, 0]); // [0.987]
  return response.json({ ...(await getMatchById(String(query.matchId))) })

})

routes.get('/matchlist/by-puuid', async (request, response) => {
  const { query } = request

  return response.json({matchList: (await getMatchlistByPuuid(String(query.puuid))) })
})

routes.get('/timelines/by-match', async (request, response) => {
  const { query } = request
  const apiReponse  = await getTimelinesByMatch(String(query.matchId))

  updateNeuralData(apiReponse)

  return response.json({ message: await getTimelinesByMatch(String(query.matchId)) })
})


export default routes