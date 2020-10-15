import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-3769bd89-72aa-4fca-a6d4-b9f380d93449'

export const getRequest = async (path: string, queryParams?: string[][]) => {
  const response = await fetch(apiBaseUrl + path + `?api_key=${apiKey}`, {
    method: 'GET',
  })

  if(!response.ok) {
    throw new Error('Erro na conexão com a api')
  }

  return response.json()
}
