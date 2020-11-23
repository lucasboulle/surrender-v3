export const getChampionNameById = (championKey: string, dataset: any) => {
console.log('🚀 ~ file: getChampionNameById.ts ~ line 2 ~ getChampionNameById ~ championKey', championKey)

  let championName = ''
  Object.keys(dataset).forEach(key => {
    if (dataset[key].key === championKey) {
      console.log('🚀 ~ file: getChampionNameById.ts ~ line 10 ~ getChampionNameById ~ key', key)
      championName = key
    }
  })

  return championName
}
