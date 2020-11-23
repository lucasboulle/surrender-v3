export const buildChampionUrl = (imageType: 'splash' | 'loading' | 'champion', championKey: string, dataset: any) => {

  let championName
  const ddragonChampionImageBaseUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion'
  Object.keys(dataset).forEach(key => {
    if (dataset[key].key === championKey) {
      championName = key
    }
  })

  return imageType === 'champion' 
  ? `http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/${championName}.png`
  : `${ddragonChampionImageBaseUrl}/${imageType}/${championName}_0.jpg`
}
