import { IParticipant } from "../interfaces/IParticipant";

export const extractNeuralParametersForFighting = (participant: IParticipant) => {
  return {
    assists: participant.assists,
    championId: participant.championId,
    damageSelfMitigated: participant.damageSelfMitigated,
    deaths: participant.deaths,
    doubleKills: participant.doubleKills,
    firstBloodAssist: participant.firstBloodAssist,
    firstBloodKill: participant.firstBloodKill,
    kills: participant.kills,
    largestKillingSpree: participant.largestKillingSpree,
    largestMultiKill: participant.largestMultiKill,
    magicDamageDealt: participant.magicDamageDealt,
    magicDamageDealtToChampions: participant.magicDamageDealtToChampions,
    magicDamageTaken: participant.magicDamageTaken,
    pentaKills: participant.pentaKills,
    physicalDamageDealt: participant.physicalDamageDealt,
    physicalDamageTaken: participant.physicalDamageTaken,
    teamId: participant.teamId,
    totalDamageDealt: participant.totalDamageDealt,
    totalDamageDealtToChampions: participant.totalDamageDealtToChampions,
    totalDamageShieldedOnTeammates: participant.totalDamageShieldedOnTeammates,
    totalDamageTaken: participant.totalDamageTaken,
    totalHeal: participant.totalHeal,
    totalHealsOnTeammates: participant.totalHealsOnTeammates,
    totalMinionsKilled: participant.totalMinionsKilled,
    totalTimeSpentDead: participant.totalTimeSpentDead,
    totalUnitsHealed: participant.totalUnitsHealed,
    tripleKills: participant.tripleKills,
    quadraKills: participant.quadraKills,
    trueDamageDealt: participant.trueDamageDealt,
    trueDamageDealtToChampions: participant.trueDamageDealtToChampions,
    trueDamageTaken: participant.trueDamageTaken,
    win: participant.win
  }
}