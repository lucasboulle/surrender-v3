import { IParticipant } from "../interfaces/IParticipant"
import { extractNeuralParametersFromRiotPayload } from "./extractNeuralParametersFromRiotPayload"
import * as data from '../../data-assets/match-by-id-response-example.json' 
import _ from 'lodash'
import { IMatch } from "../interfaces/IMatch"
import { extractNeuralParametersForAgression } from "./extractNeuralParametersForAgression"
import { extractNeuralParametersForFarming } from "./extractNeuralParametersForFarming"

export const getNeuralDataFarming = async () => {
  const castedData: any = data
  const chunkedNeuralData = castedData.matches.map((match: any) => {
    const chunkedArr = match.match.info.participants.map((participant: IParticipant) => {
      return {
        input: extractNeuralParametersForFarming(participant),
        output: {win: participant.totalMinionsKilled}
      }
    })
    return chunkedArr
  })

  return _.flatten(chunkedNeuralData)
}