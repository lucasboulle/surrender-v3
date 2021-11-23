import { IParticipant } from "../interfaces/IParticipant";

export const extractNeuralParametersForVision = (participant: IParticipant) => {
  return {
    unrealKills: participant.unrealKills,
    visionScore: participant.visionScore,
    visionWardsBoughtInGame: participant.visionWardsBoughtInGame,
    wardsKilled: participant.wardsKilled,
    // wardsPlaced: participant.wards,
    win: participant.win
  }
}