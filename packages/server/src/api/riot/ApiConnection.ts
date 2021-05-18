import fetch from 'node-fetch'

const apiBaseUrl = 'https://br1.api.riotgames.com/lol'

// TODO: Find another way to use this key
const apiKey = 'RGAPI-25e1d840-a43b-4c5f-a4b1-f78048fbc0ef'

export const getRequest = async (path: string, queryParams?: string[][]) => {
  const response = await fetch(apiBaseUrl + path + `?api_key=${apiKey}`, {
    method: 'GET',
  })
  
  console.log('🚀 ~ file: ApiConnection.ts ~ line 11 ~ response', response)
  if(!response.ok) {
    throw new Error('Erro na conexão com a api')
  }

  return response.json()
}
