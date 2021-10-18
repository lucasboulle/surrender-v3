import { getChampionByKey } from "./getChampioByKey"

export const buildGroupByChampionMatchListData = (matchList: any, dataset: any) => {
  const groupedObject = matchList.reduce((a: any, c: any) => (a[c.name] = (a[c.name] || 0) + 1, a), Object.create(null))
  const championPoolList = []
  for (const [championKey, amount] of Object.entries(groupedObject)) {
    championPoolList.push({
      //@ts-ignore
      name: getChampionByKey(String(championKey), dataset).name,
      //@ts-ignore
      pv: amount / matchList.length
    })
  }

  return championPoolList
}