import { IParticipant } from "../interfaces/IParticipant";

export const extractNeuralParametersForFarming = (participant: IParticipant) => {
  return {
    deaths: participant.deaths,
    goldEarned: participant.goldEarned,
    goldSpent: participant.goldSpent,
    neutralMinionsKilled: participant.neutralMinionsKilled,
    totalDamageDealt: participant.totalDamageDealt,
    totalMinionsKilled: participant.totalMinionsKilled,
    win: participant.win
  }
}