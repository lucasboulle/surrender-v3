export const buildItemUrl = (itemKey: number) => {

  const ddragonChampionImageBaseUrl = 'http://ddragon.leagueoflegends.com/cdn/11.19.1/img/item'

  return `${ddragonChampionImageBaseUrl}/${itemKey}.png`
}
