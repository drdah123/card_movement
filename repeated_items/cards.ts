export type CardName =
  | 'A_D'
  | 'A_H'
  | 'A_C'
  | 'A_S'
  | 'S_7'
  | 'D_7'
  | 'H_7'
  | 'C_7'
  | 'S_8'
  | 'D_8'
  | 'H_8'
  | 'C_8'
  | 'S_9'
  | 'D_9'
  | 'H_9'
  | 'C_9'
  | 'S_10'
  | 'D_10'
  | 'H_10'
  | 'C_10'
  | 'J_S'
  | 'J_D'
  | 'J_H'
  | 'J_C'
  | 'Q_S'
  | 'Q_D'
  | 'Q_H'
  | 'Q_C'
  | 'K_S'
  | 'K_D'
  | 'K_H'
  | 'K_C';

// A
import A_C from './images/card/A/AC_3x.png';
import A_D from './images/card/A/AD_3x.png';
import A_H from './images/card/A/AH_3x.png';
import A_S from './images/card/A/AS_3x.png';
// A
// 7
import C_7 from './images/card/7/7C_3x.png';
import H_7 from './images/card/7/7H_3x.png';
import D_7 from './images/card/7/7D_3x.png';
import S_7 from './images/card/7/7S_3x.png';
// 7
// 8
import C_8 from './images/card/8/8C_3x.png';
import H_8 from './images/card/8/8H_3x.png';
import D_8 from './images/card/8/8D_3x.png';
import S_8 from './images/card/8/8S_3x.png';
// 8
// 9
import C_9 from './images/card/9/9C_3x.png';
import H_9 from './images/card/9/9H_3x.png';
import D_9 from './images/card/9/9D_3x.png';
import S_9 from './images/card/9/9S_3x.png';
// 9
// 10
import C_10 from './images/card/10/TC_3x.png';
import H_10 from './images/card/10/TH_3x.png';
import D_10 from './images/card/10/TD_3x.png';
import S_10 from './images/card/10/TS_3x.png';
// J
import J_H from './images/card/J/JH_3x.png';
import J_C from './images/card/J/JC_3x.png';
import J_D from './images/card/J/JD_3x.png';
import J_S from './images/card/J/JS_3x.png';
// J
// Q
import Q_H from './images/card/Q/QH_3x.png';
import Q_C from './images/card/Q/QC_3x.png';
import Q_D from './images/card/Q/QD_3x.png';
import Q_S from './images/card/Q/QS_3x.png';
// Q
// K
import K_H from './images/card/K/KH_3x.png';
import K_C from './images/card/K/KC_3x.png';
import K_D from './images/card/K/KD_3x.png';
import K_S from './images/card/K/KS_3x.png';
import { Card, PlayersObjectType } from './types';
// K

export const cardsData: Card[] = [
  {
    id: 14,
    isPlayed: { is: false },
    name: 'A_D',
    image: A_D,
  },
  {
    id: 14,
    isPlayed: { is: false },
    name: 'A_H',
    image: A_H,
  },
  {
    id: 14,
    isPlayed: { is: false },
    name: 'A_C',
    image: A_C,
  },
  {
    id: 14,
    isPlayed: { is: false },
    name: 'A_S',
    image: A_S,
  },
  {
    id: 7,
    isPlayed: { is: false },
    name: 'S_7',
    image: S_7,
  },
  {
    id: 7,
    isPlayed: { is: false },
    name: 'D_7',
    image: D_7,
  },
  {
    id: 7,
    isPlayed: { is: false },
    name: 'H_7',
    image: H_7,
  },
  {
    id: 7,
    isPlayed: { is: false },
    name: 'C_7',
    image: C_7,
  },
  {
    id: 8,
    isPlayed: { is: false },
    name: 'S_8',
    image: S_8,
  },
  {
    id: 8,
    isPlayed: { is: false },
    name: 'D_8',
    image: D_8,
  },
  {
    id: 8,
    isPlayed: { is: false },
    name: 'H_8',
    image: H_8,
  },
  {
    id: 8,
    isPlayed: { is: false },
    name: 'C_8',
    image: C_8,
  },
  {
    id: 9,
    isPlayed: { is: false },
    name: 'S_9',
    image: S_9,
  },
  {
    id: 9,
    isPlayed: { is: false },
    name: 'D_9',
    image: D_9,
  },
  {
    id: 9,
    isPlayed: { is: false },
    name: 'H_9',
    image: H_9,
  },
  {
    id: 9,
    isPlayed: { is: false },
    name: 'C_9',
    image: C_9,
  },
  {
    id: 10,
    isPlayed: { is: false },
    name: 'S_10',
    image: S_10,
  },
  {
    id: 10,
    isPlayed: { is: false },
    name: 'D_10',
    image: D_10,
  },
  {
    id: 10,
    isPlayed: { is: false },
    name: 'H_10',
    image: H_10,
  },
  {
    id: 10,
    isPlayed: { is: false },
    name: 'C_10',
    image: C_10,
  },
  {
    id: 11,
    isPlayed: { is: false },
    name: 'J_S',
    image: J_S,
  },
  {
    id: 11,
    isPlayed: { is: false },
    name: 'J_D',
    image: J_D,
  },
  {
    id: 11,
    isPlayed: { is: false },
    name: 'J_H',
    image: J_H,
  },
  {
    id: 11,
    isPlayed: { is: false },
    name: 'J_C',
    image: J_C,
  },
  {
    id: 12,
    isPlayed: { is: false },
    name: 'Q_S',
    image: Q_S,
  },
  {
    id: 12,
    isPlayed: { is: false },
    name: 'Q_D',
    image: Q_D,
  },
  {
    id: 12,
    isPlayed: { is: false },
    name: 'Q_H',
    image: Q_H,
  },
  {
    id: 12,
    isPlayed: { is: false },
    name: 'Q_C',
    image: Q_C,
  },
  {
    id: 13,
    isPlayed: { is: false },
    name: 'K_S',
    image: K_S,
  },
  {
    id: 13,
    isPlayed: { is: false },
    name: 'K_D',
    image: K_D,
  },
  {
    id: 13,
    isPlayed: { is: false },
    name: 'K_H',
    image: K_H,
  },
  {
    id: 13,
    isPlayed: { is: false },
    name: 'K_C',
    image: K_C,
  },
];
export function initialPlayersState(): PlayersObjectType {
  const res: PlayersObjectType = {
    firstPlayer: {
      id: 'firstPlayer',
      name: 'firstPlayer',
      teamId: 0,
      playOrder: 0,
      cards: cardsData.slice(0, 8),
      level: 'beginner',
      msharia: null,
      sendMsharia: [],
      manualMsharia: [],
    },
    secondPlayer: {
      id: 'secondPlayer',
      name: 'secondPlayer',
      teamId: 1,
      playOrder: 1,
      cards: cardsData.slice(7, 15),
      level: 'beginner',
      msharia: null,
      sendMsharia: [],
      manualMsharia: [],
    },
    thirdPlayer: {
      id: 'thirdPlayer',
      name: 'thirdPlayer',
      teamId: 0,
      playOrder: 2,
      cards: cardsData.slice(14, 22),
      level: 'beginner',
      msharia: null,
      sendMsharia: [],
      manualMsharia: [],
    },
    fourthPlayer: {
      id: 'fourthPlayer',
      name: 'fourthPlayer',
      teamId: 1,
      playOrder: 2,
      cards: cardsData.slice(21, 29),
      level: 'beginner',
      msharia: null,
      sendMsharia: [],
      manualMsharia: [],
    },
  };
  return res;
}
