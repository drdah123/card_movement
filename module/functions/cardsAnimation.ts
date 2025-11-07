import Display from '../../repeated_items/constants/Display';
import { Animated } from 'react-native';
import { CardsPlacesType, PlayerType } from '../../repeated_items/types';

function curveCards({
  i,
  cardsLength,
  position,
  spectate,
}: {
  i: number;
  cardsLength: number;
  position: 'top' | 'right' | 'left' | 'bottom';
  spectate?: boolean;
}) {
  const length = cardsLength;
  const half = Math.floor(length / 2);
  return position === 'bottom' && !spectate
    ? (i - half) * 2.5
    : (i - half) * 25;
}
function distanceFromCenter({ cardsLength }: { cardsLength: number }) {
  const length = cardsLength;
  return length === 1
    ? Display.setWidth(35)
    : length === 2
    ? Display.setWidth(20)
    : length === 3
    ? Display.setWidth(15)
    : length === 4
    ? Display.setWidth(10)
    : length === 5
    ? Display.setWidth(10)
    : length === 6
    ? Display.setWidth(10)
    : length === 7
    ? Display.setWidth(7.5)
    : Display.setWidth(5);
}
export function distanceAmongCards({
  i,
  position,
  cardsLength,
  spectate,
  cardName,
}: {
  cardsLength: number;
  i: number;
  position: 'top' | 'right' | 'left' | 'bottom';
  spectate?: boolean;
  cardName?: string;
}) {
  const num = distanceFromCenter({
    cardsLength,
  });
  const middle = position === 'bottom' && !spectate ? num : 10;

  let distanceBetweenCards;
  if (position == 'bottom' && !spectate) {
    if (cardsLength === 1) distanceBetweenCards = 0;
    else if (cardsLength === 2) distanceBetweenCards = Display.setWidth(25);
    else if (cardsLength === 3) distanceBetweenCards = Display.setWidth(20);
    else if (cardsLength === 4) distanceBetweenCards = Display.setWidth(15);
    else if (cardsLength === 5) distanceBetweenCards = Display.setWidth(12.5);
    else if (cardsLength === 6) distanceBetweenCards = Display.setWidth(10);
    else if (cardsLength === 7) distanceBetweenCards = Display.setWidth(9);
    else if (cardsLength === 8) distanceBetweenCards = Display.setWidth(8.5);
  }
  if (!distanceBetweenCards) distanceBetweenCards = Display.setWidth(0.5);
  const s = middle + i * distanceBetweenCards;
  return s;
}
export function translateY({
  cardsLength,
  i,
  position,
  spectate,
}: {
  i: number;
  cardsLength: number;
  position: 'top' | 'right' | 'left' | 'bottom';
  spectate?: boolean;
}): number {
  const length = cardsLength;
  const isEven = length % 2 === 0;
  const half = isEven ? length / 2 : Math.floor(length / 2);
  const deferentOfHalf = !isEven
    ? i - half
    : i >= half
    ? i - half + 1
    : i - half;
  const sign = Math.sign(deferentOfHalf);
  const absNum = Math.abs(deferentOfHalf);
  if (position === 'bottom' && !spectate) {
    if (isEven) {
      if (sign === 1) {
        if (absNum === 1) {
          return Display.setWidth(1);
        } else if (absNum === 2) {
          return -Display.setWidth(0);
        } else if (absNum === 3) {
          return -Display.setWidth(1);
        } else if (absNum === 4) {
          return -Display.setWidth(1);
        }
      } else {
        if (absNum === 1) {
          return Display.setWidth(2);
        } else if (absNum === 2) {
          return Display.setWidth(3);
        } else if (absNum === 3) {
          return Display.setWidth(4);
        } else if (absNum === 4) {
          return Display.setWidth(5);
        }
      }
    } else {
      if (sign === -1) return absNum * 3.5 + Display.setWidth(1);
      else if (sign === 1) return -(absNum * 7.5) + Display.setWidth(1);
    }
  }
  return Display.setWidth(1);
}
export function rotateCards({
  cardsLength,
  i,
  position,
  spectate,
}: {
  i: number;
  cardsLength: number;
  position: 'top' | 'right' | 'left' | 'bottom';
  spectate?: boolean;
}) {
  return position === 'bottom' && !spectate
    ? curveCards({ cardsLength, i, position, spectate })
    : curveCards({ cardsLength, i, position, spectate }) - 45;
}
// export function r({cardsLength,i}:{i:number, cardsLength: number}) {
//   if(cardsLength /2 > i) return 0
//   else if(cardsLength /2 < i) return 180
//   else return 0
// }
export function playCardAnimation({
  TranslateY,
  width,
  height,
  TranslateX,
  rotate,
  cardsLength,
  position,
  i,
  isGroundCard,
}: {
  i: number;
  position: 'top' | 'right' | 'left' | 'bottom';
  cardsLength: number;
  // TranslateY: SharedValue<number>;
  // width: SharedValue<number>;
  // height: SharedValue<number>;
  // left: SharedValue<number>;
  // rotate: SharedValue<string>;
  TranslateY: Animated.Value;
  width: Animated.Value;
  height: Animated.Value;
  TranslateX: Animated.Value;
  rotate: Animated.Value;
  isGroundCard: boolean;
}) {
  if (position === 'bottom') {
    Animated.timing(TranslateY, {
      toValue: isGroundCard
        ? -Display.setHeight(27.5)
        : translateY({ i, cardsLength, position }),
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(width, {
      toValue: isGroundCard ? 0.35 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(height, {
      toValue: isGroundCard ? 0.35 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(TranslateX, {
      toValue: isGroundCard ? Display.setWidth(35) : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(rotate, {
      toValue: isGroundCard ? 0 : rotateCards({ i, position, cardsLength }),
      duration: 500,
      useNativeDriver: true,
    }).start();
  } else if (position === 'top') {
    Animated.timing(TranslateY, {
      toValue: isGroundCard ? -200 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(width, {
      toValue: isGroundCard ? 1 : 0.9,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(height, {
      toValue: isGroundCard ? 1 : 0.7,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(TranslateX, {
      toValue: isGroundCard ? 10 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(rotate, {
      toValue: isGroundCard ? 0 : rotateCards({ i, position, cardsLength }),
      duration: 500,
      useNativeDriver: true,
    }).start();
  } else if (position === 'left') {
    Animated.timing(TranslateY, {
      toValue: isGroundCard ? -Display.setWidth(27.5) : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(width, {
      toValue: isGroundCard ? 1 : 0.9,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(height, {
      toValue: isGroundCard ? 1 : 0.9,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(TranslateX, {
      toValue: isGroundCard ? Display.setWidth(2.5) : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(rotate, {
      toValue: isGroundCard ? 0 : rotateCards({ i, position, cardsLength }),

      duration: 500,
      useNativeDriver: true,
    }).start();
  } else if (position === 'right') {
    Animated.timing(TranslateY, {
      toValue: isGroundCard ? -Display.setWidth(27.5) : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(width, {
      toValue: isGroundCard ? 1 : 0.9,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(height, {
      toValue: isGroundCard ? 1 : 0.9,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(TranslateX, {
      toValue: isGroundCard ? Display.setWidth(1.75) : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(rotate, {
      toValue: isGroundCard ? 0 : rotateCards({ i, position, cardsLength }),
      duration: 500,
      useNativeDriver: true,
    }).start();
  }
}

export function playedCardBottomAnimation({
  playCardAnimation,
  player,
  setCardPlaces,
}: {
  playCardAnimation: () => void;
  setCardPlaces: React.Dispatch<React.SetStateAction<CardsPlacesType>>;
  player: PlayerType;
}) {
  playCardAnimation();
  setCardPlaces((prv) => {
    player.cards
      .filter((card) => !card.isPlayed.is)
      .forEach((item, i) => {
        prv[item.name] = i;
      });
    return { ...prv };
  });
}
