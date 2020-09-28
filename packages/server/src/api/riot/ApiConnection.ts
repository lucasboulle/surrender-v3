import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-bc505357-9ccb-4f4a-89ba-e8e2d81ab4b5'

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