export const buildItemUrl = (itemKey: number) => {

  const ddragonChampionImageBaseUrl = 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/item'

  return `${ddragonChampionImageBaseUrl}/${itemKey}.png`
}
