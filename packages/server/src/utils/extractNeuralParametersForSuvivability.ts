import { IParticipant } from "../interfaces/IParticipant";

export const extractNeuralParametersForSurvivability = (participant: IParticipant) => {
  return {
    // bountyLevel: participant.boun,
    damageSelfMitigated: participant.damageSelfMitigated,
    deaths: participant.deaths,
    // individualPosition: participant.individualPosition,
    longestTimeSpentLiving: participant.longestTimeSpentLiving,
    totalDamageDealt: participant.totalDamageDealt,
    win: participant.win
  }
}