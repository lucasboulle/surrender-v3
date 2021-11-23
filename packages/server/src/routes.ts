import bodyParser from 'body-parser'
import express from 'express'
import { decodeUserToken, generateToken } from './Services/AuthService'
import brain from 'brain.js' 
import { updateNeuralData } from './utils/updateNeuralData'
import { getSummonerByName, getSummonerByAccount, getSummonerEntriesBySummonerId, getMatchById, getMatchlistByPuuid, getTimelinesByMatch, getSummonerActiveGame } from './Services/RiotApiService'
import { extractNeuralParametersFromRiotPayload } from './utils/extractNeuralParametersFromRiotPayload'
import { getNeuralDataFromTraining } from './utils/getNeuralDataFromTraining'
import * as dataset from '../data-assets/match-by-id-response-example.json' 

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

const train = async (train?: {
  input: number[]
  output: number[]
}) => {
  if (train) {
    net.train([train])
  } else {
    const contentData: any = await getNeuralDataFromTraining()

    net.train(contentData);
    let winRatio = 0
    // for (let index = 0; index < dataset.matches.length; index++) {
    //   for (let j = 0; j < dataset.matches[index].match.info.participants.length; j++) {
    //     //@ts-ignore
    //     const output: any = net.run(extractNeuralParametersFromRiotPayload(dataset.matches[index].match.info.participants[j] as any))
    //     console.log('🚀 ~ file: routes.ts ~ line 40 ~  output.win',  output.win)
    //     winRatio += output.win
    //   }
    // }
    // const output: any = net.run(extractNeuralParametersFromRiotPayload(dataset.matches[0].match.info.participants[8] as any)); 
    // const output1: any = net.run(extractNeuralParametersFromRiotPayload(dataset.matches[0].match.info.participants[9] as any));// [0.987]
    // console.log('Saída do primeiro conjunto: ', output)
    // console.log('Saída do segundo conjunto: ', output1)
    // console.log('Saída do segundo conjunto: ', ((output.win + output1.win)/2))
    // console.log(`média de acuracidade para ${dataset.matches.length*10} players: `, winRatio/(dataset.matches.length*10))
  }
}

train();

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

  // const output = net.run(extractNeuralParametersFromRiotPayload(dataset.info.participants[0] as any)); // [0.987]
  // console.log('🚀 ~ file: routes.ts ~ line 76 ~ routes.get ~ output', output)

  // return response.json({ message: output })
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

  // updateNeuralData(apiReponse)

  return response.json({ message: await getTimelinesByMatch(String(query.matchId)) })
})

routes.get('/spectator/active-games/by-summonerId', async (request, response) => {
  const { query } = request

  return response.json({matchList: (await getSummonerActiveGame(String(query.puuid))) })
})


export default routes
