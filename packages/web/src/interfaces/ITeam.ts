import { IBan } from "./IBan";
import { IObjectives } from "./IObjectives";

export interface ITeam {
  bans: IBan[]
  objectives: IObjectives
  teamId: number
  win: boolean
}