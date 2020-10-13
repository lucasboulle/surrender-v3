import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-1ea4c946-ce76-407e-9f6a-22c15b4db1da'

export const getRequest = async (path: string, queryParams?: string[][]) => {
  const response = await fetch(apiBaseUrl + path + `?api_key=${apiKey}`, {
    method: 'GET',
  })

  if(!response.ok) {
    throw new Error('Erro na conexão com a api')
  }

  return response.json()
}