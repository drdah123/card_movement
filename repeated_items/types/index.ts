import { CardName } from '../cards';

export type SubsType = {
  _id: string;
  price: number;
  for: string;
  discount: number;
  is: boolean;
};

export type PicType = {
  url: string;
};
export type PlayersIDs =
  | 'firstPlayer'
  | 'secondPlayer'
  | 'thirdPlayer'
  | 'fourthPlayer';
export type MshariaPowerType = 40 | 20 | 10 | 4;
export type ImagesCardsBackName = 'default';

type ManualMsharia = {
  id: number;
  MshariaPowerType: MshariaPowerType;
  cards: CardName[];
};
export interface PlayerType {
  id: PlayersIDs;
  teamId: 0 | 1;
  name: string;
  playOrder: number;
  cards: Card[];
  level: LevelNames;
  manualMsharia: ManualMsharia[];
  //  before msharia sending
  sendMsharia: (MshariaPowerType | ManualMsharia)[];
  // after approved msharia
  msharia: PlayerMshariaType | null;
}
export interface PlayerMshariaType {
  bigCard: CardIds;
  cards: Card[] | string[];
  is100Same?: boolean;
  mshariaPower: number;
  bigMshroaPower: MshariaPowerType;
}
export type LevelNames = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export interface PlayersObjectType {
  firstPlayer: PlayerType;
  secondPlayer: PlayerType;
  thirdPlayer: PlayerType;
  fourthPlayer: PlayerType;
}
export interface Card {
  id: CardIds;
  isPlayed: IsPlayedType;
  name: CardName;
  image: any;
}
export interface CardsDataObj {
  [key: string]: Card;
}
export type CardIds = 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export type IsPlayedType =
  | { is: false }
  | { is: true; playingTurnNum: number; isGroundCard?: boolean };

export type CardsPlacesType = {
  [key: string]: number;
};
