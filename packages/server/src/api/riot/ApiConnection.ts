import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-f02c6445-134f-42e0-9276-31bdca283f88'

export const getRequest = async (path: string, queryParams?: string[][]) => {
  const response = await fetch(apiBaseUrl + path + `?api_key=${apiKey}`, {
    method: 'GET',
  })

  if(!response.ok) {
    throw new Error('Erro na conexão com a api')
  }

  return response.json()
}
