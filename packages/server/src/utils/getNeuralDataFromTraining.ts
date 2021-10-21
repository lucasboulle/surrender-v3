import { IParticipant } from "../interfaces/IParticipant"
import { extractNeuralParametersFromRiotPayload } from "./extractNeuralParametersFromRiotPayload"
import * as data from '../../data-assets/match-by-id-response-example.json' 
import _ from 'lodash'
import { IMatch } from "../interfaces/IMatch"

export const getNeuralDataFromTraining = async () => {
  const castedData: any = data
  console.log('🚀 ~ file: getNeuralDataFromTraining.ts ~ line 9 ~ getNeuralDataFromTraining ~ castedData', castedData)
  const chunkedNeuralData = castedData.matches.map((match: any) => {
    const chunkedArr = match.match.info.participants.map((participant: IParticipant) => {
      return {
        input: extractNeuralParametersFromRiotPayload(participant),
        output: {win: participant.win}
      }
    })
    return chunkedArr
  })

  console.log('🚀 ~ file: getNeuralDataFromTraining.ts ~ line 21 ~ getNeuralDataFromTraining ~  _.flatten(chunkedNeuralData)',  typeof _.flatten(chunkedNeuralData))
  return _.flatten(chunkedNeuralData)
}