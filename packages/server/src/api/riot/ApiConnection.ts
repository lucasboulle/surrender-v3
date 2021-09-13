import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

const newApiBaseUrl = 'https://americas.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-a4265bff-a298-4bf9-b919-599df005401c'
// puuid da minha conta: boulle => 
// qfNFbhyhq_YiCVDjgQYcp9Ne9E74nZr23IbYvIkqDUYK5iwk3uvBEk97pWxdkbln5I2ewZihp-iWSA
// matchId de exemplo: BR1_2330861494

export const getRequest = async (path: string, queryParams?: string[][], riotApiVersion: number = 4) => {
  const baseUrl = riotApiVersion === 5 ? newApiBaseUrl : apiBaseUrl
  
  const response = await fetch(baseUrl + path + `?api_key=${apiKey}`, {
    method: 'GET',
  })
  
  console.log('🚀 ~ file: ApiConnection.ts ~ line 11 ~ response', response)
  if(!response.ok) {
    throw new Error('Erro na conexão com a api')
  }

  return response.json()
}
