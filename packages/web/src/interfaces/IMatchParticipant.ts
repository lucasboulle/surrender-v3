import { IMatch } from "./IMatch";
import { IParticipant } from "./IParticipant";

export interface IMatchParticipant {
  match: IMatch
  participantInfo: IParticipant
}
