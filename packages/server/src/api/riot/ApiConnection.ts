import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

const newApiBaseUrl = 'https://americas.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-0e6ca3c7-3a8b-4c60-bc34-94c9b3915a47'
// puuid da minha conta: boulle => 
// qfNFbhyhq_YiCVDjgQYcp9Ne9E74nZr23IbYvIkqDUYK5iwk3uvBEk97pWxdkbln5I2ewZihp-iWSA
// matchId de exemplo: BR1_2330861494

export const getRequest = async (path: string, queryParams?: string[][], riotApiVersion: number = 4) => {
  const baseUrl = riotApiVersion === 5 ? newApiBaseUrl : apiBaseUrl

  try {
    const response = await fetch(baseUrl + path + `?api_key=${apiKey}`, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error('Erro na conexão com a api')
    }

    return await response.json()
  } catch (e) {
    console.log(e)
    return null
  }
}
