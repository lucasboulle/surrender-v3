import { IParticipant } from "./IParticipant";
import { ITeam } from "./ITeam";

export interface IInfo {
  gameCreation: number
  gameDuration: number
  gameId: number
  gameMode: string
  gameStartTimeStamp: number
  gameType: string
  gameVersion: string
  mapId: number
  participants: IParticipant[]
  plataformId: string
  queueId: number
  teams: ITeam
  tournamenCode?: string
  gameEndTimestamp: number
}