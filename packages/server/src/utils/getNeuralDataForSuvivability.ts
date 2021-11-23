import { IParticipant } from "../interfaces/IParticipant"
import { extractNeuralParametersFromRiotPayload } from "./extractNeuralParametersFromRiotPayload"
import * as data from '../../data-assets/match-by-id-response-example.json' 
import _ from 'lodash'
import { IMatch } from "../interfaces/IMatch"
import { extractNeuralParametersForAgression } from "./extractNeuralParametersForAgression"
import { extractNeuralParametersForVision } from "./extractNeuralParametersForVision"
import { extractNeuralParametersForSurvivability } from "./extractNeuralParametersForSuvivability"

export const getNeuralDataForSurvivability = async () => {
  const castedData: any = data
  const chunkedNeuralData = castedData.matches.map((match: any) => {
    const chunkedArr = match.match.info.participants.map((participant: IParticipant) => {
      return {
        input: extractNeuralParametersForSurvivability(participant),
        output: {win: participant.deaths}
      }
    })
    return chunkedArr
  })

  return _.flatten(chunkedNeuralData)
}