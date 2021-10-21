export const buildItemUrlWithImageType = (itemKey: number) => {

  const ddragonChampionImageBaseUrl = 'http://ddragon.leagueoflegends.com/cdn/11.19.1/img/item'

  return `${ddragonChampionImageBaseUrl}/${itemKey}`
}
