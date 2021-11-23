import { IParticipant } from "../interfaces/IParticipant"
import { extractNeuralParametersFromRiotPayload } from "./extractNeuralParametersFromRiotPayload"
import * as data from '../../data-assets/match-by-id-response-example.json' 
import _ from 'lodash'
import { IMatch } from "../interfaces/IMatch"

export const getNeuralDataForFighting = async () => {
  const castedData: any = data
  const chunkedNeuralData = castedData.matches.map((match: any) => {
    const chunkedArr = match.match.info.participants.map((participant: IParticipant) => {
      return {
        input: extractNeuralParametersFromRiotPayload(participant),
        output: {win: participant.totalDamageDealt}
      }
    })
    return chunkedArr
  })

  return _.flatten(chunkedNeuralData)
}