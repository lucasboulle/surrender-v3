export const getChampionByKey = (championKey: string, dataset: any) => {

  let championName
  Object.keys(dataset).forEach(key => {
    
    if (dataset[key].key === championKey) {
      championName = dataset[key]
    }
  })

  return championName
}
