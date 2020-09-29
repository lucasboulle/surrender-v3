import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-d71e9d04-f819-43c5-aa28-32b2411dce8c'

export const getRequest = async (path: string, queryParams?: string[][]) => {
  const response = await fetch(apiBaseUrl + path + `?api_key=${apiKey}`, {
    method: 'GET',
  })
  console.log('getRequest -> response', response)

  if(!response.ok) {
    throw new Error('Erro na conexão com a api')
  }

  return response.json()
}