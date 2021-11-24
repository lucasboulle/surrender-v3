import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

const newApiBaseUrl = 'https://americas.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-cf69f156-7710-4989-84c6-4e6cb937b285'
// puuid da minha conta: boulle => 
// qfNFbhyhq_YiCVDjgQYcp9Ne9E74nZr23IbYvIkqDUYK5iwk3uvBEk97pWxdkbln5I2ewZihp-iWSA
// summerId =>
// plEJwOOMK6D6324DdyHzWHxW3fbL0tihbEqAmW6rG2oh9kI
// matchId de exemplo: BR1_2330861494

export const getRequest = async (path: string, queryParams?: string[][], riotApiVersion: number = 4) => {
  const baseUrl = riotApiVersion === 5 ? newApiBaseUrl : apiBaseUrl
  let params = ''
  if (queryParams && queryParams.length) {
    queryParams.map((paramArr: string[]) => {
      params += `&${paramArr[0]}=${paramArr[1]}`
    })
  }

  try {
    const response = await fetch(baseUrl + path + `?api_key=${apiKey}${params}`, {
      method: 'GET',
    })

    console.log(response)
    if (!response.ok) {
      throw new Error('Erro na conexão com a api')
    }

    return await response.json()
  } catch (e) {
    console.log(e)
    return null
  }
}
