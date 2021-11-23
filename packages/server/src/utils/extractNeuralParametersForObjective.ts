import { IParticipant } from "../interfaces/IParticipant";

export const extractNeuralParametersForObjectives = (participant: IParticipant) => {
  return {
    baronKills: participant.baronKills,
    damageDealtToBuildings: participant.damageDealtToBuildings,
    damageDealtToObjectives: participant.damageDealtToObjectives,
    damageDealtToTurrets: participant.damageDealtToTurrets,
    damageSelfMitigated: participant.damageSelfMitigated,
    dragonKills: participant.dragonKills,
    nexusKills: participant.nexusKills,
    nexusLost: participant.nexusLost,
    nexusTakedowns: participant.nexusTakedowns,
    objectivesStolen: participant.objectivesStolen,
    teamId: participant.teamId,
    turretKills: participant.turretKills,
    // turretTakedowns: participant.turretTakendowns,
    // turretsLost: participant.turretLost,
    win: participant.win
  }
}