export const getChampionNameById = (championKey: string, dataset: any) => {
  let championName = ''
  Object.keys(dataset).forEach(key => {
    if (dataset[key].key === championKey) {
      championName = key
    }
  })

  return championName
}
